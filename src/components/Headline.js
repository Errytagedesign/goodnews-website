import React from 'react';
import { Link } from 'react-router-dom';
import  './Headline.css';


function Headline(props) {
    return (
        <section className="m-1">
           
            <div className="wrapper card">
              
                <img className="card-img-top" src={props.imgsrc} alt="" />
               
                
                <div  className="NewsName"> <p >Good News </p></div>
               
               <p className="excerpt"> {props.excerpt} <Link to={props.pageurl} className="Readmore"> Read More </Link> </p>

            

            </div> 
            
        </section>
    )
}

export default Headline
