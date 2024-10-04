import { nanoid } from "nanoid";
import Vote from "../components/Vote";
import Proposale from "../components/Proposale";
import { useState } from "react";
import { layoutCompType } from "../types/TypeData";
import { MainContentType } from "../types/TypeContent";
import YouProposale from "../components/YouProposale";


function Governance() {
  const layoutComp: layoutCompType = [
    {
      id: nanoid(),
      string: "Vote",
    },
    { id: nanoid(), string: "Proposal" },
  ];

  const CurrentComp: MainContentType = [
    { comp: <Vote /> },
    { comp: <Proposale /> },
  ];

  const [contentIndex, setContentIndex] = useState<number>(0);

  const handleClick: (index: number) => void = (index) => {
    setContentIndex(index);
  };
  const getCurrentComponent: () => JSX.Element = () => {
    return CurrentComp[contentIndex].comp;
  };
  return (
    <div className="bg-gradient-to-tl from-zinc-900 to-zinc-800 min-h-screen h-auto flex justify-center flex-col lg:flex-row  items-start gap-2  p-5">
    <div className="bg-gradient-to-tl from-zinc-950 to-zinc-900 p-3 h-auto w-96 rounded shadow-2xl">
      <div className="flex flex-col lg:flex-row gap-2">
        {layoutComp.map((item, index) => (
          <button
          onClick={() => handleClick(index)}
            id={item.id}
            className="p-2 text-white bg-lime-700 rounded w-full  font-semibold hover:bg-lime-500/80"
          >
            {item.string}
          </button>
        ))}
      </div>
      <hr className="my-5 border-zinc-800"/>
      <div>{getCurrentComponent()}</div>
    </div>
    <YouProposale/>
  </div>
  )
}
export default Governance