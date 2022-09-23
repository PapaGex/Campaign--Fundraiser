const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
    'tail daring slogan lonely water latin kidney language piece state reduce letter',
    'https://rinkeby.infura.io/v3/15c1d32581894b88a92d8d9e519e476c'  // deployed to this address 0x8c73551114fFe73D9C00E2136FFB74105dB5119E
    );
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deployed to', result.options.address);    
};
deploy();