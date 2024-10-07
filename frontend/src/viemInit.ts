import { createPublicClient, http } from 'viem';
import { sepolia } from 'viem/chains';


(async () => {})

 export const client = createPublicClient({
  chain: sepolia,
  transport: http(),
});


export default client;