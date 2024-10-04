import { usePropsale } from "../context/ContextProposale";

function YouProposale() {
  const { proposal } = usePropsale();

  const content: string[] = ["Your proposal", ""];
  return (
    <div className="bg-gradient-to-tl from-zinc-950 to-zinc-900 p-3 h-auto rounded shadow-2xl w-96">
      <h1 className="text-lg text-gray-100 font-semibold  text-center lg:text-start">
        {content[0]}
      </h1>
      <p className="text-zinc-700 font-medium break-words">{proposal}</p>
    </div>
  );
}
export default YouProposale;
