import { createPublicClient, http } from 'viem';
// import { mainnet } from 'viem/chains';
import { sepolia } from 'viem/chains';


 export const client = createPublicClient({
  chain: sepolia,
  transport: http(),
});

export default client;