import './globals.css'
import Image from 'next/image'
import displayImg from '../public/displayImg.png'
import building from '../public/building.svg'
import repair from '../public/repair.svg'
import design from '../public/design.svg'

export default function Home() {
  return (
    <main className="h-full w-full">
      <section className="">
        <div className="relative h-full w-full z-0 flex justify-center items-center p-20">
          <div className="">
            <Image
              src={displayImg}
              alt=""
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
          <div className="absolute inset-0 bg-light-grey1 opacity-80"></div>

          <div className="flex flex-col justify-around items-start relative h-full text-white gap-24 mb-16">
            <div className="overflow-hidden gap-8 flex flex-col items-start">
              <h1 className="font-bold border-orangeJ border-l-8 text-4xl sm:text-6.5xl pl-5 lil:text-5xl">
                Our Construction <br /> Services
              </h1>
              <p className="font-light text-lg lg:max-w-2xl ml-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
                egestas pellentesque libero dolor in diam consequat ut.{' '}
              </p>
              <button className="px-11 py-3 ml-1 bg-orangeJ text-sm font-semibold">
                Get a Free Quote
              </button>
            </div>
            <div className="flex items-start flex-col gap-6">
              <div className="font-extrabold text-xl text-orangeJ">
                What We Do
              </div>
              <div className="flex flex-col gap-10">
                <div className="flex justify-center items-center">
                  <div className="w-10">
                    <Image
                      src={building}
                      alt=""
                      layout=""
                      objectFit="contain"
                    ></Image>
                  </div>

                  <div className="px-9">
                    <h1 className="font-bold">Building Construction</h1>
                    <p className="font-light text-base">
                      Lorem ipsum dolor sit consectetur adipiscing elit. Nullam
                      lectus erat
                    </p>
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  <div className="w-10">
                    <Image
                      src={repair}
                      alt=""
                      layout=""
                      objectFit="contain"
                    ></Image>
                  </div>

                  <div className="px-9">
                    <h1 className="font-bold">Building Construction</h1>
                    <p className="font-light text-base">
                      Lorem ipsum dolor sit consectetur adipiscing elit. Nullam
                      lectus erat
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="w-8">
                    <Image
                      src={design}
                      alt=""
                      layout=""
                      objectFit="contain"
                    ></Image>
                  </div>

                  <div className="px-9">
                    <h1 className="font-bold">Building Construction</h1>
                    <p className="font-light text-base">
                      Lorem ipsum dolor sit consectetur adipiscing elit. Nullam
                      lectus erat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
