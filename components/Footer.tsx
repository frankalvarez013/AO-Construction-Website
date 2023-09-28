import Image from 'next/image'
import Twitter from '../public/Twitter.png'
import Facebook from '../public/Facebook.png'
import Linkedin from '../public/Linkedin.png'
import Youtube from '../public/Youtube.png'

const Footer = () => {
  return (
    <footer className="md:p-14 bg-dark-grey1 text-slate-100 p-5">
      <div className="flex flex-col md:flex-row justify-evenly gap-5">
        <div className="text-center md:text-left flex flex-col gap-4 basis-1/5 justify-center">
          <div className="font-semibold text-2xl">AO Construction</div>
          <div className="">
            Call Us Today
            <h4 className="font-semibold text-2xl">+1 634 7638 654</h4>
          </div>
          <div className="flex gap-3 lg:justify-normal justify-center">
            <Image alt="" src={Twitter}></Image>
            <Image alt="" src={Facebook}></Image>
            <Image alt="" src={Linkedin}></Image>
            <Image alt="" src={Youtube}></Image>
          </div>
        </div>
        <div className="flex flex-col md:flex-row basis-3/5">
          <div className="text-center md:text-left flex-grow">
            <h4 className="mb-3 font-semibold">Services</h4>
            <div className="font-light">
              <h4> ? </h4>
            </div>
          </div>
          <div className="text-center md:text-left flex-grow">
            <h4 className="mb-3 font-semibold">Support</h4>
            <div className="font-light">
              <h4>Pricing</h4>
              <h4>Documentation</h4>
            </div>
          </div>
          <div className="text-center md:text-left flex-grow">
            <h4 className="mb-3 font-semibold">Company</h4>
            <div className="font-light">
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
