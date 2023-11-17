'use client'
import ProfileCard from '@/components/profileCard'
import { useEffect } from 'react'
const TeamPage = () => {
  const myArray = []
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-down')
        }
      })
    })
    observer.observe(document.getElementById('team-title')!)
    observer.observe(document.getElementById('team-subtitle')!)
    observer.observe(document.getElementById('team-desc')!)
    observer.observe(document.getElementById('team-cards')!)
  }, [])

  return (
    <div className="min-h-[700px] flex flex-col gap-8 pt-48 -mt-16 items-center text-center px-[52px] mb-24 overflow-hidden">
      <div className="">
        <div className="text-xl font-medium cap" id="team-title">
          WHO WE ARE
        </div>
        <div className="font-semibold text-5xl" id="team-subtitle">
          Meet our team
        </div>
        <div className="text-gray-500 text-lg w-2/3 m-auto" id="team-desc">
          Welcome to our construction family! Meet our skilled team, ready to
          transform your dreams into solid structures with passion and
          precision.
        </div>
      </div>
      <div
        className="flex flex-wrap justify-center px-20 gap-10"
        id="team-cards"
      >
        {[
          {
            name: 'Miles Tales',
            title: 'CEO',
            description:
              'Leading with strategic vision for unparalleled construction excellence.',
            profilePic: 'stockFace1.png',
          },
          {
            name: 'Jack Moore',
            title: 'CFO',
            description:
              'Overseeing financial strategies, ensuring fiscal health for project success.',
            profilePic: 'stockFace2.png',
          },
          {
            name: 'Shannon Morales',
            title: 'Sales Manager',
            description:
              'Guiding project growth, building client relationships for seamless success.',
            profilePic: 'stockFace3.png',
          },
        ].map((item, index) => (
          <ProfileCard
            key={index}
            name={item.name}
            title={item.title}
            description={item.description}
            links={item.name}
            profilePic={item.profilePic}
            number={index}
          ></ProfileCard>
        ))}
      </div>
    </div>
  )
}
export default TeamPage
