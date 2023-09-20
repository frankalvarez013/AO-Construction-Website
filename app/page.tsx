import './globals.css'
import Image from 'next/image'
import displayImg from '../public/displayImg.png'
export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className=" md:h-comp1 h-screen overflow-hidden">
        <div className="relative w-full h-full overflow-hidden bg-cover bg-[50%] bg-no-repeat">
          <div className="aspect-w-16 aspect-h-9">
            <Image
              src={displayImg}
              alt=""
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-light-grey1 bg-fixed opacity-80">
            <div className="flex h-full items-center justify-center">
              <p className="text-white opacity-100">Can you see me?</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
