import BlockEth from "../components/BlockEth";
import ChartEth from "../components/ChartEth";
import GasPrice from "../components/GasPrice";
import PriceEth from "../components/PriceEth";
import Supply from "../components/Supply";
type Props = {};

function Dash({}: Props) {

  return (
    <div className=" w-full h-auto min-h-screen  bg-zinc-800 flex flex-col-reverse  p-10  gap-5  xl:flex-row">
      <div className="flex flex-col  lg:flex-row xl:flex-col ">
       <Supply/>
       <PriceEth/>
       <BlockEth/>
       <GasPrice/>
      </div>
  
        <ChartEth/>
     
    </div>
  );
}

export default Dash;
