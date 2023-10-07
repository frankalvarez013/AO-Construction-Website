'use client'
import { Component } from 'react'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Card from './Card'
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
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
          <div className="check flex items-center justify-center">
            <Card url="/Rectangle13.png"></Card>
          </div>
          <div className=" flex items-center justify-center">
            <Card url="/Rectangle13.png"></Card>
          </div>
          <div className=" flex items-center justify-center">
            <Card url="/Rectangle13.png"></Card>
          </div>
          <div className=" flex items-center justify-center">
            <Card url="/Rectangle13.png"></Card>
          </div>
          <div className=" flex items-center justify-center">
            <Card url="/Rectangle13.png"></Card>
          </div>
          <div className=" flex items-center justify-center">
            <Card url="/Rectangle13.png"></Card>
          </div>
          <div className=" flex items-center justify-center">
            <Card url="/Rectangle13.png"></Card>
          </div>
        </Slider>
      </div>
    )
  }
}
