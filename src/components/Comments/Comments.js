import React from "react";

function Comments({ description }) {
  return (
    <main>
      <section alignItems="flex-start">
        <div>
          <img alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
        <h2>{description}</h2>
      </section>
      {/* <Divider variant="inset" component="li" /> */}
    </main>
  );
}

export default Comments;
