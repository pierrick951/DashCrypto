import { Link } from "react-router-dom";

const error404: string[] = ["404", "Page not found", "Go to home"];

function Error() {
  return (
    <div className=" w-full h-screen bg-gradient-to-tl from-zinc-800 to-blue-700 flex flex-col items-center justify-center">
      <h1 className="text-8xl text-white font-bold">{error404[0]}</h1>
      <h2 className="text-4xl text-blue-400 font-bold">{error404[1]}</h2>
      <Link
        className=" text-xl font-bold text-white hover:text-red-500 "
        to="/home"
      >
        {error404[2]}
      </Link>
    </div>
  );
}
export default Error;
