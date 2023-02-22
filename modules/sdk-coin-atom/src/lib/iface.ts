import { TransactionExplanation as BaseTransactionExplanation, TransactionType } from '@bitgo/sdk-core';
import { Coin } from '@cosmjs/stargate';

export interface TransactionExplanation extends BaseTransactionExplanation {
  type: TransactionType;
}

export interface MessageData {
  typeUrl: string;
  value: {
    fromAddress: string;
    toAddress: string;
    amount: Coin[];
  };
}

export interface FeeData {
  amount: Coin[];
  gasLimit: number;
}

/**
 * The transaction data returned from the toJson() function of a transaction
 */
export interface TxData extends AtomTransaction {
  id?: string;
}

export interface AtomTransaction {
  type: string;
  signerAddress: string;
  sequence: number;
  sendMessages: MessageData[];
  gasBudget: FeeData;
  accountNumber?: number;
  chainId?: string;
  publicKey?: string;
}
