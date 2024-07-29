import { ArticleType } from "../types/TypeContent";
import { nanoid } from "nanoid";
import ethActu from "../assets/ethactu.webp";
import actuCoin from "../assets/cryptocu.jpeg";
import charBtc from "../assets/charbtc.jpg";
import doge from "../assets/dogcoin.png";

import { Card, CardBody, Text, CardHeader, Heading } from "@chakra-ui/react";

const titleNews: string = "In the Spotlight";

const contentMainArticle: ArticleType = [
  {
    id: nanoid(),
    title: "The Blockchain Revolution",
    text: "Ethereum (ETH) revolutionizes blockchain technology by enabling smart contracts and decentralized applications (dApps) beyond just cryptocurrency. ",
    img: ethActu,
  },
  {
    id: nanoid(),
    title: "Hot Cryptos to Watch",
    text: "In the fast-evolving world of cryptocurrencies, staying ahead of trends is crucial for investors and enthusiasts alike. ",
    img: actuCoin,
  },
  {
    id: nanoid(),
    title: "Dogecoin's Latest Surge Explained",
    text: "Dogecoin's recent rally is driven by social media and celebrity hype. Discover why it's spiking and what it means for investors. ",
    img: doge,
  },
  {
    id: nanoid(),
    title: "Bitcoin: Current Market Snapshot",
    text: "Get the latest update on Bitcoin’s performance and market trends. See what’s shaping its current status and future outlook. ",
    img: charBtc,
  },
];

type Props = {};
function MainArticle({}: Props) {
  return (
    <div className=" md:p-3 w-full text-center md:text-start  ">
      <h1 className="font-bold text-white text-lg md:text-xl capitalize">
        {titleNews}
      </h1>

      {contentMainArticle.map((item) => (
        <div className="py-2 ">
          <Card key={item.id}>
            <CardHeader>
              <Heading size="md" className="text-center md:text-start">
                {item.title}
              </Heading>
            </CardHeader>
            <CardBody>
              <div className="flex flex-col items-center  md:flex-row lg:flex-col xl:flex-row gap-5">
                <img
                  className="w-[200px] rounded  object-cover"
                  src={item.img}
                  alt={item.title}
                />
                <Text className="leading-8 h-full overflow-y-auto">
                  {item.text}
                </Text>
              </div>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  );
}
export default MainArticle;
