const Question = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between">
        <h3 className="font-semibold text-xl">Question?</h3>
        <button className="">+</button>
      </div>
      <div>
        <p className="pb-20 font-normal text-light-grey1 hidden">Answer</p>
      </div>
    </div>
  )
}
export default Question
