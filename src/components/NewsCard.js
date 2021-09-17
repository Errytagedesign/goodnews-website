import React from 'react';
import { Link } from 'react-router-dom';
import  './NewsCard.css';

import heart from '../assets/icons/Heart.svg';
import comments from '../assets/icons/Comment.svg';
import share from '../assets/icons/Share.svg';

// import Image from '../assets/Greater Lagos 5.jpg'

function NewsCard(props) {

    const {title, imagesrc, description, name, url} = props;

    return (
        <div>
            <section className="p-3 mt-2 newscard">

                <h4>{title}</h4>
           
           <div className="NewsCardWrapper">
             
              <div className="col-12 overflow-hidden"> <img className="col-12 card-img-top" src={imagesrc} alt="" /> 
              </div> 
              
               
              <p className="NewsCardTitle"> {name} </p>
              
           </div> 
              <p className="NewsCardExcerpt"> {description.slice(0,150)} 
              <Link to={url} className="Readmore"> Read More </Link> </p> 

              <div className="d-flex col-6 justify-content-between"> 
                  <div> <img className="icons" src={heart}  alt="" />  <small> 1 </small> </div>  
                  <div> <img className="icons" src={comments}  alt="" />  <small> 1 </small> </div>  
                  <div> <img className="icons" src={share}  alt="" />  <small> 1 </small> </div>  
              </div>         
           
             </section>

        </div>
    )
}

export default NewsCard
