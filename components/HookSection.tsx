import constructionBuilding from '../public/constructionBuilding.svg'
import documentationImg from '../public/documentationImg.svg'
import Image from 'next/image'
const HookSection = () => {
  return (
    <section className="h-auto flex justify-center py-16">
      <div className="flex flex-col justify-center items-center gap-20 w-3/4">
        <div className="flex">
          <div className="relative w-44 h-52">
            <Image
              src={constructionBuilding}
              alt=""
              className="p-2 bg-white drop-shadow-2xl absolute -top-10"
            ></Image>
          </div>
          <div className="relative w-48 h-52">
            <Image
              src={documentationImg}
              alt=""
              className="p-1 bg-white drop-shadow-2xl absolute right-10 top-10"
            ></Image>
          </div>
        </div>
        <div className="flex flex-col items-start gap-8">
          <div className="font-bold text-4xl sm:text-6.5xl lil:text-5xl">
            With our knowledge <br />
            we guarentee success
          </div>
          <div className="font-semibold text-base">
            Fusce id hendrerit lectus. Morbi vitae tortor sed turpis feugiat
            congue
          </div>
          <div className="font-normal text-sm">
            Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus rutrum
            leo consectetur accumsan. Vivamus viverra ante turpis, dignissim
            condimentum elit egestas sit amet. Phasellus faucibus pellentesque
          </div>
          <button className="px-10 py-2 bg-orangeJ text-white text-sm">
            Learn More ->
          </button>
        </div>
      </div>
    </section>
  )
}

export default HookSection
