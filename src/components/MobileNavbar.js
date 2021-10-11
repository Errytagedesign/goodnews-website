import React from "react";
import { Youtube, Envelope, CalendarEvent } from "react-bootstrap-icons";
import "./MobileNavbar.css";
// import { Link } from 'react-router-dom';
import Menu from "./Menu";
import { Link } from "react-router-dom";

function MobileNavbar() {
  return (
    <section className="MobileNavbar container d-flex flex-row justify-content-around align-items-center">
      {/* Menu */}
      <div className="d-flex flex-column menuitem  align-self-center">
        <Menu /> <p>Menu</p>
      </div>

      {/* Video */}
      <div className="d-flex link flex-column menuitem align-self-center">
        <Link to="/videos">
          <Youtube color="white" size={20} /> <p>Video</p>
        </Link>
      </div>

      {/* NewsLetter */}
      <div className="d-flex link flex-column menuitem align-self-center">
        <Link to="/newsletter">
          <Envelope color="white" size={20} /> <p>Newsletter</p>
        </Link>
      </div>

      {/* Events */}
      <div className="d-flex link flex-column menuitem align-self-center">
        <Link to="/events">
          <CalendarEvent color="white" size={20} /> <p>Events</p>
        </Link>
      </div>
    </section>
  );
}

export default MobileNavbar;
