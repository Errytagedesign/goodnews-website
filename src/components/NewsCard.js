import React from 'react';
import { Link } from 'react-router-dom';
import  './NewsCard.css';
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
           
             </section>

        </div>
    )
}

export default NewsCard
