import BlockEth from "../components/BlockEth";
import ChartEth from "../components/ChartEth";
import GasPrice from "../components/GasPrice";
import PriceEth from "../components/PriceEth";
import Supply from "../components/Supply";
type Props = {};

function Dash({}: Props) {

  return (
    <div className=" w-full h-auto min-h-screen  pl-[26%] lg:pl-[18%] xl:pl-[15%] bg-zinc-800 flex flex-col-reverse   gap-5  xl:flex-row">
      <div className="flex flex-col  mt-10  lg:flex-row xl:flex-col ">
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
