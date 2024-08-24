import metamask from '../assets/metamaskk.png'
import { buttonContentType } from '../types/TypeData';

const buttonContent:buttonContentType = [
  {text: "Connect ", image: metamask},
];
type Props = {
};
function TopNav({  }: Props) {
  return (
    <div className="w-full py-5 px-3 flex-row flex bg-gradient-to-tr from-zinc-900 to-zinc-950 z-20 sticky top-0">
     
      <div className="flex flex-row gap-3  justify-end  w-full">
        

        {buttonContent.map((item) => (
          <button 
          className='flex flex-row gap-2 bg-lime-700 hover:bg-lime-600 items-center justify-center px-3 py-2 rounded-lg font-semibold text-gray-50'
          key={item.text}>
            <span className='hidden lg:flex'>{item.text}</span>
            <img  
            className='w-6'
            src={item.image} alt="Connect your wallet with metamask" />
          </button>
        ))}
       
      </div>
    </div>
  );
}
export default TopNav;
