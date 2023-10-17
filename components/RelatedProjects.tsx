import Card from './ProjectPrevCard'
import { Component } from 'react'
import SimpleSlider from './SimpleSlider'
import { useEffect } from 'react'
const RelatedProjects = () => {
  return (
    <section id="projects" className="pt-12 -mt-12 py-20 snap-start h-auto">
      <div className="basis-1/2 flex flex-col items-center gap-12 my-8">
        <div
          className="font-bold text-4xl sm:text-6.5xl lil:text-5xl pb-7 border-b-8 border-black"
          id="related-title"
        >
          Related Projects
        </div>

        <div className=" h-auto w-4/5" id="related-slider">
          <SimpleSlider></SimpleSlider>
        </div>
        <a
          href="/projects/"
          className="border-black border-4 px-16 py-3 hover:text-orangeJ hover:border-orangeJ"
          id="related-button"
        >
          VIEW ALL
        </a>
      </div>
    </section>
  )
}

export default RelatedProjects
