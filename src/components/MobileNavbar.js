import React from 'react';
import {  Youtube, Envelope, CalendarEvent } from 'react-bootstrap-icons';
import './MobileNavbar.css';
// import { Link } from 'react-router-dom';
import Menu from './Menu';





function MobileNavbar() {


      
    return (
        <section className="MobileNavbar container d-flex flex-row justify-content-around align-items-center">
          
          {/* Menu */}
          <div className="d-flex flex-column menuitem  align-self-center">

                 
             <Menu />  <p >Menu</p>           
        

          </div>

        
        {/* Video */}
          <div className="d-flex flex-column menuitem align-self-center">

                   
             <Youtube color="white" size={20}  />  <p >Video</p>           
        

          </div>


          {/* NewsLetter */}
          <div className="d-flex flex-column menuitem align-self-center">

                    
             <Envelope color="white" size={20}  />  <p >Newsletter</p>           
       

          </div>


        {/* Events */}
          <div className="d-flex flex-column menuitem align-self-center">

                    
             <CalendarEvent color="white" size={20}  />  <p >Events</p>           
       

          </div>

         

        </section>
    )
}



export default MobileNavbar

