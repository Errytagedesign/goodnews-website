import React from 'react';

// News Components
import Headlines from '../components/Headlines';
import Newscard from '../components/NewsCard';



import vector from '../assets/icons/Vector.svg'
import { Link } from 'react-router-dom';


// bootsrapt css
import 'bootstrap/dist/css/bootstrap.min.css';

// Images

import Dtiger from '../assets/Sports 3.jpg'

// import Data from '../index.json'





function TopNews() {
    return (
        <div className=" container mt-5">

            <div className=" d-flex flex-row justify-content-between">
                <div className="d-flex flex-row justify-content-between"> 
                <div><img className="headicon" src={vector} alt="" /></div> <h2> HEADLINES </h2> </div> 
                <div>  <Link to="/HeadlineStories"> See All </Link> </div>
            </div>

            <Headlines />

             
            {/* News Cards Thumbnails */}

             <section className="container d-flex flex-wrap">

                 
                 
                 {/* {Data.map(news=> (
                   <div className="col-12 col-md-6 col-lg-4 p-1"> 
                   <Newscard  Title={news.title} Imagesrc={news.url} Description={news.Description.slice(0,150)} />
                   </div> 
                     
                  ))}
  */}
                 
             
                <div className="col-12 col-md-6 col-lg-4 p-1">
                    <Newscard Title="D'Tigers Shock US in Pre-Olympics Warm-Up" name="Good News" 
                    Imagesrc={Dtiger} pageurl="/DTigersShockUs"
                    Description="Nigeria's male basketball team, popularly known as D'Tigers, began preparations for the Tokyo 2020 Olympics by pulling off a shock 90-87 win over the United States of America. " />
                </div> 

                <div className="col-12 col-md-6 col-lg-4 p-1">
                    <Newscard   />
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

                <div className="col-12 col-md-6 col-lg-4 p-1">
                    <Newscard  />
                </div> 
 

              
               

             </section>
             
        </div>
    )
}

export default TopNews
