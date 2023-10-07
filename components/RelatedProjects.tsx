import Card from './Card'
import { Component } from 'react'
import SimpleSlider from './SimpleSlider'
import Slider from 'react-slick'
const relatedProjects = () => {
  return (
    <section id="projects" className="pt-12 -mt-12">
      <div className="basis-1/2 flex flex-col items-center gap-12 my-8">
        <div className="font-bold text-4xl sm:text-6.5xl lil:text-5xl pb-7 border-b-8 border-black">
          Related Projects
        </div>

        <div className=" h-auto w-4/5">
          <SimpleSlider></SimpleSlider>
        </div>
        <button className="border-black border-4 px-16 py-3 hover:text-orangeJ hover:border-orangeJ">
          VIEW ALL
        </button>
      </div>
    </section>
  )
}

export default relatedProjects
