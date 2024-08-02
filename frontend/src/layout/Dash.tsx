import BlockEth from "../components/BlockEth";
import ChartEth from "../components/ChartEth";
import GasPrice from "../components/GasPrice";
import PriceEth from "../components/PriceEth";
import Supply from "../components/Supply";
type Props = {};

function Dash({}: Props) {

  return (
    <div className=" w-full  h-screen bg-zinc-800 flex flex-col-reverse  justify-center p-5 gap-5  ">
      <div className="flex flex-col  lg:flex-row px-5 w-full  gap-2 ">
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
