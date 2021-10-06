import React from "react";

function Comment(props) {
  return (
    <ul className="comments-list">
      {props.commentLine.map((val) => {
        return (
          <li className="each-comment" key={val.commentId}>
            {val.text}
          </li>
        );
      })}
    </ul>
  );
}

export default Comment;
