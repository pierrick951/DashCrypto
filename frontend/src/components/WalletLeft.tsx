import { nanoid } from "nanoid";
import { buttonContentType } from "../types/TypeTabsNav";
import metamask from "../assets/Metamask.png";


import {
  Card,
  CardHeader,
  Heading,
  Button,
  CardFooter,
  Text,
} from "@chakra-ui/react";

type Props = {
  event: () => void;
};

const buttonContent: buttonContentType = [
  { id: nanoid(), text: "Metamask", image: metamask },

];

function WalletLeft({ event }: Props) {
  const contentWallet: string[] = ["Connect your wallet", "Log out"];
  return (
    <Card align="center" className="max-w-xl h-auto text-">
      <CardHeader>
        <Heading size="lg" h={50} className="text-slate-800">
          {contentWallet[0]}
        </Heading>
      </CardHeader>

      <CardFooter className=" flex flex-col gap-2 lg:flex-row">
        {buttonContent.map((item) => (
          <Button
            onClick={event}
            className=" flex flex-row gap-2 py-2 px-5"
            key={item.id}
            colorScheme="blue"
          >
            <img className="h-full" src={item.image} alt={item.text} />
            <Text>{item.text}</Text>
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
}
export default WalletLeft;
