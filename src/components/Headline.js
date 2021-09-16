import React from 'react';
import { Link } from 'react-router-dom';
import  './Headline.css';


function Headline(props) {
    return (
        <section className="m-1">
           
            <div className="wrapper card">
              
               <div className="overflow-hidden">
                <img className="card-img-top" src={props.imgsrc} alt="" />
                </div> 
               
                
                <p className="NewsName" > {props.name} </p>
               
               <p className="excerpt"> {props.description} <Link to={props.pageurl} className="Readmore"> Read More </Link> </p>

            

            </div> 
            
        </section>
    )
}

export default Headline
