import { ArticleType } from "../types/TypeContent";
import { nanoid } from "nanoid";
import ethActu from "../assets/ethactu.webp";
import actuCoin from "../assets/hotcrypto.avif";

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
                <Heading size="md" className="text-center md:text-start">{item.title}</Heading>
              </CardHeader>
              <CardBody>
                <div className="flex flex-col items-center  md:flex-row lg:flex-col xl:flex-row gap-5">
                  <img
                    className="w-[200px] rounded  object-cover"
                    src={item.img}
                    alt={item.title}
                  />
                  <Text className="leading-8 h-full overflow-y-auto">{item.text}</Text>
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>

  );
}
export default MainArticle;
