require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/T8rNm_4FQcILp52a-mdmnRDMTy8PK-7C',
      accounts: ['2144fb89fb2a60686615adc70f2a29091dc7db6d7b201389c09bd56e53d6b24b'],
    },
  },
};