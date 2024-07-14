import axios from 'axios';

const HELIUS_MAINNET_URL = 'https://mainnet.helius-rpc.com/?api-key=2c07a274-f3a0-414f-9139-0a4cae54de83';

export const fetchHeliusData = async () => {
  try {
    const response = await axios.post(HELIUS_MAINNET_URL, {
      jsonrpc: "2.0",
      id: 1,
      method: "getClusterNodes"
    });
    console.log('Data fetched from Helius:', response.data); 
    return response.data;
  } catch (error) {
    console.error('Error fetching data from Helius:', error);
    throw error;
  }
};
