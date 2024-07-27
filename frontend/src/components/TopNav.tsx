import Button from "../components/Button";
import ButtonGosth from "../components/ButtonGosth";
import Menu from "../components/Menu";

const signUp: string = "Sign Up";
const logIn: string = "Log In";

type Props = {
   text:string
}
function TopNav({text}: Props) {
  return (
    <div className="w-full p-5 flex-row flex bg-gradient-to-bl from-blue-950 to-slate-900 z-20 ">
    <div className="flex flex-row gap-3  justify-between  w-full ">
    
      <div className="text-gray-100 text-xl md:text-2xl    font-semibold">{text}</div>
     
      <div className="hidden md:flex flex-row gap-3">
        <Button content={signUp} />
        <ButtonGosth content={logIn} />
      </div>
      <div className="md:hidden ">
        <Menu option1={signUp} option2={logIn} />
      </div>
    </div>
    </div>
  )
}
export default TopNav