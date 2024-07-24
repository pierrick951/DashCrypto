import Button from "../components/Button";
import ButtonGosth from "../components/ButtonGosth";
import Menu from "../components/Menu";
import Nav from "../components/Nav";


const signUp: string = "Sign Up";
const logIn: string = "Log In";

type Props = {};
function MainLayout({}: Props) {
  return (
    <div className="flex flex-row">
      <div>
        <Nav />
      </div>
      <div className="w-full">
        <div className="bg-slate-900 w-full p-5 flex-row flex justify-end ">
       
          <div className="flex flex-row gap-3">
            <div  className="hidden md:flex flex-row gap-3">
                <Button content={signUp} />
                <ButtonGosth content={logIn} />
            </div>
            <div className="md:hidden ">
                <Menu option1={signUp} option2={logIn}/>
            </div>
          </div>
        </div>
        <div>content + header</div>
      </div>
    </div>
  );
}
export default MainLayout;
