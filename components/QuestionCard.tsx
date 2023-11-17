'use client'
import { useState } from 'react'
const Question = ({ Question, Answer }) => {
  const [isHidden, setIsHidden] = useState(true)

  const toggleVisibility = () => {
    setIsHidden(!isHidden)
    console.log(isHidden)
  }
  return (
    <div className="flex flex-col gap-6">
      <div
        className="flex justify-between hover:cursor-pointer hover:text-orangeJ"
        onClick={toggleVisibility}
      >
        <h3 className="font-light text-lg">{Question}</h3>
        {isHidden ? (
          <button className="">+</button>
        ) : (
          <button className="">-</button>
        )}
      </div>
      <div>
        {isHidden ? (
          <p className="pb-20 font-light text-light-grey1 hidden">{Answer}</p>
        ) : (
          <p className="pb-20 font-thin text-light-grey1">{Answer}</p>
        )}
      </div>
    </div>
  )
}
export default Question
