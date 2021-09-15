import React from 'react';
import { Link } from 'react-router-dom';
import  './NewsCard.css';
// import Image from '../assets/Greater Lagos 5.jpg'

function NewsCard(props) {
    return (
        <div>
            <section className="p-3 mt-2 newscard">

                <h4>{props.Title}</h4>
           
           <div className="NewsCardWrapper">
             
              <div> <img className="" src={props.Imagesrc} alt="" /> </div> 
              
               
              <p className="NewsCardTitle"> {props.name} </p>
              
           </div> 
              <p className="NewsCardExcerpt"> {props.Description} <Link to={props.pageurl} className="Readmore"> Read More </Link> </p>

           
           
       </section>
        </div>
    )
}

export default NewsCard
