import React from "react";

function Newsletter() {
  return (
    <div>
      <section>
        <form>
          <input
            type="email"
            placeholder="enter your email to subscribe"
            className="form-control"
          />
        </form>
      </section>
    </div>
  );
}

export default Newsletter;
