import axios from "axios";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);

type Props = {};
function ChartEth({}: Props) {
  const [dataChart, setDataChart] = useState<any>(null);

  const fetchChartData = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/ethereum/market_chart",
        {
          params: {
            vs_currency: "usd",
            days: "10",
          },
        }
      );

      const prices = response.data.prices;
      const dates = prices.map((price: [number, number]) =>
        new Date(price[0]).toLocaleDateString()
      );
      const values = prices.map((price: [number, number]) => price[1]);

      setDataChart({
        labels: dates,
        datasets: [
          {
            label: " ETH USD",
            data: values,
            fill: false,
            borderColor: "#4169E1",
            tension: 1,
          },
        ],
      });
    } catch (error) {
      console.error("Une erreur est survenue:", error);
    }
  };

  useEffect(() => {
    fetchChartData();
  }, []);
  const options = {
    scales: {
      x: {
        ticks: {
          maxTicksLimit: 10,
        },
      },
    },
  };
  return (
    <div className=" hidden   md:h-[400px] md:w-[920px] lg:w-[800px] lg:block  ">
    {dataChart ? (
        <Line className="h-full w-full  bg-white rounded shadow-2xl shadow-zinc-800 " data={dataChart} options={{ ...options, maintainAspectRatio: false, responsive: true }} />
    ) : (
      <p>Loading...</p>
    )}
  </div>
  );
}

export default ChartEth;
