import './globals.css'
import Image from 'next/image'
import displayImg from '../public/displayImg.png'
export default function Home() {
  return (
    <main className="w-full h-full">
      <section className="h-full overflow-hidden">
        <div className="relative w-full h-full overflow-hidden bg-cover bg-[50%] bg-no-repeat">
          <div className="aspect-w-16 aspect-h-9">
            <Image
              src={displayImg}
              alt=""
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>

          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-light-grey1 bg-fixed opacity-80"></div>

          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-fixed opacity-100">
            <div className="flex flex-col h-full justify-evenly text-white w-fit items-center">
              <div className="">
                <h1 className="font-bold border-orangeJ border-l-8 text-6.5xl mx-w-content">
                  Our Construction <br /> Services
                </h1>
                <p className="font-light text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  quis egestas pellentesque libero dolor in diam consequat ut.{' '}
                </p>
                <button>Get a Free Quote</button>
              </div>
              <div>
                <div>Title</div>
                <div>
                  <div>
                    <h1>Image</h1>
                    <div>
                      <h1>Building Construction</h1>
                      <p>
                        Lorem ipsum dolor sit consectetur adipiscing elit.
                        Nullam lectus erat
                      </p>
                    </div>
                  </div>
                  <div>
                    <h1>Image</h1>
                    <div>
                      <h1>Building Construction</h1>
                      <p>
                        Lorem ipsum dolor sit consectetur adipiscing elit.
                        Nullam lectus erat
                      </p>
                    </div>
                  </div>
                  <div>
                    <h1>Image</h1>
                    <div>
                      <h1>Building Construction</h1>
                      <p>
                        Lorem ipsum dolor sit consectetur adipiscing elit.
                        Nullam lectus erat
                      </p>
                    </div>
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
