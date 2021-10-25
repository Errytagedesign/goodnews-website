import React, { useState } from "react";
import "./ContactUs.css";

import Advert from "../../assets/Goodnewsng-advertise-with-us main.png";

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

import { Link } from "react-router-dom";

function ContactUs(props) {
  const [formValue, setFormValue] = useState("");
  const enableSubmitButton = () => {
    // return formValue ? false : true;

    if (!formValue) {
      return true;
    } else if (formValue) {
      return false;
    }
  };
  return (
    <div>
      <section className="Header d-flex flex-column flex-md-row justify-content-between">
        <div>
          {" "}
          <h2> Advertise with us </h2>{" "}
        </div>
        <div>
          {" "}
          <img
            className="col-12 col-md-8"
            src={Advert}
            alt="Goodnewsng advertise with us"
          />{" "}
        </div>
      </section>
      <section className="mt-5">
        <aside className="mb-3 d-flex flex-column flex-md-row justify-content-between">
          <section className="d-flex flex-column contact col-md-6 col-lg-5">
            {/* Contact us start */}
            <div className=" col-12 d-flex flex-column mb-5 mb-md-0 ">
              <div className="headers">
                <h4 className="headers-title text-center mb-2"> Contact us </h4>
              </div>

              <div className="link mb-4">
                <h3>
                  <TelephoneFill color="grey" />{" "}
                  <a href="tel:+23408099556644"> 08099556644 </a>
                </h3>
              </div>

              <div className="link mb-4">
                <h3>
                  <Envelope color="grey" />{" "}
                  <a href="mailto:info@goodnewsng.com"> info@goodnewsng.com </a>{" "}
                </h3>
              </div>

              <div className="link">
                <h3>
                  <GeoAltFill color="grey" />{" "}
                  <a href="#iframe">
                    {" "}
                    No 2, ESO close, off Oduduwa Crescent, Ikeja GRA
                  </a>{" "}
                </h3>
              </div>
            </div>
            {/* Contact us end */}

            {/* Follow us start */}
            <div className="col-12 mb-5 mb-md-0  ">
              <h6 className="headers"> Follow us</h6>
              <div className="d-flex justify-content-around">
                <Link to="https://www.facebook.com/errytage13" target="_blank">
                  <Facebook className="socialicons" size={25} />
                </Link>

                <Link to="https://www.facebook.com/errytage13" target="_blank">
                  <Instagram className="socialicons" size={25} />
                </Link>

                <Link to="https://www.facebook.com/errytage13" target="_blank">
                  <Twitter className="socialicons" size={25} />
                </Link>

                <Link to="https://www.facebook.com/errytage13" target="_blank">
                  <Linkedin className="socialicons" size={25} />
                </Link>

                <Link to="https://www.facebook.com/errytage13" target="_blank">
                  <Youtube className="socialicons" size={25} />
                </Link>
              </div>
            </div>

            {/* Follow end */}
          </section>

          <div className="form-contact col-12 col-md-6 col-lg-7">
            <div className=" mb-2 text-center ">
              <div className="headers">
                <h4 className="headers-title text-center mb-2">
                  {" "}
                  Get in Touch{" "}
                </h4>
              </div>

              <form action="">
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  onChange={(e) => {
                    let value = { formValue: e.target.value };
                    setFormValue(value);
                  }}
                  valeu={setFormValue}
                />
                <input
                  className="form-control mt-2"
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Your number"
                  onChange={(e) => {
                    let value = { formValue: e.target.value };
                    setFormValue(value);
                  }}
                  valeu={setFormValue}
                />
                <input
                  className="form-control mt-2"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@email.com"
                  onChange={(e) => {
                    let value = { formValue: e.target.value };
                    setFormValue(value);
                  }}
                  valeu={setFormValue}
                />
                <textarea
                  className="form-control mt-2"
                  id="message"
                  name="message"
                  cols="30"
                  rows="10"
                  placeholder="enter your message"
                  onChange={(e) => {
                    let value = { formValue: e.target.value };
                    setFormValue(value);
                  }}
                  valeu={setFormValue}
                ></textarea>
                <input
                  type="submit"
                  value="Submit"
                  className="formBtn form-control"
                  disabled={enableSubmitButton()}
                />
              </form>
            </div>
          </div>
        </aside>

        <hr className="mt-5 mb-5" />
        <aside>
          <div class="headers">
            <h4 class="headers-title text-center mb-2"> Find us on Map </h4>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.5818813264877!2d3.35210281477098!3d6.5743343952452955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b920c267d9f9b%3A0x7b0444b2d79a150a!2s2%20Eso%20Cl%2C%20Ikeja%20GRA%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1633440031128!5m2!1sen!2sng"
            className="col-12"
            height="500"
            allowfullscreen=""
            loading="lazy"
            title="goodnewslocation"
            id="iframe"
          />
        </aside>
      </section>
    </div>
  );
}

export default ContactUs;
