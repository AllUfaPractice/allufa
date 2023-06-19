import React, { useRef } from "react";
import Slider from "react-slick";
import Project from "./Project";
import { ContStyle, ButtonsStyle } from "./MainCarousel.styled";


class MainCarousel extends React.Component{
  render(){
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <ContStyle className="MainCarousel">
        <Slider {...settings}>
          <Project />
          <div className="asd">
          <p>2</p>
          </div>
          <Project/>
        </Slider>
      </ContStyle>
    );
  }
}

export default MainCarousel;
