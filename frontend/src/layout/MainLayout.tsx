import { useState } from "react";
import { MainContentType } from "../types/TypeContent";

import Nav from "../components/Nav";
import Home from "./Home";
import Dash from "./Dash";
import News from "./News";
import Wallet from "./Wallet";
import Message from "./Message";
import TopNav from "../components/TopNav";


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
    <div className="grid grid-cols-[auto,1fr] h-screen">
    <div className="z-30  h-full ">
      <Nav handClick={handleClick} />
    </div>
    <div className=" overflow-x-hidden grid grid-rows-[auto,1fr] ">
      <TopNav text={getCurrentText()}/>
      <div className="h-auto min-h-screen min-w-full">{getCurrentComponent()}</div>
    </div>
  </div>
  
  );
}
export default MainLayout;
