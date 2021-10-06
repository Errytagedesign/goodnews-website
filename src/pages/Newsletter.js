import React from "react";

function Newsletter() {
  return (
    <div>
      <section>
        <section className="Header">
          <div>
            {" "}
            <h2> Subscribe to our Newsletter </h2>{" "}
          </div>
        </section>
        <form className="container mt-5">
          <input
            type="email"
            placeholder="enter your email to subscribe"
            className="form-control"
          />

          <button type="submit" className=" formBtn form-control ">
            {" "}
            Subscribe{" "}
          </button>
        </form>
      </section>
    </div>
  );
}

export default Newsletter;
