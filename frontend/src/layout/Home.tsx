


const content:string[] = ["Yu","Zu", "Conect your wallet  and Add freshness to your transactions."," YuZu all rigths reserved", "Track Eth ", "Buy Token"]
function Home() {
  return (
    <div className="w-full min-h-screen  h-auto flex flex-col  overflow-auto overflow-x-hidden bg-gradient-to-tl from-zinc-950 to-zinc-800">
      <style>
        {`.background-glow {
  width: 80%;
  height: 50%;
background: radial-gradient(circle at center, rgba(163, 230, 53, 0.2) 0%, rgba(13, 17, 23, 0) 60%);

  filter: blur(100px);
}`}
      </style>
      <header className="text-center lg:h-[400px]   flex flex-col lg:items-center lg:justify-center overflow-hidden p-3">
      <div className=" hidden background-glow lg:block   absolute  "></div>
     
        <h1 className="font-bold py-4 lg">
          <span className=" text-5xl lg:text-8xl text-white">{content[0]}</span>
          <span className="text-5xl   lg:text-8xl text-lime-500">{content[1]}</span>
        </h1>
        <p className="text-gray-100 font-medium ">{content[2]}</p>
        <a href="/dash"className="my-4  max-w-sm bg-lime-700 hover:bg-lime-600 items-center justify-center px-3 py-2 rounded-lg font-semibold text-gray-50">{content[5]}</a>
 
      </header>
      
    </div>
    
  );
} 

export default Home;
