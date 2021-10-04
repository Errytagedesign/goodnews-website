import React from "react";

function ContactUs() {
  return (
    <div>
      <section class="col-12">
        <aside class="mb-3 d-flex flex-column flex-md-row justify-content-between">
          <div class=" contact col-12 col-md-5">
            <div class="headers">
              <h4 class="headers-title text-center mb-2"> Contact us </h4>
            </div>

            <div class="mt-2 mb-2 text-center">
              <i class="bi bi-house-door"></i>{" "}
              <h5 class=" mb-3 mt-2">
                {" "}
                Head Quarters: <br /> Annex-B12, 991/992 Zakariya Maimalari
                Street, Central Business District, Federal Capital Territory,
                Abuja{" "}
              </h5>
            </div>

            <div class="mt-2 mb-2 text-center">
              <i class="bi bi-telephone me-1"></i>{" "}
              <h5> 09097070701, 09097070702, 08085555766 </h5>
            </div>

            <div class="mt-2 mb-2 text-center border-bottom pb-3">
              <i class="bi bi-envelope"></i>{" "}
              <a href="mailto: info@evipmagazine.com">
                {" "}
                <h5 class=" mb-3 mt-2"> info@evipmagazine.com </h5>{" "}
              </a>
            </div>
          </div>

          <div className="form-contact col-12 col-md-6 p-3">
            <div class="mt-4 mb-2 text-center ">
              <div class="headers">
                <h4 class="headers-title text-center mb-2"> Get in Touch </h4>
              </div>

              <form action="">
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                />
                <input
                  className="form-control mt-2"
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Your number"
                />
                <input
                  className="form-control mt-2"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@email.com"
                />
                <textarea
                  className="form-control mt-2"
                  id="message"
                  name="message"
                  cols="30"
                  rows="10"
                  placeholder="enter your message"
                ></textarea>
                <input type="submit" value="Submit" className="redBtn col-12" />
              </form>
            </div>
          </div>
        </aside>

        <aside>
          <div class="headers">
            <h4 class="headers-title text-center mb-2"> Find us on Map </h4>
          </div>

          <iframe
            className="mt-5 col-12"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.19901798968!2d7.485613514786772!3d9.045602893509367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b98b8a80f55%3A0xde175a470efb9877!2sb12!5e0!3m2!1sen!2sng!4v1628672237704!5m2!1sen!2sng"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            title="Map"
          />
        </aside>
      </section>
    </div>
  );
}

export default ContactUs;
