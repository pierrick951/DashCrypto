import BlockEth from "../components/BlockEth";
import ChartEth from "../components/ChartEth";
import GasPrice from "../components/GasPrice";
import PriceEth from "../components/PriceEth";
import Supply from "../components/Supply";
type Props = {};

function Dash({}: Props) {

  return (
    <div className=" w-full  h-auto min-h-screen bg-zinc-800 flex flex-col  p-5 gap-5  ">
        <ChartEth/>
      <div className="flex flex-col  lg:flex-row px-5 w-full  gap-2 ">
       <Supply/>
       <PriceEth/>
       <BlockEth/>
       <GasPrice/>
      </div>
  
     
    </div>
  );
}

export default Dash;
