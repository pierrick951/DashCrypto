import btc from "../assets/btsimage.webp";
import eth from "../assets/ethImage.jpg";
import alt from "../assets/altcoin.jpg";
import chart from '../assets/chartPrice.webp'

import {
  Card,
  CardHeader,
  CardBody,
  Box,
  Heading,
  Text,
  StackDivider,
  Stack,
  Image,
} from "@chakra-ui/react";
import {ArticleType } from "../types/TypeContent";
import { nanoid } from "nanoid";
const titleLatest: string = "Latest";
const contentArticle: ArticleType = [
  {
    id: nanoid(),
    title: "Bitcoin Soars",
    text: "BTC hits a new record high",
    img: btc,
  },
  {
    id: nanoid(),
    title: "Ethereum Upgrade",
    text: "Details on the ETH 2.0 upgrade",
    img: eth,
  },
  {
    id: nanoid(),
    title: "Altcoin Surge",
    text: "Top altcoins to watch now",
    img: alt,
  },
  {
    id: nanoid(),
    title: "Crypto Swings",
    text: "Understanding market volatility",
    img: chart,
  },
];

type Props = {};
function ArticleLatest({}: Props) {
  return (
    <Card h={530} position={{ base: 'static', lg: 'sticky' }} top={0} className=" lg:mt-10 w-full  lg:max-w-md ">
      <CardHeader className="text-center md:text-start">
        <Heading size="md">{titleLatest}</Heading>
      </CardHeader>

      <CardBody className="">
        <Stack divider={<StackDivider />} spacing="4">
          {contentArticle.map((item) => (
            <Box key={item.id}>
              <Heading
                size="xs"
                className="hover:text-blue-500"
                textTransform="uppercase"
              >
                {item.title}
              </Heading>
              <div className="flex flex-row items-center justify-center gap-2 py-2">
                <Image
                    src={item.img}
                    alt={item.title}
                    boxSize="35"
                    objectFit="cover"
                    rounded={10}
                  />
                <Text pt="2" fontSize="sm">
                  {item.text}
                </Text>
              </div>
            </Box>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
}
export default ArticleLatest;
