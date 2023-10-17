import constructionBuilding from '../public/constructionBuilding.svg'
import documentationImg from '../public/documentationImg.svg'
import Image from 'next/image'
import {useEffect} from 'react'
const SecondSection = () => {
  return (
    <section className="h-auto flex justify-center lg:min-h-[830px] snap-start mb-20 -mt-20 pt-20" >
      <div className="flex flex-col justify-center items-center gap-20 w-3/4 lg:flex-row-reverse">
        <div className="flex">
          <div className="relative w-44 h-52 lg:w-[400px] lg:static lg:h-full">
            <Image
              src={constructionBuilding}
              alt=""
              className="p-2 bg-white drop-shadow-2xl md:absolute md:-top-10 lg:static lg:-top-0 lg:w-full"
              id="s2-Image1"
            ></Image>
          </div>
          <div className=" relative hidden sm:block  w-48 h-52 lg:hidden">
            <Image
              src={documentationImg}
              alt=""
              className="p-1 bg-white drop-shadow-2xl absolute right-10 top-10"
              id="s2-Image2"
            ></Image>
          </div>
        </div>
        <div className="flex flex-col items-start gap-8">
          <div className="font-bold text-4xl sm:text-6.5xl lil:text-5xl" id="s2-title">
            With our knowledge <br />
            we guarentee success
          </div>
          <div className="font-semibold text-base" id="s2-subtitle">
            Fusce id hendrerit lectus. Morbi vitae tortor sed turpis feugiat
            congue
          </div>
          <div className="font-normal text-sm" id="s2-subtext">
            Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus rutrum
            leo consectetur accumsan. Vivamus viverra ante turpis, dignissim
            condimentum elit egestas sit amet. Phasellus faucibus pellentesque
          </div>
          <button className="px-10 py-2 bg-orangeJ text-white text-sm hover:text-black" id="s2-button">
            Learn More ->
          </button>
        </div>
      </div>
    </section>
  )
}

export default SecondSection

