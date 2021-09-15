import React from 'react';
import Headline from './Headline';
import  './Headline.css';
import vector from '../assets/icons/Vector.svg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import { Link } from 'react-router-dom';


import Slider from "react-slick";

import Image1 from '../assets/Headline 1.jpg';
import Image2 from '../assets/Headline 2.webp';
import Image3 from '../assets/Greater Lagos 5.jpg';
import { Link } from 'react-router-dom';






const settings = {
    className: "center",
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 5,
  swipeToSlide: true,
 
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        
        
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    }
  ]
  };


function Headlines() {
    return (
        
        <div className="container mt-5 col-12" >

            <div className="d-flex flex-row justify-content-between">
                <div className="d-flex flex-row justify-content-between"> 
                <div><img className="headicon" src={vector} alt="" /></div> <h2> HEADLINES </h2> </div> 
                <div>  <Link to="/HeadlineStories"> See All </Link> </div>
            </div>

                <Slider {...settings}>
                        <div className="col-12">
                            <Headline imgsrc={Image1} excerpt='Director-General of the Nigeria Centre for Disease Control (NCDC), Dr. Chikwe Ihekweazu, has
                    been appointed Assistant..' pageurl="/Headline1" />
                        </div>

                        <div className="col-12">
                            <Headline imgsrc={Image2} excerpt='The Nigerian Railway Corporation (NRC) has constructed a 40-bed hotel worth N320 million at
its Ebute-Meta station in Lagos..' pageurl="/Headline2" />
                        </div>

                        <div className="col-12">
                            <Headline imgsrc={Image3} excerpt='Wife of Lagos State Governor, Dr. Ibijoke Sanwo-Olu has presented three utility vehicles to
critical agencies of ..' pageurl="/Headline3" />
                        </div>
                </Slider>
            
        </div>
    )
}

export default Headlines
