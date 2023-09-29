'use client'
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
      <nav className="flex items-center justify-between py-1.5 font-semibold fixed z-10 bg-white w-full">
        <div className="flex items-center pl-5 text-lg gap-3">
          <Image src={Brand} alt="/" className="h-14 w-14"></Image>
          <span>AO Construction</span>
        </div>
        <div className="hidden items-center space-x-4 lg:flex pr-10 gap-x-2 text-sm">
          <div className="flex-nowrap ">
            <button
              onClick={() => {
                document
                  .getElementById('home')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Home
            </button>
          </div>
          <div className="whitespace-nowrap">
            <button
              onClick={() => {
                document
                  .getElementById('about')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              About Us
            </button>
          </div>
          <div className="flex-nowrap">
            <button
              onClick={() => {
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Projects
            </button>
          </div>
          <div className="flex-nowrap">
            <button
              onClick={() => {
                document
                  .getElementById('services')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Services
            </button>
          </div>
          <div className="whitespace-nowrap">
            <button
              onClick={() => {
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Contact
            </button>
          </div>
        </div>
        <div className="lg:hidden pr-7 flex-shrink-0">
          <Image src={HamburgerSymbol} className="h-7 w-7" alt="" />
        </div>
      </nav>
    </header>
  )
}

export default Header
