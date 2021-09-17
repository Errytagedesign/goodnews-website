import React from 'react';
import logo from '../assets/GOOD-NEWS-NG-LOGO-WHITE.png';
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
            slidesToShow: 2,
            slidesToScroll: 3,
            initialSlide: 2
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
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
                  <Link to="/"> <img className=" col-6 col-md-4" src={logo} alt="good-news-logo" /> </Link>  
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
                    <Link className="newsCat " to="/"> Top Stories </Link>
                    <Link className="newsCat  " to="/businessFinance"> Business and Finance </Link>
                    <Link className="newsCat  " to="/education"> Education </Link>
                    <Link className="newsCat " to="/entertainments"> Entertainments </Link>
                    <Link className="newsCat " to="/fashionLifestyle"> Fashion and Lifestyle </Link>
                    <Link className="newsCat " to="/fashionLifestyle"> Polictics </Link>
                    <Link className="newsCat " to="/technology"> Technology </Link>
                    <Link className="newsCat " to="/sport"> Sport </Link>
                    <Link className="newsCat " to="/greaterLagos"> Greater Lagos</Link>
                    <Link className="newsCat " to="/opinion"> Opinion</Link>
                    </Slider>
                </div>

           </div>

        </div>
    )
}



export default Navbar

