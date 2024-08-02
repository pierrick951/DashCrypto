import { nanoid } from "nanoid";
import { TransactionType } from "../types/TypeData";
import { Button } from "@chakra-ui/react";
import { FaBalanceScale } from "../index.icon";
import { buttonType } from "../types/TypeContent";
import { useContext } from "react";
import { BalanceContext } from "../context/ContextBal";
import { Card,CardBody,Text } from "@chakra-ui/react";

import PriceEth from "../components/PriceEth";
import CardDash from "../components/CardDash";

type Props = {
  event: () => void;
  account: string | null;
  transaction: TransactionType[];
};

function WalletRigth({ event, account, transaction }: Props) {
  const { balance } = useContext(BalanceContext);
  const title1: string = "Balance";
  const title2: JSX.Element = <FaBalanceScale />;
  const contentWallet: string[] = [
    "Log out",
    "Recent Transactions",
    "Sell",
    "Buy",
    "No transactions currently",
    "Account :",
    "To: ",
    "From: ",
    "Value: "
  ];
  const buttonAction: buttonType = [
    { id: nanoid(), text: contentWallet[3], color: "green" },
    { id: nanoid(), text: contentWallet[2], color: "red" },
  ];

  return (
    <div className="w-full h-auto flex flex-col lg:flex-row  gap-3 justify-center items-start">
      <div className="bg-gradient-to-br from-white to-gray-100 shadow-xl rounded w-full lg:w-[40%] min-h-[300px] flex flex-col justify-between h-auto p-4">
        <div className="flex flex-col gap-2">
          <h2 className=" flex flex-row gap-2 font-semibold text-slate-800">
            <span>{contentWallet[5]}</span>
            <span>{account}</span>
          </h2>
          <div>
            <h1 className="text-slate-800 text-xl font-semibold">
              {contentWallet[1]}
            </h1>
            <hr />
            <div className="w-full lg:h-[400px] overflow-y-scroll">
           
              {transaction.length === 0 ? (
                <div className="w-full h-full flex justify-center items-center">
                  <p className="md:text-xl text-zinc-800 animate-pulse">{contentWallet[4]}</p>
                </div>
              ) : (
                <ul className="flex flex-row px-3">
                  {" "}
                  {transaction.map((tx) => (
                  <Card w="100%" className="my-2 " key={tx.hash}>
                  <CardBody>
                    <Text className="text-zinc-800 font-semibold flex justify-around">
                    <p>{contentWallet[7]} <span className="font-semibold text-orange-500"> {tx.from} </span></p> | <p>{contentWallet[6]}<span className="font-semibold text-blue-500">{tx.to} </span></p> | <p>{contentWallet[8]}<span className="font-semibold text-lime-500">{tx.value}</span></p>
                    </Text>
                  </CardBody>
                </Card>
                
                     
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-3 justify-center pt-3 ">
          {buttonAction.map((item) => (
            <Button
              key={item.id}
              className=" flex flex-row w-full lg:max-w-xs gap-2 py-2 px-5"
              colorScheme={item.color}
            >
              {item.text}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex-col flex  w-full lg:max-w-md items-center">
        <PriceEth />
        <CardDash title1={title1} title2={title2} data={balance} />
        <Button
          onClick={event}
          className=" flex flex-row w-full  gap-2 py-2 px-5"
          colorScheme="blue"
        >
          {contentWallet[0]}
        </Button>
      </div>
    </div>
  );
}
export default WalletRigth;
