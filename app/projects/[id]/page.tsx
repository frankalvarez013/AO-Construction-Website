'use client'
import { useMemo } from 'react'
import { useState } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
const ProjectsPage = ({ params }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  })
  if (!isLoaded) return <div>Loading...</div>
  return (
    <div className="h-[100vh] min-h-auto h-full mt-20">
      <div className=" text-5xl m-auto text-center mb-5">Projects!</div>
      <div className=" text-lg font-light m-auto text-center mb-5">
        View all the sites we've worked on since 2015! Click any marker to view
        the worked done on each location
      </div>
      <div className="flex justify-around items-center m-10">
        <Map></Map>
        <div className="flex basis-1/3">
          <ProjectCard properties={properties[1]} />
        </div>
      </div>
    </div>
  )
}
function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), [])

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  )
}
function ProjectCard({ properties }) {
  return (
    <div className=" h-[600px] bg-green-200">
      <div>{properties.address}</div>
      <div>{properties.description}</div>
      <div>{properties.price}</div>
      <div>{properties.bed}</div>
      <div>{properties.size}</div>
    </div>
  )
}

const properties = [
  {
    address: '215 Emily St, MountainView, CA',
    pictures: ['/before1.png', '/after1.png'],
    description: 'Single family house with modern design',
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
    pictures: ['/before1.png', '/after1.png'],
    description: 'Townhouse with friendly neighbors',
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
    pictures: ['/before1.png', '/after1.png'],
    description: 'Spacious warehouse great for small business',
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
    pictures: ['/before1.png', '/after1.png'],
    description: 'A lovely store on busy road',
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
    pictures: ['/before1.png', '/after1.png'],
    description: 'Single family house near golf club',
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
    pictures: ['/before1.png', '/after1.png'],
    description: 'Multifloor large warehouse',
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
    pictures: ['/before1.png', '/after1.png'],
    description: '3 storey townhouse with 2 car garage',
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
    pictures: ['/before1.png', '/after1.png'],
    description: 'Single family house in great school zone',
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
    pictures: ['/before1.png', '/after1.png'],
    description: '2 storey store with large storage room',
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
    pictures: ['/before1.png', '/after1.png'],
    description: 'Single family house',
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
