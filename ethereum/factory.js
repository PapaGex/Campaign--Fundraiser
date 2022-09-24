import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x8c73551114fFe73D9C00E2136FFB74105dB5119E'
);

export default instance;