import React from 'react';
import { MenuButton, Youtube, Envelope, CalendarEvent } from 'react-bootstrap-icons';
import './MobileNavbar.css';
import { Link } from 'react-router-dom';





function MobileNavbar() {


      
    return (
        <section className="MobileNavbar container d-flex flex-row justify-content-around align-items-center">
          
          {/* Menu */}
          <div className="d-flex align-self-center">

          <Link to="" className="" >           
             <MenuButton color="white" size={20}  />  <p >Menu</p>           
          </Link>

          </div>

        
        {/* Video */}
          <div className="d-flex align-self-center">

          <Link to="" className="" >           
             <Youtube color="white" size={20}  />  <p >Video</p>           
          </Link>

          </div>


          {/* NewsLetter */}
          <div className="d-flex align-self-center">

          <Link to="" className="" >           
             <Envelope color="white" size={20}  />  <p >Newsletter</p>           
          </Link>

          </div>


        {/* Events */}
          <div className="d-flex align-self-center">

          <Link to="" className="" >           
             <CalendarEvent color="white" size={20}  />  <p >Events</p>           
          </Link>

          </div>

         

        </section>
    )
}



export default MobileNavbar

