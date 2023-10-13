'use client'
import { Component } from 'react'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Card from './ProjectPrevCard'
export default class MultipleItems2 extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
    }
    return (
      <div className=" z-10 w-96">
        <Slider {...settings}>
          <div className="">
            <img alt="1" src={`/${this.props.befPic}`} className="w-96"></img>
          </div>
          <div className="">
            <img alt="1" src={`/${this.props.aftPic}`} className="w-96"></img>
          </div>
        </Slider>
      </div>
    )
  }
}
