import React from "react";

function Comment(props) {
  const { commentLine } = props;
  return (
    <ul className="comments-list">
      {commentLine.map((val) => {
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
