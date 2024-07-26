import ChartEth from "../components/ChartEth";
import Supply from "../components/Supply";
type Props = {};

function Dash({}: Props) {

  
  
  // const getDataEth = async () => {
//     try {
//       const priceResponse = await axios.get("https://api.etherscan.io/api", {
//         params: {
//           module: "stats",
//           action: "ethprice",
//           apikey: APIKEY,
//         },
//       });
//       const ethPrice = priceResponse.data.result;
//       console.log(`ETH Price: ${ethPrice.ethusd} USD`);

//       const blockResponse = await axios.get("https://api.etherscan.io/api", {
//         params: {
//           module: "proxy",
//           action: "eth_blockNumber",
//           apikey: APIKEY,
//         },
//       });
//       const blockNumber = blockResponse.data.result;
//       console.log(`Latest Block Number: ${parseInt(blockNumber, 16)}`);
         
//       const gasPriceResponse = await axios.get("https://api.etherscan.io/api", {
//         params: {
//           module: "proxy",
//           action: "eth_gasPrice",
//           apikey: APIKEY,
//         },
//       });
//       const gasPrice = gasPriceResponse.data.result;
//       console.log(`Gas Price: ${parseInt(gasPrice)} wei`);

  
   
//     } catch (error) {
//       console.log(error, "une erreur est survenue");
//     }
//   };

//   useEffect(() => {
//     getDataEth();
//   }, []);
// console.log(data)
  return (
    <div className="w-full h-screen bg-gradient-to-tl from-blue-800 to-blue-700 pl-[26%] xl:pl-[15%] flex flex-col lg:flex-row mt-16 gap-5 ">
      <div>
       <Supply/>
      </div>
      <div>
        <ChartEth/>
      </div>
    </div>
  );
}

export default Dash;
