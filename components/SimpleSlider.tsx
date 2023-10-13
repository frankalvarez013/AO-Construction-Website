'use client'
import { Component } from 'react'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Card from './ProjectPrevCard'
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1550,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 1290,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 825,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <div>
        <Slider {...settings}>
          {properties.map((props, id) => {
            return (
              <div key={id} className="flex items-center justify-center">
                <div>
                  <Card
                    title={`Construction: ${props.type}`}
                    description={props.description}
                    imageURL={`/${props.pictures[1]}`}
                    id={id}
                    date={props.date}
                  ></Card>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    )
  }
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
]
