import React from 'react';

import Newscard from '../components/NewsCard';
import vector from '../assets/icons/Vector.svg'
import { Link } from 'react-router-dom';

import Headline from '../components/Headline';
import Slider from "react-slick";

// bootsrapt css
import 'bootstrap/dist/css/bootstrap.min.css';


import Image1 from '../assets/Headline 1.jpg';
import Image2 from '../assets/Headline 2.webp';
import Image3 from '../assets/Greater Lagos 5.jpg';







const settings = {
    className: "center",
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 2,
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


function TopNews() {
    return (
        <div className=" container mt-5">

            <div className=" d-flex flex-row justify-content-between">
                <div className="d-flex flex-row justify-content-between"> 
                <div><img className="headicon" src={vector} alt="" /></div> <h2> HEADLINES </h2> </div> 
                <div>  <Link to="/HeadlineStories"> See All </Link> </div>
            </div>

            <section className="">
                
                <Slider {...settings}>

                        <div className="">
                            <Headline imgsrc={Image1} excerpt='Director-General of the Nigeria Centre for Disease Control (NCDC), Dr. Chikwe Ihekweazu, has been appointed Assistant..' pageurl="/Headline1" />
                        </div>

                        <div className="">
                            <Headline imgsrc={Image2} excerpt='The Nigerian Railway Corporation (NRC) has constructed a 40-bed hotel worth N320 million at its Ebute-Meta station in Lagos..' pageurl="/Headline2" />
                        </div>

                        <div className="">
                            <Headline imgsrc={Image3} excerpt='Wife of Lagos State Governor, Dr. Ibijoke Sanwo-Olu has presented three utility vehicles to critical agencies of ..' pageurl="/Headline3" />
                        </div>
                 </Slider>
            </section>


             
             <section className="container d-flex flex-wrap">

             
                <div className="col-12 col-md-6 col-lg-4 p-1">
                    <Newscard  />
                </div> 

                <div className="col-12 col-md-6 col-lg-4 p-1">
                    <Newscard  />
                </div> 

                <div className="col-12 col-md-6 col-lg-4 p-1">
                    <Newscard  />
                </div> 

                <div className="col-12 col-md-6 col-lg-4 p-1">
                    <Newscard  />
                </div> 

                <div className="col-12 col-md-6 col-lg-4 p-1">
                    <Newscard  />
                </div> 
 

              
               

             </section>
             
        </div>
    )
}

export default TopNews
