type Props = {
  title1: string;
  title2: JSX.Element;
  data?: any;
};

const contentCard: string = "loading";

function bodyCard({ title1, title2, data }: Props) {
  return (
    <div className="bg-gradient-to-tr from-zinc-800 to-zinc-900 rounded p-4 w-full lg:w-40 mb-5  lg:mb-0  shadow-zinc-950 shadow-2xl ">
      <h2 className="flex flex-row font-semibold  text-gray-100 items-center  justify-between gap-2 py-3">
        <span >{title1}</span>
        <span>{title2}</span>
      </h2>

      {data !== null ? (
        <p className="text-xl font-semibold text-lime-500"> {data}</p>
      ) : (
        <p className="text-xl font-semibold text-lime-500">{contentCard}</p>
      )}
    </div>
  );
}
export default bodyCard;
