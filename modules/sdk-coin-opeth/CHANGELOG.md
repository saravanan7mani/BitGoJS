# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 10.0.0 (2024-01-09)

### Bug Fixes

- **abstract-eth:** fix chainid related changes ([c3a21c4](https://github.com/BitGo/BitGoJS/commit/c3a21c4cc470f2147c80e235607011bd4896f911))
- **abstract-eth:** fix issues related to chainid ([9114b1b](https://github.com/BitGo/BitGoJS/commit/9114b1b95ca0929d2d1ef5b33ba4f35e1184b5c7))
- **sdk-coin-opeth:** enable chainid change for opeth ([d1e0eea](https://github.com/BitGo/BitGoJS/commit/d1e0eeab31d969774bd862736539f7840f7e9fe2))
- **sdk-coin-polygon:** fix issues ([85e9396](https://github.com/BitGo/BitGoJS/commit/85e93967abd056f5054198f385a1b109246a281f))
- **statics:** make corrections for arbeth and opeth ([5dfc405](https://github.com/BitGo/BitGoJS/commit/5dfc405a36fc97b2c902fec44562b169d8013a18))

### Code Refactoring

- **abstract-eth:** add common method to abstract-eth ([df6eea5](https://github.com/BitGo/BitGoJS/commit/df6eea5d299c415b30263d1713335c14e5abef4a))

### Features

- **abstract-eth:** add chain id as network identifier ([3ddec05](https://github.com/BitGo/BitGoJS/commit/3ddec05705cff891e46d21743d0ee864d68ab216))
- **sdk-coin-opeth:** add opeth sdk skeleton ([42fbefa](https://github.com/BitGo/BitGoJS/commit/42fbefa54f22fa5bdaef4150ef3a643843ec8684))
- **sdk-coin-opeth:** add opeth tokens ([1e50329](https://github.com/BitGo/BitGoJS/commit/1e503292d26cb46ca3e2336a8514018ab09f6759))

### BREAKING CHANGES

- **abstract-eth:** Type of nextContractSequenceId field in TransactionPrebuild
  interface is changed from string to number in AbstractEthLikeCoin and AbstractEthLikeNewCoins classes.
  getCustomChainName method is removed from Polygon class because a common
  method getCustomChainCommon has been added to AbstractEthLikeNewCoins
  class for all EthLike coins. replayProtectionOptions is not optional in buildTransaction method in AbstractEthLikeNewCoins
  and needs to be passed to derive the Eth common object from the chainId.
  signFinalPolygon method name from Polygon class is updated to signFinalEthLike so that
  it can be used for other EthLike coins. getBaseFactor method in Eth
  and Polygon class returns number instead of string just to align with
  AbstractEthLikeCoin
  Ticket: WIN-1012

# 9.0.0 (2024-01-03)

### Bug Fixes

- **sdk-coin-polygon:** fix issues ([85e9396](https://github.com/BitGo/BitGoJS/commit/85e93967abd056f5054198f385a1b109246a281f))
- **statics:** make corrections for arbeth and opeth ([5dfc405](https://github.com/BitGo/BitGoJS/commit/5dfc405a36fc97b2c902fec44562b169d8013a18))

### Code Refactoring

- **abstract-eth:** add common method to abstract-eth ([df6eea5](https://github.com/BitGo/BitGoJS/commit/df6eea5d299c415b30263d1713335c14e5abef4a))

### Features

- **abstract-eth:** add chain id as network identifier ([3ddec05](https://github.com/BitGo/BitGoJS/commit/3ddec05705cff891e46d21743d0ee864d68ab216))
- **sdk-coin-opeth:** add opeth sdk skeleton ([42fbefa](https://github.com/BitGo/BitGoJS/commit/42fbefa54f22fa5bdaef4150ef3a643843ec8684))
- **sdk-coin-opeth:** add opeth tokens ([1e50329](https://github.com/BitGo/BitGoJS/commit/1e503292d26cb46ca3e2336a8514018ab09f6759))

### BREAKING CHANGES

- **abstract-eth:** Type of nextContractSequenceId field in TransactionPrebuild
  interface is changed from string to number in AbstractEthLikeCoin and AbstractEthLikeNewCoins classes.
  getCustomChainName method is removed from Polygon class because a common
  method getCustomChainCommon has been added to AbstractEthLikeNewCoins
  class for all EthLike coins. replayProtectionOptions is not optional in buildTransaction method in AbstractEthLikeNewCoins
  and needs to be passed to derive the Eth common object from the chainId.
  signFinalPolygon method name from Polygon class is updated to signFinalEthLike so that
  it can be used for other EthLike coins. getBaseFactor method in Eth
  and Polygon class returns number instead of string just to align with
  AbstractEthLikeCoin
  Ticket: WIN-1012

# 8.0.0 (2023-12-18)

### Bug Fixes

- **sdk-coin-polygon:** fix issues ([85e9396](https://github.com/BitGo/BitGoJS/commit/85e93967abd056f5054198f385a1b109246a281f))
- **statics:** make corrections for arbeth and opeth ([5dfc405](https://github.com/BitGo/BitGoJS/commit/5dfc405a36fc97b2c902fec44562b169d8013a18))

### Code Refactoring

- **abstract-eth:** add common method to abstract-eth ([df6eea5](https://github.com/BitGo/BitGoJS/commit/df6eea5d299c415b30263d1713335c14e5abef4a))

### Features

- **sdk-coin-opeth:** add opeth sdk skeleton ([42fbefa](https://github.com/BitGo/BitGoJS/commit/42fbefa54f22fa5bdaef4150ef3a643843ec8684))
- **sdk-coin-opeth:** add opeth tokens ([1e50329](https://github.com/BitGo/BitGoJS/commit/1e503292d26cb46ca3e2336a8514018ab09f6759))

### BREAKING CHANGES

- **abstract-eth:** Type of nextContractSequenceId field in TransactionPrebuild
  interface is changed from string to number in AbstractEthLikeCoin and AbstractEthLikeNewCoins classes.
  getCustomChainName method is removed from Polygon class because a common
  method getCustomChainCommon has been added to AbstractEthLikeNewCoins
  class for all EthLike coins. replayProtectionOptions is not optional in buildTransaction method in AbstractEthLikeNewCoins
  and needs to be passed to derive the Eth common object from the chainId.
  signFinalPolygon method name from Polygon class is updated to signFinalEthLike so that
  it can be used for other EthLike coins. getBaseFactor method in Eth
  and Polygon class returns number instead of string just to align with
  AbstractEthLikeCoin
  Ticket: WIN-1012

# 7.0.0 (2023-12-12)

### Bug Fixes

- **sdk-coin-polygon:** fix issues ([85e9396](https://github.com/BitGo/BitGoJS/commit/85e93967abd056f5054198f385a1b109246a281f))
- **statics:** make corrections for arbeth and opeth ([5dfc405](https://github.com/BitGo/BitGoJS/commit/5dfc405a36fc97b2c902fec44562b169d8013a18))

### Code Refactoring

- **abstract-eth:** add common method to abstract-eth ([df6eea5](https://github.com/BitGo/BitGoJS/commit/df6eea5d299c415b30263d1713335c14e5abef4a))

### Features

- **sdk-coin-opeth:** add opeth sdk skeleton ([42fbefa](https://github.com/BitGo/BitGoJS/commit/42fbefa54f22fa5bdaef4150ef3a643843ec8684))
- **sdk-coin-opeth:** add opeth tokens ([1e50329](https://github.com/BitGo/BitGoJS/commit/1e503292d26cb46ca3e2336a8514018ab09f6759))

### BREAKING CHANGES

- **abstract-eth:** Type of nextContractSequenceId field in TransactionPrebuild
  interface is changed from string to number in AbstractEthLikeCoin and AbstractEthLikeNewCoins classes.
  getCustomChainName method is removed from Polygon class because a common
  method getCustomChainCommon has been added to AbstractEthLikeNewCoins
  class for all EthLike coins. replayProtectionOptions is not optional in buildTransaction method in AbstractEthLikeNewCoins
  and needs to be passed to derive the Eth common object from the chainId.
  signFinalPolygon method name from Polygon class is updated to signFinalEthLike so that
  it can be used for other EthLike coins. getBaseFactor method in Eth
  and Polygon class returns number instead of string just to align with
  AbstractEthLikeCoin
  Ticket: WIN-1012

# 6.0.0 (2023-12-09)

### Bug Fixes

- **sdk-coin-polygon:** fix issues ([85e9396](https://github.com/BitGo/BitGoJS/commit/85e93967abd056f5054198f385a1b109246a281f))
- **statics:** make corrections for arbeth and opeth ([5dfc405](https://github.com/BitGo/BitGoJS/commit/5dfc405a36fc97b2c902fec44562b169d8013a18))

### Code Refactoring

- **abstract-eth:** add common method to abstract-eth ([df6eea5](https://github.com/BitGo/BitGoJS/commit/df6eea5d299c415b30263d1713335c14e5abef4a))

### Features

- **sdk-coin-opeth:** add opeth sdk skeleton ([42fbefa](https://github.com/BitGo/BitGoJS/commit/42fbefa54f22fa5bdaef4150ef3a643843ec8684))

### BREAKING CHANGES

- **abstract-eth:** Type of nextContractSequenceId field in TransactionPrebuild
  interface is changed from string to number in AbstractEthLikeCoin and AbstractEthLikeNewCoins classes.
  getCustomChainName method is removed from Polygon class because a common
  method getCustomChainCommon has been added to AbstractEthLikeNewCoins
  class for all EthLike coins. replayProtectionOptions is not optional in buildTransaction method in AbstractEthLikeNewCoins
  and needs to be passed to derive the Eth common object from the chainId.
  signFinalPolygon method name from Polygon class is updated to signFinalEthLike so that
  it can be used for other EthLike coins. getBaseFactor method in Eth
  and Polygon class returns number instead of string just to align with
  AbstractEthLikeCoin
  Ticket: WIN-1012

# 5.0.0 (2023-12-05)

### Bug Fixes

- **sdk-coin-polygon:** fix issues ([85e9396](https://github.com/BitGo/BitGoJS/commit/85e93967abd056f5054198f385a1b109246a281f))
- **statics:** make corrections for arbeth and opeth ([5dfc405](https://github.com/BitGo/BitGoJS/commit/5dfc405a36fc97b2c902fec44562b169d8013a18))

### Code Refactoring

- **abstract-eth:** add common method to abstract-eth ([df6eea5](https://github.com/BitGo/BitGoJS/commit/df6eea5d299c415b30263d1713335c14e5abef4a))

### Features

- **sdk-coin-opeth:** add opeth sdk skeleton ([42fbefa](https://github.com/BitGo/BitGoJS/commit/42fbefa54f22fa5bdaef4150ef3a643843ec8684))

### BREAKING CHANGES

- **abstract-eth:** Type of nextContractSequenceId field in TransactionPrebuild
  interface is changed from string to number in AbstractEthLikeCoin and AbstractEthLikeNewCoins classes.
  getCustomChainName method is removed from Polygon class because a common
  method getCustomChainCommon has been added to AbstractEthLikeNewCoins
  class for all EthLike coins. replayProtectionOptions is not optional in buildTransaction method in AbstractEthLikeNewCoins
  and needs to be passed to derive the Eth common object from the chainId.
  signFinalPolygon method name from Polygon class is updated to signFinalEthLike so that
  it can be used for other EthLike coins. getBaseFactor method in Eth
  and Polygon class returns number instead of string just to align with
  AbstractEthLikeCoin
  Ticket: WIN-1012

# 4.0.0 (2023-11-28)

### Bug Fixes

- **sdk-coin-polygon:** fix issues ([85e9396](https://github.com/BitGo/BitGoJS/commit/85e93967abd056f5054198f385a1b109246a281f))
- **statics:** make corrections for arbeth and opeth ([5dfc405](https://github.com/BitGo/BitGoJS/commit/5dfc405a36fc97b2c902fec44562b169d8013a18))

### Code Refactoring

- **abstract-eth:** add common method to abstract-eth ([df6eea5](https://github.com/BitGo/BitGoJS/commit/df6eea5d299c415b30263d1713335c14e5abef4a))

### Features

- **sdk-coin-opeth:** add opeth sdk skeleton ([42fbefa](https://github.com/BitGo/BitGoJS/commit/42fbefa54f22fa5bdaef4150ef3a643843ec8684))

### BREAKING CHANGES

- **abstract-eth:** Type of nextContractSequenceId field in TransactionPrebuild
  interface is changed from string to number in AbstractEthLikeCoin and AbstractEthLikeNewCoins classes.
  getCustomChainName method is removed from Polygon class because a common
  method getCustomChainCommon has been added to AbstractEthLikeNewCoins
  class for all EthLike coins. replayProtectionOptions is not optional in buildTransaction method in AbstractEthLikeNewCoins
  and needs to be passed to derive the Eth common object from the chainId.
  signFinalPolygon method name from Polygon class is updated to signFinalEthLike so that
  it can be used for other EthLike coins. getBaseFactor method in Eth
  and Polygon class returns number instead of string just to align with
  AbstractEthLikeCoin
  Ticket: WIN-1012

# 3.0.0 (2023-11-24)

### Bug Fixes

- **sdk-coin-polygon:** fix issues ([85e9396](https://github.com/BitGo/BitGoJS/commit/85e93967abd056f5054198f385a1b109246a281f))
- **statics:** make corrections for arbeth and opeth ([5dfc405](https://github.com/BitGo/BitGoJS/commit/5dfc405a36fc97b2c902fec44562b169d8013a18))

### Code Refactoring

- **abstract-eth:** add common method to abstract-eth ([df6eea5](https://github.com/BitGo/BitGoJS/commit/df6eea5d299c415b30263d1713335c14e5abef4a))

### Features

- **sdk-coin-opeth:** add opeth sdk skeleton ([42fbefa](https://github.com/BitGo/BitGoJS/commit/42fbefa54f22fa5bdaef4150ef3a643843ec8684))

### BREAKING CHANGES

- **abstract-eth:** Type of nextContractSequenceId field in TransactionPrebuild
  interface is changed from string to number in AbstractEthLikeCoin and AbstractEthLikeNewCoins classes.
  getCustomChainName method is removed from Polygon class because a common
  method getCustomChainCommon has been added to AbstractEthLikeNewCoins
  class for all EthLike coins. replayProtectionOptions is not optional in buildTransaction method in AbstractEthLikeNewCoins
  and needs to be passed to derive the Eth common object from the chainId.
  signFinalPolygon method name from Polygon class is updated to signFinalEthLike so that
  it can be used for other EthLike coins. getBaseFactor method in Eth
  and Polygon class returns number instead of string just to align with
  AbstractEthLikeCoin
  Ticket: WIN-1012

# 2.0.0 (2023-11-17)

### Bug Fixes

- **sdk-coin-polygon:** fix issues ([85e9396](https://github.com/BitGo/BitGoJS/commit/85e93967abd056f5054198f385a1b109246a281f))
- **statics:** make corrections for arbeth and opeth ([5dfc405](https://github.com/BitGo/BitGoJS/commit/5dfc405a36fc97b2c902fec44562b169d8013a18))

### Code Refactoring

- **abstract-eth:** add common method to abstract-eth ([df6eea5](https://github.com/BitGo/BitGoJS/commit/df6eea5d299c415b30263d1713335c14e5abef4a))

### Features

- **sdk-coin-opeth:** add opeth sdk skeleton ([42fbefa](https://github.com/BitGo/BitGoJS/commit/42fbefa54f22fa5bdaef4150ef3a643843ec8684))

### BREAKING CHANGES

- **abstract-eth:** Type of nextContractSequenceId field in TransactionPrebuild
  interface is changed from string to number in AbstractEthLikeCoin and AbstractEthLikeNewCoins classes.
  getCustomChainName method is removed from Polygon class because a common
  method getCustomChainCommon has been added to AbstractEthLikeNewCoins
  class for all EthLike coins. replayProtectionOptions is not optional in buildTransaction method in AbstractEthLikeNewCoins
  and needs to be passed to derive the Eth common object from the chainId.
  signFinalPolygon method name from Polygon class is updated to signFinalEthLike so that
  it can be used for other EthLike coins. getBaseFactor method in Eth
  and Polygon class returns number instead of string just to align with
  AbstractEthLikeCoin
  Ticket: WIN-1012

# 1.5.0 (2023-11-13)

### Features

- **sdk-coin-opeth:** add opeth sdk skeleton ([42fbefa](https://github.com/BitGo/BitGoJS/commit/42fbefa54f22fa5bdaef4150ef3a643843ec8684))

# 1.4.0 (2023-11-13)

### Features

- **sdk-coin-opeth:** add opeth sdk skeleton ([42fbefa](https://github.com/BitGo/BitGoJS/commit/42fbefa54f22fa5bdaef4150ef3a643843ec8684))

# 1.3.0 (2023-11-13)

### Features

- **sdk-coin-opeth:** add opeth sdk skeleton ([42fbefa](https://github.com/BitGo/BitGoJS/commit/42fbefa54f22fa5bdaef4150ef3a643843ec8684))

# 1.2.0 (2023-10-20)

### Features

- **sdk-coin-opeth:** add opeth sdk skeleton ([42fbefa](https://github.com/BitGo/BitGoJS/commit/42fbefa54f22fa5bdaef4150ef3a643843ec8684))

# 1.1.0 (2023-10-18)

### Features

- **sdk-coin-opeth:** add opeth sdk skeleton ([42fbefa](https://github.com/BitGo/BitGoJS/commit/42fbefa54f22fa5bdaef4150ef3a643843ec8684))
