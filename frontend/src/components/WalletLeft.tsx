import { nanoid } from "nanoid";
import { buttonContentType } from "../types/TypeTabsNav";
import metamask from "../assets/Metamask.png";

import { Card, CardHeader, Button, CardFooter, Text } from "@chakra-ui/react";

type Props = {
  event: () => void;
};

const buttonContent: buttonContentType = [
  { id: nanoid(), text: "Metamask", image: metamask },
];

function WalletLeft({ event }: Props) {
  const contentWallet: string[] = ["Connect your wallet", "Log out"];
  return (
    <Card
      align="center"
      className="max-w-xl h-44
     "
    >
      <CardHeader>
        <h2 className="text-slate-800 text-2xl xl:text-3xl font-semibold  text-center">
          {contentWallet[0]}
        </h2>
      </CardHeader>

      <CardFooter className=" flex flex-col gap-2 lg:flex-row">
        {buttonContent.map((item) => (
          <Button
            onClick={event}
            className=" flex flex-row gap-2 py-2 px-5 animate-pulse"
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
