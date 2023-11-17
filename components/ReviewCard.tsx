const ReviewCard = ({ Name, Description, Stars }) => {
  return (
    <div className="flex flex-col gap-10 p-8 flex-shrink-0 w-72 bg-white">
      <div className="flex justify-center ">
        <div>{Stars}</div>
      </div>
      <p className="font-light text-light-grey1">{Description}</p>
      <div className="text-base font-semibold">{Name}</div>
    </div>
  )
}

export default ReviewCard
