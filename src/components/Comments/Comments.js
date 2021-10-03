import React from "react";
import {
  List,
  ListItem,
  Divider,
  Typography,
  ListItemAvatar,
  ListItemText,
  Avatar,
  makeStyles,
} from "@material-ui/core";
// import SendIcon from '@icons-material/Send';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

function Comments(props) {
  const classes = useStyles();

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Username"
          secondary={
            <React.Fragment>
              <Typography
                className={classes.inline}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {props.description}
              </Typography>
              {/* {" — I'll be in your neighborhood doing errands this…"} */}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}

export default Comments;

// import React, { Component } from "react";

// import CommentBox from "./CommentBox";
// import Comment from "./Comment";
// import axios from "axios";

// const baseURL = "https://api-good-news.herokuapp.com/api";

// class Comments extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       comments: [
//         { id: 1, body: " First comment " },
//         { id: 2, body: " Second comment " },
//       ],
//     };

//     this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
//   }

//   handleCommentSubmit(data) {
//     const postData = {
//       comment: data,
//     };

//     axios.post(`${baseURL}/comments`, postData).then((response) => {
//       console.log("response", response.data);

//       let comments = this.state.comments;

//       comments.unshift({
//         id: comments.lenght + 1,
//         body: response.data.comment,
//       });

//       this.setState({ comments: comments });
//     });
//   }

//   renderComments() {
//     const { comments } = this.state;
//     return comments.map((comment) => {
//       const { id, body } = comment;

//       return <Comment key={id} body={body} />;
//     });
//   }

//   render() {
//     return (
//       <div>
//         {this.renderComments()}

//         <CommentBox handleCommentSubmit={this.handleCommentSubmit} />
//       </div>
//     );
//   }
// }

// export default Comments;
