import BlockEth from "../components/BlockEth";
import ChartEth from "../components/ChartEth";
import GasPrice from "../components/GasPrice";
import PriceEth from "../components/PriceEth";
import Supply from "../components/Supply";
import { useAuth } from "../context/Contextlog";

type Props = {};
const contentDash: string = "Connect to access the dashboard 📊 ";
function Dash({}: Props) {
  const { user,login } = useAuth();

  return (
    <div className="w-full h-auto min-h-screen bg-zinc-800 flex flex-col p-5 gap-5">
      {user ? (
        <>
          <div className="flex flex-col lg:flex-row px-5 w-full gap-2">
            <Supply />
            <PriceEth />
            <BlockEth />
            <GasPrice />
          </div>
          <ChartEth />
        </>
      ) : (
        <div className="w-full lg:h-screen flex  justify-center items-center ">
          <button
          onClick={login}
          className="text-xl lg:text-2xl rounded p-3
           bg-gray-100 text-slate-700 font-bold">{contentDash}</button>
        </div>
      )}
    </div>
  );
}

export default Dash;
