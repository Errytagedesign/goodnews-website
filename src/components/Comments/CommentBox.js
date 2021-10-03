import React, { useState } from "react";
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

  const { handleCommentSubmit } = props;

  // let comment = "";

  const [comment, setComment] = useState("");

  return (
    <div>
      {/* <textarea
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
      </button> */}

      <div>
        <div className="card-header">
          {" "}
          <strong>Add Comments</strong>{" "}
        </div>
        <div className="card-body">
          <textarea
            name="comment"
            className="form-control"
            placeholder="Add a comment"
            onChange={(event) => setComment(event.target.value)}
            value={comment}
          >
            {" "}
          </textarea>
        </div>
      </div>

      <div>
        <button
          className="btn btn-primary mr-3"
          onClick={(event) => {
            handleCommentSubmit(comment);
            setComment("");
          }}
        >
          Comment
        </button>
      </div>
    </div>
  );
}

export default CommentBox;
