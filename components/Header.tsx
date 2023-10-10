'use client'
import Image from 'next/image'
import Brand from '../public/AOSymbol.svg'
import HamburgerSymbol from '../public/block.svg'
import XSymbol from '../public/x.svg'
import { Poppins } from 'next/font/google'
import { useState } from 'react'
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
})

const Header = () => {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false)
  const [scrollBar, setScrollBar] = useState(false)
  if (scrollBar) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
  const handleBurgerClick = () => {
    setHamburgerMenuOpen(!hamburgerMenuOpen)
    setScrollBar(!scrollBar)
  }
  const handleNavItemsClick = () => {
    setHamburgerMenuOpen(false)
    setScrollBar(false)
  }
  return (
    <header className={poppins.className}>
      <nav className="flex items-center justify-between pt-1.5 font-semibold fixed z-10 bg-white w-full">
        <div className="flex items-center pl-5 text-lg gap-3">
          <Image src={Brand} alt="/" className="h-14 w-14"></Image>
          <span>AO Construction</span>
        </div>

        <ul
          className={`fixed flex -top-full gap-0 flex-col bg-white w-full text-center lg:static lg:flex-row lg:w-auto lg:top-auto lg:items-center lg:space-x-4 lg:pr-10 lg:gap-x-2 text-sm ${
            hamburgerMenuOpen
              ? 'top-0 h-screen justify-evenly items-center'
              : ''
          }`}
        >
          <li className=" flex-nowrap">
            <button
              onClick={() => {
                handleNavItemsClick()
                document
                  .getElementById('home')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="nav-link hover:underline decoration-2"
            >
              Home
            </button>
          </li>
          <li className=" whitespace-nowrap">
            <button
              onClick={() => {
                handleNavItemsClick()
                document
                  .getElementById('about')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="nav-link hover:underline decoration-2"
            >
              About Us
            </button>
          </li>
          <li className=" flex-nowrap">
            <button
              onClick={() => {
                handleNavItemsClick()
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="nav-link hover:underline decoration-2"
            >
              Projects
            </button>
          </li>
          <li className="flex-nowrap">
            <button
              onClick={() => {
                handleNavItemsClick()
                document
                  .getElementById('services')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="nav-link hover:underline decoration-2"
            >
              Services
            </button>
          </li>
          <li className="whitespace-nowrap">
            <button
              onClick={() => {
                handleNavItemsClick()
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="nav-link hover:underline decoration-2"
            >
              Contact
            </button>
          </li>
        </ul>
        <button
          onClick={handleBurgerClick}
          className="flex flex-col justify-center items-center lg:hidden pr-7 flex-shrink-0 p-2"
        >
          <span
            className={`bg-black block transition-all duration-300 ease-out h-[2px] w-6 rounded-sm ${
              hamburgerMenuOpen ? 'rotate-45' : '-translate-y-1'
            }`}
          ></span>
          <span
            className={`bg-black block transition-all duration-300 ease-out h-[2px] w-6 rounded-sm ${
              hamburgerMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`bg-black block transition-all duration-300 ease-out h-[2px] w-6 rounded-sm ${
              hamburgerMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
            }`}
          ></span>
        </button>
      </nav>
    </header>
  )
}

export default Header
