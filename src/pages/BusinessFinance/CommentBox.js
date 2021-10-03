import React from "react";
// import styled from "styled-components";

// const PostComments = styled.div`
//   border-bottom: 4px solid grey;
//   margin-bottom: 3px;
// `;

function CommentBox(props) {
  //   const {
  //     commentValue,
  //     handleCommentValue,
  //     enterCommentLine,
  //     submitCommentLine,
  //   } = props;

  // const enableCommentButton = () => {
  //   return props.commentValue ? false : true;
  // };
  // const changeCommentButtonStyle = () => {
  //   return props.commentValue
  //     ? "comments-button-enabled"
  //     : "comments-button-disabled";
  // };

  return (
    <div>
      <textarea
        placeholder="add comment"
        className="form-control"
        onKeyPress={props.enterCommentLine}
        value={props.commentValue}
        id="comments-input"
        onChange={props.handleCommentValue}
      />

      <button
        onClick={props.submitCommentLine}
        type="submit"
        className="comments-button"
        // id={changeCommentButtonStyle()}
        // disabled={enableCommentButton()}
      >
        Comment
      </button>
    </div>
  );
}

export default CommentBox;
