import Image from 'next/image'
import Twitter from '../public/Twitter.png'
import Facebook from '../public/Facebook.png'
import Linkedin from '../public/Linkedin.png'
import Youtube from '../public/Youtube.png'

const Footer = () => {
  return (
    <footer className=" py-10 md:p-28 bg-dark-grey1 text-slate-100 p-5 lg:h-80">
      <div className="flex flex-col md:flex-row justify-evenly gap-10 lg:gap-0">
        <div className="text-center md:text-left flex flex-col gap-4 basis-1/11 justify-center border-light-grey1 border-b-4 pb-5">
          <div className="font-semibold text-2xl">AO Construction</div>
          <div className="">
            Call Us Today
            <h4 className="font-semibold text-2xl">(323) 555-1234</h4>
          </div>
          <div className="flex gap-3 lg:justify-normal justify-center">
            <button>
              <Image alt="" src={Twitter}></Image>
            </button>
            <button>
              <Image alt="" src={Facebook}></Image>
            </button>
            <button>
              <Image alt="" src={Linkedin}></Image>
            </button>
            <button>
              <Image alt="" src={Youtube}></Image>
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row basis-3/5 items-center md:items-start">
          <div className="text-center md:text-left w-40 ">
            <h4 className="font-semibold mb-4 text-gray-300">Services</h4>
            <div className=" text-gray-400">
              <h4> Renovations </h4>
              <h4> Structural Repairs </h4>
              <h4> Residential Design </h4>
              <h4> Project Growth Guidance </h4>
            </div>
          </div>
          <div className="text-center md:text-left w-40">
            <h4 className="mb-4 font-semibold text-gray-300">Support</h4>
            <div className=" text-gray-400">
              <h4>Pricing</h4>
              <h4>Documentation</h4>
            </div>
          </div>
          <div className="text-center md:text-left w-40">
            <h4 className="mb-4 font-semibold text-gray-300">Company</h4>
            <div className="text-gray-400">
              <h4>About</h4>
              <h4>Blog</h4>
              <h4>Projects</h4>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
