'use client'
import { useState } from 'react'
const Question = () => {
  const [isHidden, setIsHidden] = useState(true)

  const toggleVisibility = () => {
    setIsHidden(!isHidden)
    console.log(isHidden)
  }
  return (
    <div className="flex flex-col gap-6">
      <div
        className="flex justify-between hover:cursor-pointer"
        onClick={toggleVisibility}
      >
        <h3 className="font-semibold text-xl">Question?</h3>
        {isHidden ? (
          <button className="">+</button>
        ) : (
          <button className="">-</button>
        )}
      </div>
      <div>
        {isHidden ? (
          <p className="pb-20 font-normal text-light-grey1 hidden">Answer</p>
        ) : (
          <p className="pb-20 font-normal text-light-grey1">Answer</p>
        )}
      </div>
    </div>
  )
}
export default Question
