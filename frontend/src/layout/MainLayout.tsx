import { useState } from "react";
import { MainContentType } from "../types/TypeContent";
import { Toaster } from "sonner";

import Nav from "../components/Nav";
import Home from "./Home";
import Dash from "./Dash";
import Governance from "./Governance";
import Vault from "./Vault";
import TopNav from "../components/TopNav";

const mainContent: MainContentType = [
  { comp: <Home /> },
  { comp: <Dash /> },
  { comp: <Vault /> },
  { comp: <Governance /> },
];
function MainLayout(): JSX.Element {
  const [contentIndex, setContentIndex] = useState<number>(0);
  const handleClick: (index: number) => void = (index) => {
    setContentIndex(index);
  };
  const getCurrentComponent: () => JSX.Element = () => {
    return mainContent[contentIndex].comp;
  };

  return (
    <div className="grid grid-cols-[auto,1fr] h-screen">
      <div className="z-30  h-full ">
        <Nav handClick={handleClick} />
      </div>
      <div className=" overflow-x-hidden grid grid-rows-[auto,1fr] ">
        <TopNav />
        <div className="h-auto min-h-screen min-w-full ">
          {getCurrentComponent()}
        </div>
      </div>
      <Toaster position="bottom-right" richColors />
    </div>
  );
}
export default MainLayout;
