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
    text: "Ethereum (ETH) revolutionizes blockchain technology by enabling smart contracts and decentralized applications (dApps) beyond just cryptocurrency. Launched in 2015, it allows developers to create self-executing contracts, automating and securing transactions without intermediaries. This has led to the creation of numerous new tokens and applications. Ethereum’s ongoing upgrades, like Ethereum 2.0, aim to enhance scalability and efficiency, reinforcing its role as a pioneering force in the blockchain space.",
    img: ethActu,
  },
  {
    id: nanoid(),
    title: "Hot Cryptos to Watch",
    text: "In the fast-evolving world of cryptocurrencies, staying ahead of trends is crucial for investors and enthusiasts alike. This article highlights the most promising and trending cryptocurrencies poised for significant growth. We delve into the factors driving their popularity, from innovative technology and strong development teams to increasing adoption and market momentum. Whether you’re looking to diversify your portfolio or simply stay informed, these hot cryptos are worth keeping an eye on. Discover which digital assets are making waves and why they could be the next big thing in the crypto space.",
    img: actuCoin,
  },
];

type Props = {};
function MainArticle({}: Props) {
  return (
    <div className=" p-3 w-full  ">
      <h1 className="font-bold text-white text-lg md:text-xl capitalize">
        {titleNews}
      </h1>

      
        {contentMainArticle.map((item) => (
          <div className="py-2 ">
            <Card key={item.id}>
              <CardHeader>
                <Heading size="md">{item.title}</Heading>
              </CardHeader>
              <CardBody>
                <div className="flex flex-col  gap-5">
                  <img
                    className="w-full rounded h-[200px] object-cover"
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
