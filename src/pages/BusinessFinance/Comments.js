// function Comments(props) {
//   const [comments, setComments] = useState(null);
//   const [postcomment, setPostcomments] = useState(false);

//   function getComments(e) {
//     setComments(e.target.value);
//     setPostcomments(false);
//   }

//   return (
//     <div>

//     </div>
//   );
// }

// export default Comments;

import React, { useState } from "react";
import CommentBox from "./CommentBox";
import Comment from "./Comment";

let commentCounter = 1;

function Comments(props) {
  const initailState = {
    commentValue: "",
    commentLine: [{ commentId: [], text: "" }],
  };

  const [commentValue, setcommentValue] = useState(initailState);

  const [commentLine, setcommentLine] = useState("");

  const handleCommentValue = (e) => {
    setcommentValue({
      commentValue: e.target.value,
    });
  };
  console.log(handleCommentValue);

  const setCommentLine = () => {
    setcommentLine({
      commentLine: [
        commentLine,
        { commentId: commentCounter++, text: commentValue },
      ],
      commentValue: "",
    });
  };

  const submitCommentLine = (e) => {
    e.preventDefault();
    setCommentLine();
  };

  const enterCommentLine = (e) => {
    if (e.charCode === 13) {
      setCommentLine();
    }
  };

  return (
    <div>
      <Comment />
      <CommentBox
        value={commentValue}
        handleCommentValue={handleCommentValue}
        enterCommentLine={enterCommentLine}
        submitCommentLine={submitCommentLine}
      />
    </div>
  );
}

export default Comments;
