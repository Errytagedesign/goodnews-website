import React from "react";
import logo from "../assets/GOOD-NEWS-NG-LOGO-WHITE.png";
import { Link } from "react-router-dom";
import {
  Envelope,
  Facebook,
  GeoAltFill,
  Instagram,
  Linkedin,
  TelephoneFill,
  Twitter,
  Youtube,
} from "react-bootstrap-icons";

// import { List } from 'react-bootstrap-icons';

function Footer() {
  return (
    <div className="LogoSearch mt-5 mb-5 pb-5 mb-md-0">
      <div className=" d-flex flex-column flex-md-row justify-content-between">
        {/* logo */}
        <div className=" text-center text-md-start ">
          <Link className="" to="/">
            {" "}
            <img
              className=" mx-auto  col-6 col-md-6 "
              src={logo}
              alt="good-news-logo"
            />{" "}
          </Link>
        </div>

        {/* search */}
        <div className="col-12 col-md-5 d-flex flex-column mb-5 mb-md-0 ">
          <h6 className="footerheaders"> Contact us</h6>

          <div className="link mb-1">
            <TelephoneFill color="grey" />{" "}
            <a href="tel:+23408099556644"> 08099556644 </a>
          </div>

          <div className="link mb-1">
            <Envelope color="grey" />{" "}
            <a href="mailto:info@goodnewsng.com"> info@goodnewsng.com </a>
          </div>

          <div className="link">
            <GeoAltFill color="grey" />{" "}
            <a href="mailto:info@goodnewsng.com">
              {" "}
              No 2, ESO close, off Oduduwa Crescent, Ikeja GRA{" "}
            </a>
          </div>
        </div>

        {/* Follow us */}
        <div className="col-12 col-md-3 mb-5 mb-md-0  ">
          <h6 className="footerheaders"> Follow us</h6>
          <div className="d-flex justify-content-around">
            <Link to="https://www.facebook.com/errytage13" target="_blank">
              <Facebook color="white" size={25} />
            </Link>

            <Link to="https://www.facebook.com/errytage13" target="_blank">
              <Instagram color="white" size={25} />
            </Link>

            <Link to="https://www.facebook.com/errytage13" target="_blank">
              <Twitter color="white" size={25} />
            </Link>

            <Link to="https://www.facebook.com/errytage13" target="_blank">
              <Linkedin color="white" size={25} />
            </Link>

            <Link to="https://www.facebook.com/errytage13" target="_blank">
              <Youtube color="white" size={25} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
