import Image from 'next/image'
import Brand from '../public/AOSymbol.svg'
import HamburgerSymbol from '../public/hamburger.svg'
import XSymbol from '../public/x.svg'
import { Poppins } from 'next/font/google'
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
})
const Header = () => {
  return (
    <header className={poppins.className}>
      <nav className="flex items-center justify-between py-1.5 font-semibold">
        <div className="flex items-center flex-shrink-0 ml-5 text-lg gap-3">
          <Image src={Brand} alt="/" className="h-14 w-14"></Image>
          <span>AO Construction</span>
        </div>
        <div className="hidden items-center space-x-4 lg:flex mr-10 gap-x-2 text-sm">
          <div className="flex-nowrap ">
            <a>Project</a>
          </div>
          <div className="whitespace-nowrap">
            <a>
              <h1>Blog</h1>
            </a>
          </div>
          <div className="flex-nowrap">
            <a>Portfolio</a>
          </div>
          <div className="flex-nowrap">
            <a>Services</a>
          </div>
          <div className="whitespace-nowrap">
            <a>Contact</a>
          </div>
          <div className="whitespace-nowrap">
            <a>About</a>
          </div>
          <div className="whitespace-nowrap">
            <a>Home</a>
          </div>
        </div>
        <div className="lg:hidden mr-7 ">
          <Image src={HamburgerSymbol} className="h-7 w-7" alt="" />
        </div>
      </nav>
    </header>
  )
}

export default Header
