import { motion } from "framer-motion";
import ArticleLatest from "../components/ArticleLatest";
import MainArticle from "../components/MainArticle";

const MotionD = motion.div;

type Props = {};
const contentNews: string[] = ["CoinNews", "📰"];

function News({}: Props) {
  return (
    <div className=" w-full h-auto min-h-screen  bg-zinc-800 p-3">
      <MotionD
        className="w-full text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className=" text-2xl  md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold flex gap-2 justify-center">
          <span>{contentNews[0]}</span>
          <span>{contentNews[1]}</span>
        </h1>
      </MotionD>
      <div className="flex flex-col-reverse lg:flex-row w-full gap-3 py-10 h-auto  ">

          <MainArticle />
     
          <ArticleLatest />
        </div>
      </div>

  );
}
export default News;
