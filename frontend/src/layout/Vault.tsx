import { nanoid } from "nanoid";
import Stake from "../components/Stake";
import Unstake from "../components/Unstake";
import { layoutCompType } from "../types/TypeData";
import { useState } from "react";
import { MainContentType } from "../types/TypeContent";

function Vault() {
  const layoutComp: layoutCompType = [
    {
      id: nanoid(),
      string: "Stake",
    },
    { id: nanoid(), string: "Unstake" },
  ];

  const CurrentComp: MainContentType = [
    { comp: <Stake /> },
    { comp: <Unstake /> },
  ];
  const [contentIndex, setContentIndex] = useState<number>(0);

  const handleClick: (index: number) => void = (index) => {
    setContentIndex(index);
  };
  const getCurrentComponent: () => JSX.Element = () => {
    return CurrentComp[contentIndex].comp;
  };

  return (
    <div className="bg-gradient-to-tl from-zinc-900 to-zinc-800 min-h-screen h-auto flex justify-center p-5">
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
        <div>{getCurrentComponent()}</div>
      </div>
    </div>
  );
}
export default Vault;
