import {
  BaseAddress,
  BaseKey,
  BaseTransactionBuilder,
  BuildTransactionError,
  PublicKey as BasePublicKey,
  Signature,
  TransactionType,
} from '@bitgo/sdk-core';
import { BaseCoin as CoinConfig } from '@bitgo/statics';
import { Coin } from '@cosmjs/stargate';
import assert from 'assert';
import BigNumber from 'bignumber.js';

import { validDenoms } from './constants';
import { AtomTransaction, FeeData, MessageData } from './iface';
import { Transaction } from './transaction';
import utils from './utils';

export abstract class TransactionBuilder extends BaseTransactionBuilder {
  protected _transaction: Transaction;
  private _signatures: Signature[] = [];

  protected _type: string;
  protected _signerAddress: string;
  protected _sequence: number;
  protected _sendMessages: MessageData[];
  protected _gasBudget: FeeData;
  private _accountNumber?: number;
  private _chainId?: string;
  private _publicKey?: string;

  constructor(_coinConfig: Readonly<CoinConfig>) {
    super(_coinConfig);
    this._transaction = new Transaction(_coinConfig);
  }

  // get and set region
  /**
   * The transaction type.
   */
  protected abstract get transactionType(): TransactionType;

  /** @inheritdoc */
  protected get transaction(): Transaction {
    return this._transaction;
  }

  /** @inheritdoc */
  protected set transaction(transaction: Transaction) {
    this._transaction = transaction;
  }

  /** @inheritdoc */
  protected signImplementation(key: BaseKey): Transaction {
    throw new Error('Method not implemented.');
  }

  /** @inheritDoc */
  addSignature(publicKey: BasePublicKey, signature: Buffer): void {
    this._signatures.push({ publicKey, signature });
    this.transaction.addSignature(publicKey, signature);
  }

  type(type: string): void {
    this._type = type;
  }

  /**
   * Sets the signerAddress of this transaction.
   * This account will be responsible for paying transaction fees.
   *
   * @param {string} signerAddress the account that is sending this transaction
   * @returns {TransactionBuilder} This transaction builder
   */
  signerAddress(signerAddress: string): this {
    if (!utils.isValidAddress(signerAddress)) {
      throw new Error('transactionBuilder: sender isValidAddress check failed :' + signerAddress);
    }
    this._signerAddress = signerAddress;
    return this;
  }

  gasBudget(gasBudget: FeeData): this {
    this.validateGasBudget(gasBudget);
    this._gasBudget = gasBudget;
    return this;
  }

  /**
   *
   * @param {number} sequence - sequence data for tx signer
   * @returns {TransactionBuilder} This transaction builder
   */
  sequence(sequence: number): this {
    this.validateSequence(sequence);
    this._sequence = sequence;
    return this;
  }

  sendMessages(sendMessages: MessageData[]): this {
    this.validateMessageDataArray(sendMessages);
    this._sendMessages = sendMessages;
    return this;
  }

  publicKey(publicKey: string | undefined): this {
    this._publicKey = publicKey;
    return this;
  }

  accountNumber(accountNumber: number | undefined): this {
    this._accountNumber = accountNumber;
    return this;
  }

  chainId(chainId: string | undefined): this {
    this._chainId = chainId;
    return this;
  }
  /**
   * Initialize the transaction builder fields using the decoded transaction data
   *
   * @param {Transaction} tx the transaction data
   */
  initBuilder(tx: Transaction): void {
    this._transaction = tx;
    const txData = tx.toJson();
    this.type(txData.type);
    this.gasBudget(txData.gasBudget);
    this.signerAddress(txData.signerAddress);
    this.sendMessages(txData.sendMessages);
    this.gasBudget(txData.gasBudget);
    this.sequence(txData.sequence);
    this.publicKey(txData.publicKey);
    this.accountNumber(txData.accountNumber);
    this.chainId(txData.chainId);
  }

  /** @inheritdoc */
  protected fromImplementation(rawTransaction: string): Transaction {
    this.validateRawTransaction(rawTransaction);
    const tx = Transaction.fromRawTransaction(rawTransaction, this._coinConfig);
    this.initBuilder(tx);
    return this.transaction;
  }

  /** @inheritdoc */
  protected async buildImplementation(): Promise<Transaction> {
    this.transaction.atomTransaction = this.buildAtomTransaction();
    this.transaction.transactionType(this.transactionType);
    return this.transaction;
  }

  protected buildAtomTransaction(): AtomTransaction {
    assert(this._type, new BuildTransactionError('type is required before building'));
    assert(this._signerAddress, new BuildTransactionError('signerAddress is required before building'));
    assert(this._sequence >= 0, new BuildTransactionError('sequence is required before building'));
    assert(this._sendMessages, new BuildTransactionError('sendMessages are required before building'));
    assert(this._gasBudget, new BuildTransactionError('gasPrice is required before building'));

    return {
      type: this._type,
      signerAddress: this._signerAddress,
      sequence: this._sequence,
      sendMessages: this._sendMessages,
      gasBudget: this._gasBudget,
      publicKey: this._publicKey,
      accountNumber: this._accountNumber,
      chainId: this._chainId,
    };
  }

  validateAddress(address: BaseAddress, addressFormat?: string): void {
    if (!utils.isValidAddress(address.address)) {
      throw new BuildTransactionError('transactionBuilder: address isValidAddress check failed: ' + address.address);
    }
  }

  validateAmountData(amountArray: Coin[]): void {
    amountArray.forEach((coinAmount) => {
      const amount = BigNumber(coinAmount.amount);
      if (amount.isLessThanOrEqualTo(0)) {
        throw new BuildTransactionError('transactionBuilder: validateAmountData Invalid amount: ' + amount);
      }
      if (!validDenoms.find((denom) => denom === coinAmount.denom)) {
        throw new BuildTransactionError('transactionBuilder: validateAmountData Invalid denom: ' + coinAmount.denom);
      }
    });
  }

  validateGasBudget(gasBudget: FeeData): void {
    if (gasBudget.gasLimit <= 0) {
      throw new BuildTransactionError('Invalid gas limit ' + gasBudget.gasLimit);
    }
    this.validateAmountData(gasBudget.amount);
  }

  private validateMessageDataArray(sendMessages: MessageData[]) {
    for (const msg of sendMessages) {
      this.validateMessageData(msg);
    }
  }

  validateMessageData(messageData: MessageData): void {
    if (!messageData) {
      throw new BuildTransactionError(`Invalid MessageData: undefined`);
    }
    if (!messageData.typeUrl) {
      throw new BuildTransactionError(`Invalid MessageData typeurl: ` + messageData.typeUrl);
    }
    if (!messageData.value.toAddress) {
      throw new BuildTransactionError(`Invalid MessageData value.toAddress: ` + messageData.value.toAddress);
    }
    if (!messageData.value.fromAddress) {
      throw new BuildTransactionError(`Invalid MessageData value.fromAddress: ` + messageData.value.fromAddress);
    }
    this.validateAmountData(messageData.value.amount);
  }

  /** @inheritdoc */
  validateKey(key: BaseKey): void {
    throw new Error('Method not implemented.');
  }

  /** @inheritdoc */
  validateRawTransaction(rawTransaction: string): void {
    utils.validateRawTransaction(rawTransaction);
  }

  /** @inheritdoc */
  validateTransaction(transaction: Transaction): void {
    if (!transaction.atomTransaction) {
      return;
    }
    this.validateTransactionFields();
  }

  /**
   * Validates all fields are defined
   */
  private validateTransactionFields(): void {
    if (this._type === undefined) {
      throw new BuildTransactionError('Invalid transaction: missing type');
    }
    if (this._signerAddress === undefined) {
      throw new BuildTransactionError('Invalid transaction: missing signerAddress');
    }
    if (this._sequence === undefined) {
      throw new BuildTransactionError('Invalid transaction: missing sequence');
    }
    if (this._sendMessages === undefined) {
      throw new BuildTransactionError('Invalid transaction: missing sendMessages');
    }
    if (this._gasBudget === undefined) {
      throw new BuildTransactionError('Invalid transaction: missing gas budget data');
    }
  }

  /** @inheritdoc */
  validateValue(value: BigNumber): void {
    if (value.isLessThan(0)) {
      throw new BuildTransactionError('Value cannot be less than zero');
    }
  }

  private validateSequence(sequence: number) {
    if (sequence < 0) {
      throw new BuildTransactionError('Invalid sequence: less than zero');
    }
  }
}
