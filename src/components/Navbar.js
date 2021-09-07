import React from 'react';
import logo from '../assets/GOOD-NEWS-NG-LOGO.png';
import { Link } from 'react-router-dom';
// import Carousel from 'react-elastic-carousel'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";





function Navbar() {

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
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 3
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        }
      ]
      };

      
    return (
        <div className="Navbar">

            <header className="LogoSearch">
              <div className="container d-flex flex-row justify-content-between">
                
                {/* logo */}
                <div className="text-start gLogo col-6 col-md-4 ">
                   <img className=" col-6 col-md-4" src={logo} alt="good-news-logo" /> 
                </div>
                
                {/* search */}
               <div className="col-6 col-md-6"> 
                   <input className="form-control" type="text" placeholder="search"/> 
               </div>
           </div>  
            </header>
                
        
           {/* Categories */}
           <div className="NewsCategory">

                <div className="">
                   
                    <Slider {...settings}>
                    <Link className="newsCat " to="/"> Top News </Link>
                    <Link className="newsCat  " to="/"> Entertainment </Link>
                    <Link className="newsCat  " to="/"> Fashion </Link>
                    <Link className="newsCat " to="/"> Lifestyle </Link>
                    <Link className="newsCat " to="/"> Sport </Link>
                    <Link className="newsCat " to="/"> Politics </Link>
                    </Slider>
                </div>

           </div>

        </div>
    )
}



export default Navbar

