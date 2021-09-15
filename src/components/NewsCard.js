import React from 'react';
import { Link } from 'react-router-dom';
import  './NewsCard.css';
import Image from '../assets/Greater Lagos 5.jpg'

function NewsCard(props) {
    return (
        <div>
            <section className="p-3 mt-2 newscard">

                <h4>Sanwo-Olu’s wife presents vehicles to rev up the fight against rape, defilement, others</h4>
           
           <div className="NewsCardWrapper">
             
              <div> <img className="" src={Image} alt="" /> </div> 
              
               
              <p className="NewsCardTitle"> Good News </p>
              
           </div> 
              <p className="NewsCardExcerpt"> Director-General of the Nigeria Centre for Disease Control (NCDC), Dr. Chikwe Ihekweazu, has
                    been appointed Assistant.. <Link to={props.pageurl} className="Readmore"> Read More </Link> </p>

           
           
       </section>
        </div>
    )
}

export default NewsCard
