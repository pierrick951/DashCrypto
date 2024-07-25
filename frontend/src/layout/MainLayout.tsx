import { useState } from "react";
import { MainContentType } from "../types/TypeContent";

import Button from "../components/Button";
import ButtonGosth from "../components/ButtonGosth";
import Menu from "../components/Menu";
import Nav from "../components/Nav";
import Home from "./Home";
import Dash from "./Dash";
import News from "./News";
import Wallet from "./Wallet";
import Message from "./Message";

const signUp: string = "Sign Up";
const logIn: string = "Log In";

const mainContent: MainContentType = [
  { comp: <Home />,text:'Home'},
  { comp: <Dash />,text:'Dash'},
  { comp: <News />,text:'News'},
  { comp: <Wallet />,text:'Wallet'},
  { comp: <Message />,text:'Message'},
];
function MainLayout(): JSX.Element {

  const [contentIndex, setContentIndex] = useState<number>(0);
  const handleClick: (index: number) => void = (index) => {
    setContentIndex(index);
  };
  const getCurrentComponent: () => JSX.Element = () => {
    return mainContent[contentIndex].comp;
  };
  const getCurrentText: () => string = () => {
    return mainContent[contentIndex].text;
  };

  

  return (
    <div className="flex flex-row  h-screen">
      <div className=" z-30 fixed
      ">
        <Nav handClick={handleClick} />
      </div>
    <div className="w-screen ">
        <div className="w-full p-5 flex-row flex bg-gray-800 z-20 fixed">
          <div className="flex flex-row gap-3  justify-between  w-full ">
          
            <div className="text-gray-100 text-xl md:text-2xl  pl-[20%] font-semibold">{getCurrentText()}</div>
           
            <div className="hidden md:flex flex-row gap-3">
              <Button content={signUp} />
              <ButtonGosth content={logIn} />
            </div>
            <div className="md:hidden ">
              <Menu option1={signUp} option2={logIn} />
            </div>
          </div>
        </div>
        <div className="h-full w-full ">{getCurrentComponent()}</div>
      </div>
    </div>
  );
}
export default MainLayout;
