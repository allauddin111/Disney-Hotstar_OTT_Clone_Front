import React from 'react'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function ImageSlider() {

    let settings={
        centerMode: true,
        dots:true,
        autoplay:true,
        infinite:true,
        speed:500,
        slideToShow:1,
        slideToScroll:1
    };
    return (
        
        <Carousel {...settings}>
        <Wrap>
        <img src='/Images/Slider-badging.jpg' />
        </Wrap>
        <Wrap>
        <img src='/Images/Slider-badag.jpg' />
        </Wrap>
        </Carousel>
    )
}

export default ImageSlider

const Carousel=styled(Slider)`
   

    .slick-list{
        overflow:visbile;
    }
    .slick-prev {
  left: 3% !important;
  z-index: 1;
}
.slick-next {
  right: 3% !important;
  z-index: 1;
}
ul li button{
    &:before{
        font-size:10px;
        color:rgb(150,158,171);
    }
}
li.slick-active button::before{
    color:white;
}


`;



const Wrap=styled.div`
margin-top:20px;
cursor:pointer;
    img{
        border: 4px solid transparent;
        border-radius:4px;
        height:100%;
        width:100%;
        box-shadow:rgb(0 0 0 / 69%) 0px 26px 38px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;

        &:hover{
            border-color: rgba(249,249,249,0.8);
        }
    }

`;