const ReviewCard = () => {
  return (
    <div className="flex flex-col gap-10 p-8 flex-shrink-0 w-72 bg-white">
      <div className="flex justify-center ">
        <div>⭐⭐⭐⭐⭐</div>
      </div>
      <p className="font-light text-light-grey1">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
        dignissim tristique tellus sed faucibus nullam.”
      </p>
      <div className="text-base font-semibold">John Smith</div>
    </div>
  )
}

export default ReviewCard
