
const content :string[] = [
  "Stack",
] 

function Stake() {
  return (
    <div className="py-10">
       <h1 className="text-xl text-gray-100 font-bold">{content[0]}</h1>
       <div className="py-2 flex flex-col">
              <label htmlFor="token-amount"></label>
              <input
              required
                className="  w-full p-2 text-white font-semibold border-none bg-transparent text-xl focus:outline-none rounded"
                type="number"
                id="token-amount"
                name="token-amount"
                min="1"
                placeholder="0.0"
              />
            
            </div>
      </div>
  )
}
export default Stake