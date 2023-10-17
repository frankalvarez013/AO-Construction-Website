'use client'
import { useMemo } from 'react'
import { useState } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useQueryState } from 'next-usequerystate'
import SimpleSlider from '../../components/SimpleSlider2'
import { useEffect } from 'react'
const ProjectsPage = ({ params }) => {
  // const markerID = useState(params.id)
  // const router = useRouter()
  // console.log(markerID)
  const [marker, setMarker] = useQueryState('id')
  const [cardCheck, setCardCheck] = useState(false)
  // console.log(markerID)
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  })
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add('animate-fade-down')
  //       }
  //     })
  //   })
  //   observer.observe(document.getElementById('project-title')!)
  //   observer.observe(document.getElementById('project-desc')!)
  //   observer.observe(document.getElementById('project-map')!)
  //   observer.observe(document.getElementById('project-card')!)
  // }, [])
  const center = useMemo(
    () => ({ lat: 37.423928529779644, lng: -122.1087629822001 }),
    []
  )
  if (!isLoaded) return <div>Loading...</div>
  return (
    <div className="h-[100vh] min-h-auto mt-20 h-auto overflow-hidden">
      <div className=" text-5xl m-auto text-center mb-5" id="project-title">
        Projects!
      </div>
      <div
        className=" text-lg font-light m-auto text-center mb-5"
        id="project-desc"
      >
        View all the sites we've worked on since 2015! Click any marker to view
        the worked done on each location
      </div>
      <div
        className="flex gap-3 gap-10 justify-around items-center m-10 flex-grow-1 flex-shrink-0 flex-col lg:flex-row"
        id="project-map"
      >
        <GoogleMap
          zoom={11}
          center={center}
          mapContainerClassName="map-container"
        >
          <Marker position={center} />
          {properties.map((answer, i) => {
            return (
              <Marker
                key={i}
                position={{
                  lat: answer.position.lat,
                  lng: answer.position.lng,
                }}
                onClick={() => {
                  setMarker(`${i}`)
                  setCardCheck(false)
                }}
              ></Marker>
            )
          })}
        </GoogleMap>
        <div className="flex" id="project-card">
          <div
            className={`h-[650px] w-full p-5 lg:p-8 shadow-2xl rounded-2xl ${
              cardCheck ? 'hidden' : ' '
            }`}
          >
            <button
              onClick={() => {
                setCardCheck(true)
              }}
              className=" ml-auto -top-2 left-9 -right-1 z-10 sticky w-10 flex flex-col justify- items-end flex-shrink-0 p-2"
            >
              <span className="bg-black block transition-all duration-300 ease-out h-[2px] w-6 rounded-sm rotate-45 "></span>
              <span
                className="bg-black block transition-all duration-300 ease-out h-[2px] w-6 rounded-sm
                -rotate-45  -translate-y-[2px]
              "
              ></span>
            </button>

            <div className="border-b-2 pb-1 mb-4 items-center flex flex-col justify-center">
              <div className="text-2xl font-semibold mb-4">
                Construction Type: {properties[Number(marker)].type}
              </div>
              <SimpleSlider
                befPic={properties[Number(marker)].pictures[0]}
                aftPic={properties[Number(marker)].pictures[1]}
              ></SimpleSlider>
            </div>
            <div className="flex flex-col gap-3 px-10">
              <div className="font-light">
                Date:{' '}
                <span className="font-normal">
                  {properties[Number(marker)].date}
                </span>
              </div>
              <div className="font-medium">
                Description:{' '}
                <span className="font-normal">
                  {properties[Number(marker)].description}
                </span>
              </div>
              <div className="font-semibold">
                Cost:{' '}
                <span className="font-normal">
                  {properties[Number(marker)].price}
                </span>
              </div>
              <div className="font-semibold">
                Rooms:{' '}
                <span className="font-normal">
                  {properties[Number(marker)].bed}
                </span>
              </div>
              <div className="font-semibold">
                Space:{' '}
                <span className="font-normal">
                  {properties[Number(marker)].size}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const properties = [
  {
    address: '215 Emily St, MountainView, CA',
    pictures: ['propertyPics/bef_2.jpg', 'propertyPics/aft_2.jpg'],
    description: 'Single family house with modern design',
    date: 'September 5, 2022',
    price: '$ 3,889,000',
    type: 'home',
    bed: 5,
    bath: 4.5,
    size: 300,
    position: {
      lat: 37.50024109655184,
      lng: -122.28528451834352,
    },
  },
  {
    address: '108 Squirrel Ln &#128063;, Menlo Park, CA',
    pictures: ['propertyPics/bef_2.jpg', 'propertyPics/aft_2.jpg'],
    description: 'Townhouse with friendly neighbors',
    date: 'September 5, 2022',
    price: '$ 3,050,000',
    type: 'building',
    bed: 4,
    bath: 3,
    size: 200,
    position: {
      lat: 37.44440882321596,
      lng: -122.2160620727,
    },
  },
  {
    address: '100 Chris St, Portola Valley, CA',
    pictures: ['propertyPics/bef_2.jpg', 'propertyPics/aft_2.jpg'],
    description: 'Spacious warehouse great for small business',
    date: 'September 5, 2022',
    price: '$ 3,125,000',
    type: 'warehouse',
    bed: 4,
    bath: 4,
    size: 800,
    position: {
      lat: 37.39561833718522,
      lng: -122.21855116258479,
    },
  },
  {
    address: '98 Aleh Ave, Palo Alto, CA',
    pictures: ['propertyPics/bef_2.jpg', 'propertyPics/aft_2.jpg'],
    description: 'A lovely store on busy road',
    date: 'September 5, 2022',
    price: '$ 4,225,000',
    type: 'store-alt',
    bed: 2,
    bath: 1,
    size: 210,
    position: {
      lat: 37.423928529779644,
      lng: -122.1087629822001,
    },
  },
  {
    address: '2117 Su St, MountainView, CA',
    pictures: ['propertyPics/bef_2.jpg', 'propertyPics/aft_2.jpg'],
    description: 'Single family house near golf club',
    date: 'September 5, 2022',
    price: '$ 1,700,000',
    type: 'home',
    bed: 4,
    bath: 3,
    size: 200,
    position: {
      lat: 37.40578635332598,
      lng: -122.15043378466069,
    },
  },
  {
    address: '197 Alicia Dr, Santa Clara, CA',
    pictures: ['propertyPics/bef_2.jpg', 'propertyPics/aft_2.jpg'],
    description: 'Multifloor large warehouse',
    date: 'September 5, 2022',
    price: '$ 5,000,000',
    type: 'warehouse',
    bed: 5,
    bath: 4,
    size: 700,
    position: {
      lat: 37.36399747905774,
      lng: -122.10465384268522,
    },
  },
  {
    address: '700 Jose Ave, Sunnyvale, CA',
    pictures: ['propertyPics/bef_2.jpg', 'propertyPics/aft_2.jpg'],
    description: '3 storey townhouse with 2 car garage',
    date: 'September 5, 2022',
    price: '$ 3,850,000',
    type: 'building',
    bed: 4,
    bath: 4,
    size: 600,
    position: {
      lat: 37.38343706184458,
      lng: -122.02340436985183,
    },
  },
  {
    address: '868 Will Ct, Cupertino, CA',
    pictures: ['propertyPics/bef_2.jpg', 'propertyPics/aft_2.jpg'],
    description: 'Single family house in great school zone',
    date: 'September 5, 2022',
    price: '$ 2,500,000',
    type: 'home',
    bed: 3,
    bath: 2,
    size: 100,
    position: {
      lat: 37.34576403052,
      lng: -122.04455090047453,
    },
  },
  {
    address: '655 Haylee St, Santa Clara, CA',
    pictures: ['propertyPics/bef_2.jpg', 'propertyPics/aft_2.jpg'],
    description: '2 storey store with large storage room',
    date: 'September 5, 2022',
    price: '$ 2,500,000',
    type: 'store-alt',
    bed: 3,
    bath: 2,
    size: 450,
    position: {
      lat: 37.362863347890716,
      lng: -121.97802139023555,
    },
  },
  {
    address: '2019 Natasha Dr, San Jose, CA',
    pictures: ['propertyPics/bef_2.jpg', 'propertyPics/aft_2.jpg'],
    description: 'Single family house',
    date: 'September 5, 2022',
    price: '$ 2,325,000',
    type: 'home',
    bed: 4,
    bath: 3.5,
    size: 500,
    position: {
      lat: 37.41391636421949,
      lng: -121.94592071575907,
    },
  },
]
export default ProjectsPage
