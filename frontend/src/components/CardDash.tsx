type Props = {
    title1:string,
    title2:JSX.Element,
    data:string | null
}
function bodyCard({title1,title2,data}: Props) {
  return (
    <div className="bg-white rounded-xl p-4 max-w-sm mb-5 shadow-2xl mx-5">
  <h2 className="flex flex-row font-semibold  text-slate-800 items-center  justify-between gap-2 py-2">
    <span>{title1}</span>
    <span>{title2}</span>
  </h2>
  <p className="text-xl font-semibold text-lime-500">
  {data !== null ? `${data}` : "Loading..."}
  </p>
</div>
  )
}
export default bodyCard