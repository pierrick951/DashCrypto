import  { useEffect, useState } from 'react';
import CardDash from "../components/CardDash";
import { SiCodeblocks } from "../index.icon";

import client from '../viemInit'


type Props = {}

function BlockEth({}: Props) {
  const [blockNumber, setBlockNumber] = useState<string| null>(null);

  const titleBlock: string = "Block";
  const icon: JSX.Element = <SiCodeblocks />;

  useEffect(() => {
    async function fetchBlockNumber() {
      try {
        const blockNum: bigint = await client.getBlockNumber();
       const blockToString : string=  blockNum.toString()
        setBlockNumber(blockToString); 
      } catch (error) {
        console.error('Erreur lors de la récupération du numéro de bloc:', error);

      }
    }

    fetchBlockNumber(); 
  }, []); 

  return (
   <CardDash data={blockNumber} title1={titleBlock} title2={icon}/>
  );
}

export default BlockEth;
