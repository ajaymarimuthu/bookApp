import React from 'react'
import best from "../../assets/BestSeller.png"

import awards from "../../assets/awards.png"

import box from "../../assets/box.png"

import international from "../../assets/international.png"

import newarrival from "../../assets/newarrival.png"


import fiction from "../../assets/fiction.png"

import tarot from "../../assets/tarot.png"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


// import {
//   MDBCarousel,
//   MDBCarouselItem,
// } from 'mdb-react-ui-kit';


function BookSection() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <div>
       

       <div
                style={{
                    background: 'grey',
                    height: '1px',
                    margin: '0.2rem 0'
                }}
            />

      <Carousel responsive={responsive}>
        <div>
          <img src={best} alt="" />
        </div>
        <div>
          <img src={awards} alt="" />
        </div>
        <div>
          <img src={box} alt="" />
        </div>
        <div>
          <img src={international} alt="" />
        </div>
        <div>
        <img src={newarrival} alt="" />

        </div>
        <div>
        <img src={fiction} alt="" />

        </div>
        <div>
        <img src={tarot} alt="" />
        </div>
      </Carousel>;

      <div
                style={{
                    background: 'grey',
                    height: '1px',
                    margin: '0.2rem 0'
                }}
            />


    </div>
  )
}

export default BookSection