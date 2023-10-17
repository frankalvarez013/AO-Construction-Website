'use client'
import './globals.css'
import Image from 'next/image'
import displayImg from '../public/displayImg.png'
import building from '../public/building.svg'
import repair from '../public/repair.svg'
import design from '../public/design.svg'
import HookSection from '@/components/HookSection'
import Trust from '@/components/VideoSection'
import RelatedProjects from '@/components/RelatedProjects'
import FAQ from '@/components/FAQ'
import LocationSection from '@/components/LocationSection'
import ContactUs from '@/components/ContactUs'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
export default function Home() {
  const router = useSearchParams()
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-down')
        }
      })
    })
    console.log(document.getElementById('bobo'))
    observer.observe(document.getElementById('s2-Image1')!)
    observer.observe(document.getElementById('s2-Image2')!)
    observer.observe(document.getElementById('s2-title')!)
    observer.observe(document.getElementById('s2-subtitle')!)
    observer.observe(document.getElementById('s2-subtext')!)
    observer.observe(document.getElementById('s2-button')!)
    observer.observe(document.getElementById('home')!)
    observer.observe(document.getElementById('related-title')!)
    observer.observe(document.getElementById('related-slider')!)
    observer.observe(document.getElementById('related-button')!)
    observer.observe(document.getElementById('video')!)
    observer.observe(document.getElementById('video-subtitle')!)
    observer.observe(document.getElementById('video-title')!)
    observer.observe(document.getElementById('video-desc')!)
    observer.observe(document.getElementById('video-button')!)
    observer.observe(document.getElementById('video-posttitle')!)
    observer.observe(document.getElementById('faq-title')!)
    observer.observe(document.getElementById('faq-desc')!)
    observer.observe(document.getElementById('faq-stack')!)
    observer.observe(document.getElementById('faq-client-title')!)
    observer.observe(document.getElementById('faq-client-cards')!)
    observer.observe(document.getElementById('location-image')!)
    observer.observe(document.getElementById('location-info')!)
    observer.observe(document.getElementById('location-email')!)
    observer.observe(document.getElementById('location-phone')!)
    observer.observe(document.getElementById('contact-title')!)
    observer.observe(document.getElementById('contact-email')!)
    observer.observe(document.getElementById('contact-name')!)
    observer.observe(document.getElementById('contact-message')!)
    observer.observe(document.getElementById('contact-submit')!)

    console.log('hi')
    const section = router.get('a')
    if (section) {
      const sectionElement = document.getElementById(section)
      console.log(sectionElement)
      console.log('callin main section element', sectionElement)
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [])
  return (
    <div className="h-full w-full flex flex-col">
      <main className="h-full w-full max-h-full pt-5 -mt-5 snap-start mb-16">
        <section className="relative pt-20 lg:py-20 lg:min-h-[800px]" id="home">
          <Image
            loading="eager"
            src={displayImg}
            alt=""
            fill={true}
            className="object-cover opacity-80"
          ></Image>
          <div className="absolute inset-0 bg-light-grey1 opacity-80"></div>

          <div className="flex justify-center items-center lg:py-[100px] p-20">
            <div className="flex flex-col relative text-white gap-14 md:gap-24 mb-16 lg:flex-row">
              <div className="flex flex-col items-start gap-8">
                <h1 className="font-bold border-orangeJ border-l-8 text-4xl sm:text-6.5xl pl-5 lil:text-5xl">
                  Our Construction <br /> Services
                </h1>
                <p className="font-light text-lg lg:max-w-2xl ml-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  quis egestas pellentesque libero dolor in diam consequat ut.{' '}
                </p>
                <button className="px-11 py-3 ml-1 bg-orangeJ text-sm font-semibold hover:text-black">
                  Get a Free Quote
                </button>
              </div>
              <div className="flex items-start flex-col gap-6">
                <div className="font-extrabold text-xl text-orangeJ">
                  What We Do
                </div>
                <div className="flex flex-col gap-10">
                  <div className="flex flex-col gap-10">
                    {[
                      { icon: building, text: 'Building Construction' },
                      { icon: repair, text: 'Repair Services' },
                      { icon: design, text: 'Design Solutions' },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-center items-center"
                      >
                        <div className="">
                          <Image
                            loading="eager"
                            src={item.icon}
                            className="min-w-[50px]"
                            alt=""
                          />
                        </div>
                        <div className="px-9">
                          <h1 className="font-bold">{item.text}</h1>
                          <p className="font-light text-base">
                            Lorem ipsum dolor sit consectetur adipiscing elit.
                            Nullam lectus erat
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <HookSection></HookSection>
      <Trust></Trust>
      <RelatedProjects></RelatedProjects>
      <FAQ></FAQ>
      <LocationSection></LocationSection>
      <ContactUs></ContactUs>
    </div>
  )
}
