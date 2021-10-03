import React, { Component } from "react";
import Styled from "styled-components";

// function Comment(props) {
//   return (
//     <ul className="comments-list">
//       {props.commentLine.map((e) => {
//         return (
//           <li className="each-comment" key={e.commentId}>
//             {e.text}
//           </li>
//         );
//       })}
//     </ul>
//   );
// }

// export default Comment;

const CommentBody = Styled.div`



background: #e5e5e5;
padding: 1.5em;
border-bottom: 2px solid grey;
margin-bottom: 1.5em;


`;

class Comment extends Component {
  render() {
    const { body } = this.props;
    return <CommentBody> {body} </CommentBody>;
  }
}

export default Comment;
