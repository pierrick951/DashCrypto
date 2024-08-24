import { nanoid } from "nanoid";
import { buttonContentType } from "../types/TypeTabsNav";
import metamask from "../assets/Metamask.png";

import { Card, CardHeader, Button, CardFooter, Text } from "@chakra-ui/react";




function WalletLeft() {
  const contentWallet: string[] = ["Connect your wallet", "Log out"];
  return (
    <Card
      align="center"
      className="max-w-xl h-44 lg:h-auto
     "
    >
      <CardHeader>
        <h2 className="text-slate-800 text-2xl xl:text-3xl font-semibold  text-center">
          {contentWallet[0]}
        </h2>
      </CardHeader>
      

      <CardFooter className=" flex flex-col gap-2 lg:flex-row">
      
      </CardFooter>
    </Card>
  );
}
export default WalletLeft;
