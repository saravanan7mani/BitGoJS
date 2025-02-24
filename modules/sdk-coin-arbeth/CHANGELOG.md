# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 13.0.0 (2024-01-09)

### Bug Fixes

- **abstract-eth:** fix chainid related changes ([c3a21c4](https://github.com/BitGo/BitGoJS/commit/c3a21c4cc470f2147c80e235607011bd4896f911))
- **abstract-eth:** fix issues related to chainid ([9114b1b](https://github.com/BitGo/BitGoJS/commit/9114b1b95ca0929d2d1ef5b33ba4f35e1184b5c7))
- **sdk-coin-polygon:** fix issues ([85e9396](https://github.com/BitGo/BitGoJS/commit/85e93967abd056f5054198f385a1b109246a281f))

### Code Refactoring

- **abstract-eth:** add common method to abstract-eth ([df6eea5](https://github.com/BitGo/BitGoJS/commit/df6eea5d299c415b30263d1713335c14e5abef4a))
- **abstract-eth:** delete mpc related classes ([52396ed](https://github.com/BitGo/BitGoJS/commit/52396ed5aae8b27f0cc6caee7011a7c6882b9dea))
- **abstract-eth:** move methods to abstract-eth ([af8bd10](https://github.com/BitGo/BitGoJS/commit/af8bd10e24c8d58fc227494de6a614098265580a))

### Features

- **abstract-eth:** add abstractethliketsscoin class ([eb99545](https://github.com/BitGo/BitGoJS/commit/eb995457d7787af073f0a9eafe6e4d420228f5f0))
- **abstract-eth:** add chain id as network identifier ([3ddec05](https://github.com/BitGo/BitGoJS/commit/3ddec05705cff891e46d21743d0ee864d68ab216))
- **sdk-coin-arbeth:** add arbeth sdk skeleton ([f86018e](https://github.com/BitGo/BitGoJS/commit/f86018eef56adf22b5539bfb8716175eb1fb152e))
- **sdk-coin-arbeth:** add arbeth token support ([b55961b](https://github.com/BitGo/BitGoJS/commit/b55961bf474fe09d017c21d3d0169020fff1820f))

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
- **abstract-eth:** AbstractEthLikeMPCCoin and EthLikeMPCToken classes are removed as we have instead added
  a new class AbstractEthLikeNewCoins which will be having both multisig
  and MPC related methods

TICKET: WIN-1021

# 12.0.0 (2024-01-03)

### Bug Fixes

- **sdk-coin-polygon:** fix issues ([85e9396](https://github.com/BitGo/BitGoJS/commit/85e93967abd056f5054198f385a1b109246a281f))

### Code Refactoring

- **abstract-eth:** add common method to abstract-eth ([df6eea5](https://github.com/BitGo/BitGoJS/commit/df6eea5d299c415b30263d1713335c14e5abef4a))
- **abstract-eth:** delete mpc related classes ([52396ed](https://github.com/BitGo/BitGoJS/commit/52396ed5aae8b27f0cc6caee7011a7c6882b9dea))
- **abstract-eth:** move methods to abstract-eth ([af8bd10](https://github.com/BitGo/BitGoJS/commit/af8bd10e24c8d58fc227494de6a614098265580a))

### Features

- **abstract-eth:** add abstractethliketsscoin class ([eb99545](https://github.com/BitGo/BitGoJS/commit/eb995457d7787af073f0a9eafe6e4d420228f5f0))
- **abstract-eth:** add chain id as network identifier ([3ddec05](https://github.com/BitGo/BitGoJS/commit/3ddec05705cff891e46d21743d0ee864d68ab216))
- **sdk-coin-arbeth:** add arbeth sdk skeleton ([f86018e](https://github.com/BitGo/BitGoJS/commit/f86018eef56adf22b5539bfb8716175eb1fb152e))
- **sdk-coin-arbeth:** add arbeth token support ([b55961b](https://github.com/BitGo/BitGoJS/commit/b55961bf474fe09d017c21d3d0169020fff1820f))

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
- **abstract-eth:** AbstractEthLikeMPCCoin and EthLikeMPCToken classes are removed as we have instead added
  a new class AbstractEthLikeNewCoins which will be having both multisig
  and MPC related methods

TICKET: WIN-1021

# 11.0.0 (2023-12-18)

### Bug Fixes

- **sdk-coin-polygon:** fix issues ([85e9396](https://github.com/BitGo/BitGoJS/commit/85e93967abd056f5054198f385a1b109246a281f))

### Code Refactoring

- **abstract-eth:** add common method to abstract-eth ([df6eea5](https://github.com/BitGo/BitGoJS/commit/df6eea5d299c415b30263d1713335c14e5abef4a))
- **abstract-eth:** delete mpc related classes ([52396ed](https://github.com/BitGo/BitGoJS/commit/52396ed5aae8b27f0cc6caee7011a7c6882b9dea))
- **abstract-eth:** move methods to abstract-eth ([af8bd10](https://github.com/BitGo/BitGoJS/commit/af8bd10e24c8d58fc227494de6a614098265580a))

### Features

- **abstract-eth:** add abstractethliketsscoin class ([eb99545](https://github.com/BitGo/BitGoJS/commit/eb995457d7787af073f0a9eafe6e4d420228f5f0))
- **sdk-coin-arbeth:** add arbeth sdk skeleton ([f86018e](https://github.com/BitGo/BitGoJS/commit/f86018eef56adf22b5539bfb8716175eb1fb152e))
- **sdk-coin-arbeth:** add arbeth token support ([b55961b](https://github.com/BitGo/BitGoJS/commit/b55961bf474fe09d017c21d3d0169020fff1820f))

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
- **abstract-eth:** AbstractEthLikeMPCCoin and EthLikeMPCToken classes are removed as we have instead added
  a new class AbstractEthLikeNewCoins which will be having both multisig
  and MPC related methods

TICKET: WIN-1021

# 10.0.0 (2023-12-12)

### Bug Fixes

- **sdk-coin-polygon:** fix issues ([85e9396](https://github.com/BitGo/BitGoJS/commit/85e93967abd056f5054198f385a1b109246a281f))

### Code Refactoring

- **abstract-eth:** add common method to abstract-eth ([df6eea5](https://github.com/BitGo/BitGoJS/commit/df6eea5d299c415b30263d1713335c14e5abef4a))
- **abstract-eth:** delete mpc related classes ([52396ed](https://github.com/BitGo/BitGoJS/commit/52396ed5aae8b27f0cc6caee7011a7c6882b9dea))
- **abstract-eth:** move methods to abstract-eth ([af8bd10](https://github.com/BitGo/BitGoJS/commit/af8bd10e24c8d58fc227494de6a614098265580a))

### Features

- **abstract-eth:** add abstractethliketsscoin class ([eb99545](https://github.com/BitGo/BitGoJS/commit/eb995457d7787af073f0a9eafe6e4d420228f5f0))
- **sdk-coin-arbeth:** add arbeth sdk skeleton ([f86018e](https://github.com/BitGo/BitGoJS/commit/f86018eef56adf22b5539bfb8716175eb1fb152e))
- **sdk-coin-arbeth:** add arbeth token support ([b55961b](https://github.com/BitGo/BitGoJS/commit/b55961bf474fe09d017c21d3d0169020fff1820f))

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
- **abstract-eth:** AbstractEthLikeMPCCoin and EthLikeMPCToken classes are removed as we have instead added
  a new class AbstractEthLikeNewCoins which will be having both multisig
  and MPC related methods

TICKET: WIN-1021

# 9.0.0 (2023-12-09)

### Bug Fixes

- **sdk-coin-polygon:** fix issues ([85e9396](https://github.com/BitGo/BitGoJS/commit/85e93967abd056f5054198f385a1b109246a281f))

### Code Refactoring

- **abstract-eth:** add common method to abstract-eth ([df6eea5](https://github.com/BitGo/BitGoJS/commit/df6eea5d299c415b30263d1713335c14e5abef4a))
- **abstract-eth:** delete mpc related classes ([52396ed](https://github.com/BitGo/BitGoJS/commit/52396ed5aae8b27f0cc6caee7011a7c6882b9dea))
- **abstract-eth:** move methods to abstract-eth ([af8bd10](https://github.com/BitGo/BitGoJS/commit/af8bd10e24c8d58fc227494de6a614098265580a))

### Features

- **abstract-eth:** add abstractethliketsscoin class ([eb99545](https://github.com/BitGo/BitGoJS/commit/eb995457d7787af073f0a9eafe6e4d420228f5f0))
- **sdk-coin-arbeth:** add arbeth sdk skeleton ([f86018e](https://github.com/BitGo/BitGoJS/commit/f86018eef56adf22b5539bfb8716175eb1fb152e))
- **sdk-coin-arbeth:** add arbeth token support ([b55961b](https://github.com/BitGo/BitGoJS/commit/b55961bf474fe09d017c21d3d0169020fff1820f))

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
- **abstract-eth:** AbstractEthLikeMPCCoin and EthLikeMPCToken classes are removed as we have instead added
  a new class AbstractEthLikeNewCoins which will be having both multisig
  and MPC related methods

TICKET: WIN-1021

# 8.0.0 (2023-12-05)

### Bug Fixes

- **sdk-coin-polygon:** fix issues ([85e9396](https://github.com/BitGo/BitGoJS/commit/85e93967abd056f5054198f385a1b109246a281f))

### Code Refactoring

- **abstract-eth:** add common method to abstract-eth ([df6eea5](https://github.com/BitGo/BitGoJS/commit/df6eea5d299c415b30263d1713335c14e5abef4a))
- **abstract-eth:** delete mpc related classes ([52396ed](https://github.com/BitGo/BitGoJS/commit/52396ed5aae8b27f0cc6caee7011a7c6882b9dea))
- **abstract-eth:** move methods to abstract-eth ([af8bd10](https://github.com/BitGo/BitGoJS/commit/af8bd10e24c8d58fc227494de6a614098265580a))

### Features

- **abstract-eth:** add abstractethliketsscoin class ([eb99545](https://github.com/BitGo/BitGoJS/commit/eb995457d7787af073f0a9eafe6e4d420228f5f0))
- **sdk-coin-arbeth:** add arbeth sdk skeleton ([f86018e](https://github.com/BitGo/BitGoJS/commit/f86018eef56adf22b5539bfb8716175eb1fb152e))
- **sdk-coin-arbeth:** add arbeth token support ([b55961b](https://github.com/BitGo/BitGoJS/commit/b55961bf474fe09d017c21d3d0169020fff1820f))

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
- **abstract-eth:** AbstractEthLikeMPCCoin and EthLikeMPCToken classes are removed as we have instead added
  a new class AbstractEthLikeNewCoins which will be having both multisig
  and MPC related methods

TICKET: WIN-1021

# 7.0.0 (2023-11-28)

### Bug Fixes

- **sdk-coin-polygon:** fix issues ([85e9396](https://github.com/BitGo/BitGoJS/commit/85e93967abd056f5054198f385a1b109246a281f))

### Code Refactoring

- **abstract-eth:** add common method to abstract-eth ([df6eea5](https://github.com/BitGo/BitGoJS/commit/df6eea5d299c415b30263d1713335c14e5abef4a))
- **abstract-eth:** delete mpc related classes ([52396ed](https://github.com/BitGo/BitGoJS/commit/52396ed5aae8b27f0cc6caee7011a7c6882b9dea))
- **abstract-eth:** move methods to abstract-eth ([af8bd10](https://github.com/BitGo/BitGoJS/commit/af8bd10e24c8d58fc227494de6a614098265580a))

### Features

- **abstract-eth:** add abstractethliketsscoin class ([eb99545](https://github.com/BitGo/BitGoJS/commit/eb995457d7787af073f0a9eafe6e4d420228f5f0))
- **sdk-coin-arbeth:** add arbeth sdk skeleton ([f86018e](https://github.com/BitGo/BitGoJS/commit/f86018eef56adf22b5539bfb8716175eb1fb152e))
- **sdk-coin-arbeth:** add arbeth token support ([b55961b](https://github.com/BitGo/BitGoJS/commit/b55961bf474fe09d017c21d3d0169020fff1820f))

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
- **abstract-eth:** AbstractEthLikeMPCCoin and EthLikeMPCToken classes are removed as we have instead added
  a new class AbstractEthLikeNewCoins which will be having both multisig
  and MPC related methods

TICKET: WIN-1021

# 6.0.0 (2023-11-24)

### Bug Fixes

- **sdk-coin-polygon:** fix issues ([85e9396](https://github.com/BitGo/BitGoJS/commit/85e93967abd056f5054198f385a1b109246a281f))

### Code Refactoring

- **abstract-eth:** add common method to abstract-eth ([df6eea5](https://github.com/BitGo/BitGoJS/commit/df6eea5d299c415b30263d1713335c14e5abef4a))
- **abstract-eth:** delete mpc related classes ([52396ed](https://github.com/BitGo/BitGoJS/commit/52396ed5aae8b27f0cc6caee7011a7c6882b9dea))
- **abstract-eth:** move methods to abstract-eth ([af8bd10](https://github.com/BitGo/BitGoJS/commit/af8bd10e24c8d58fc227494de6a614098265580a))

### Features

- **abstract-eth:** add abstractethliketsscoin class ([eb99545](https://github.com/BitGo/BitGoJS/commit/eb995457d7787af073f0a9eafe6e4d420228f5f0))
- **sdk-coin-arbeth:** add arbeth sdk skeleton ([f86018e](https://github.com/BitGo/BitGoJS/commit/f86018eef56adf22b5539bfb8716175eb1fb152e))
- **sdk-coin-arbeth:** add arbeth token support ([b55961b](https://github.com/BitGo/BitGoJS/commit/b55961bf474fe09d017c21d3d0169020fff1820f))

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
- **abstract-eth:** AbstractEthLikeMPCCoin and EthLikeMPCToken classes are removed as we have instead added
  a new class AbstractEthLikeNewCoins which will be having both multisig
  and MPC related methods

TICKET: WIN-1021

# 5.0.0 (2023-11-17)

### Bug Fixes

- **sdk-coin-polygon:** fix issues ([85e9396](https://github.com/BitGo/BitGoJS/commit/85e93967abd056f5054198f385a1b109246a281f))

### Code Refactoring

- **abstract-eth:** add common method to abstract-eth ([df6eea5](https://github.com/BitGo/BitGoJS/commit/df6eea5d299c415b30263d1713335c14e5abef4a))
- **abstract-eth:** delete mpc related classes ([52396ed](https://github.com/BitGo/BitGoJS/commit/52396ed5aae8b27f0cc6caee7011a7c6882b9dea))
- **abstract-eth:** move methods to abstract-eth ([af8bd10](https://github.com/BitGo/BitGoJS/commit/af8bd10e24c8d58fc227494de6a614098265580a))

### Features

- **abstract-eth:** add abstractethliketsscoin class ([eb99545](https://github.com/BitGo/BitGoJS/commit/eb995457d7787af073f0a9eafe6e4d420228f5f0))
- **sdk-coin-arbeth:** add arbeth sdk skeleton ([f86018e](https://github.com/BitGo/BitGoJS/commit/f86018eef56adf22b5539bfb8716175eb1fb152e))
- **sdk-coin-arbeth:** add arbeth token support ([b55961b](https://github.com/BitGo/BitGoJS/commit/b55961bf474fe09d017c21d3d0169020fff1820f))

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
- **abstract-eth:** AbstractEthLikeMPCCoin and EthLikeMPCToken classes are removed as we have instead added
  a new class AbstractEthLikeNewCoins which will be having both multisig
  and MPC related methods

TICKET: WIN-1021

# 4.0.0 (2023-11-13)

### Code Refactoring

- **abstract-eth:** delete mpc related classes ([52396ed](https://github.com/BitGo/BitGoJS/commit/52396ed5aae8b27f0cc6caee7011a7c6882b9dea))
- **abstract-eth:** move methods to abstract-eth ([af8bd10](https://github.com/BitGo/BitGoJS/commit/af8bd10e24c8d58fc227494de6a614098265580a))

### Features

- **abstract-eth:** add abstractethliketsscoin class ([eb99545](https://github.com/BitGo/BitGoJS/commit/eb995457d7787af073f0a9eafe6e4d420228f5f0))
- **sdk-coin-arbeth:** add arbeth sdk skeleton ([f86018e](https://github.com/BitGo/BitGoJS/commit/f86018eef56adf22b5539bfb8716175eb1fb152e))
- **sdk-coin-arbeth:** add arbeth token support ([b55961b](https://github.com/BitGo/BitGoJS/commit/b55961bf474fe09d017c21d3d0169020fff1820f))

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
- **abstract-eth:** AbstractEthLikeMPCCoin and EthLikeMPCToken classes are removed as we have instead added
  a new class AbstractEthLikeNewCoins which will be having both multisig
  and MPC related methods

TICKET: WIN-1021

# 3.0.0 (2023-11-13)

### Code Refactoring

- **abstract-eth:** delete mpc related classes ([52396ed](https://github.com/BitGo/BitGoJS/commit/52396ed5aae8b27f0cc6caee7011a7c6882b9dea))
- **abstract-eth:** move methods to abstract-eth ([af8bd10](https://github.com/BitGo/BitGoJS/commit/af8bd10e24c8d58fc227494de6a614098265580a))

### Features

- **abstract-eth:** add abstractethliketsscoin class ([eb99545](https://github.com/BitGo/BitGoJS/commit/eb995457d7787af073f0a9eafe6e4d420228f5f0))
- **sdk-coin-arbeth:** add arbeth sdk skeleton ([f86018e](https://github.com/BitGo/BitGoJS/commit/f86018eef56adf22b5539bfb8716175eb1fb152e))
- **sdk-coin-arbeth:** add arbeth token support ([b55961b](https://github.com/BitGo/BitGoJS/commit/b55961bf474fe09d017c21d3d0169020fff1820f))

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
- **abstract-eth:** AbstractEthLikeMPCCoin and EthLikeMPCToken classes are removed as we have instead added
  a new class AbstractEthLikeNewCoins which will be having both multisig
  and MPC related methods

TICKET: WIN-1021

# 2.0.0 (2023-11-13)

### Code Refactoring

- **abstract-eth:** delete mpc related classes ([52396ed](https://github.com/BitGo/BitGoJS/commit/52396ed5aae8b27f0cc6caee7011a7c6882b9dea))
- **abstract-eth:** move methods to abstract-eth ([af8bd10](https://github.com/BitGo/BitGoJS/commit/af8bd10e24c8d58fc227494de6a614098265580a))

### Features

- **abstract-eth:** add abstractethliketsscoin class ([eb99545](https://github.com/BitGo/BitGoJS/commit/eb995457d7787af073f0a9eafe6e4d420228f5f0))
- **sdk-coin-arbeth:** add arbeth sdk skeleton ([f86018e](https://github.com/BitGo/BitGoJS/commit/f86018eef56adf22b5539bfb8716175eb1fb152e))
- **sdk-coin-arbeth:** add arbeth token support ([b55961b](https://github.com/BitGo/BitGoJS/commit/b55961bf474fe09d017c21d3d0169020fff1820f))

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
- **abstract-eth:** AbstractEthLikeMPCCoin and EthLikeMPCToken classes are removed as we have instead added
  a new class AbstractEthLikeNewCoins which will be having both multisig
  and MPC related methods

TICKET: WIN-1021

# 1.2.0 (2023-10-20)

### Features

- **abstract-eth:** add abstractethliketsscoin class ([eb99545](https://github.com/BitGo/BitGoJS/commit/eb995457d7787af073f0a9eafe6e4d420228f5f0))
- **sdk-coin-arbeth:** add arbeth sdk skeleton ([f86018e](https://github.com/BitGo/BitGoJS/commit/f86018eef56adf22b5539bfb8716175eb1fb152e))
- **sdk-coin-arbeth:** add arbeth token support ([b55961b](https://github.com/BitGo/BitGoJS/commit/b55961bf474fe09d017c21d3d0169020fff1820f))

# 1.1.0 (2023-10-18)

### Features

- **abstract-eth:** add abstractethliketsscoin class ([eb99545](https://github.com/BitGo/BitGoJS/commit/eb995457d7787af073f0a9eafe6e4d420228f5f0))
- **sdk-coin-arbeth:** add arbeth sdk skeleton ([f86018e](https://github.com/BitGo/BitGoJS/commit/f86018eef56adf22b5539bfb8716175eb1fb152e))
- **sdk-coin-arbeth:** add arbeth token support ([b55961b](https://github.com/BitGo/BitGoJS/commit/b55961bf474fe09d017c21d3d0169020fff1820f))
