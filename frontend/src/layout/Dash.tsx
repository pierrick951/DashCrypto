import BlockEth from "../components/BlockEth";
import ChartEth from "../components/ChartEth";
import GasPrice from "../components/GasPrice";
import PriceEth from "../components/PriceEth";
import Supply from "../components/Supply";
type Props = {};

function Dash({}: Props) {

  return (
    <div className="w-full h-auto lg:h-screen bg-gradient-to-tl from-blue-800 to-blue-700 pl-[26%] lg:pl-[20%] xl:pl-[15%] flex flex-col lg:flex-row mt-16 gap-5 ">
      <div className="mt-16 flex flex-col w-full ">
       <Supply/>
       <PriceEth/>
       <BlockEth/>
       <GasPrice/>
      </div>
      <div>
        <ChartEth/>
      </div>
    </div>
  );
}

export default Dash;
