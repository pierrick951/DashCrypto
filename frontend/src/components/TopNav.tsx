import metamask from '../assets/Metamask.png'
import { buttonContentType } from '../types/TypeData';

const buttonContent:buttonContentType = [
  {text: "Metamask", image: metamask },
];
type Props = {
};
function TopNav({  }: Props) {
  return (
    <div className="w-full py-5 px-3 flex-row flex bg-gradient-to-tr from-zinc-900 to-zinc-950 z-20 sticky top-0">
     
      <div className="flex flex-row gap-3  justify-between  w-full">
       
        <button>connect wallet</button>
       
      </div>
    </div>
  );
}
export default TopNav;
