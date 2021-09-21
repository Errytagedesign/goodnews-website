import React from 'react';
import { MenuButton, Youtube, Envelope, CalendarEvent } from 'react-bootstrap-icons';

import './Menu.css'
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <section className="Menu ps-3 pt-3 ">

              {/* Menu */}
          <div className="d-flex align-self-start">

<Link to="" className="d-flex flex-row justify-content-around" >           
   <MenuButton  size={20}  />  <p >Menu</p>           
</Link>

</div>


{/* Video */}
<div className="d-flex align-self-start">

<Link to="" className="d-flex flex-row justify-content-around" >           
   <Youtube  size={20}  />  <p >Video</p>           
</Link>

</div>


{/* NewsLetter */}
<div className="d-flex align-self-start">

<Link to="" className="d-flex flex-row justify-content-around" >           
   <Envelope  size={20}  />  <p >Newsletter</p>           
</Link>

</div>


{/* Events */}
<div className="d-flex align-self-start">

<Link to="" className="d-flex flex-row justify-content-around" >           
   <CalendarEvent  size={20}  />  <p >Events</p>           
</Link>

</div>


        </section>
    )
}

export default Menu
