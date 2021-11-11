import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Typography, Paper } from "@material-ui/core";

import { createPost, updatePost } from "../../actions/posts";

import useStyles from "./styles";

// GET THE CURRENT ID OF THE POST

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    nameOfAuthor: "",
    title: "",
    content: "",
    category: "",
    description: "",
    imageUrl: "",
  });

  const post = useSelector((state) =>
    currentId ? state.posts.find((post) => post._id === currentId) : null
  );

  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  function clear() {
    setCurrentId(0);
    setPostData({
      nameOfAuthor: "",
      title: "",
      content: "",
      category: "",
      description: "",
      imageUrl: "",
    });
  }

  async function handleSubmit(e) {
    // e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
    } else {
      dispatch(updatePost(currentId, postData));
    }
    clear();
  }

  return (
    <Paper>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Editing" : "Creating"} a News
        </Typography>
        <TextField
          name="nameOfAuthor"
          variant="outlined"
          label="Name of Author"
          fullWidth
          value={postData.nameOfAuthor}
          onChange={(e) =>
            setPostData({ ...postData, nameOfAuthor: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="category"
          variant="outlined"
          label="Category"
          fullWidth
          value={postData.category.title}
          onChange={(e) =>
            setPostData({ ...postData, category: e.target.value })
          }
        />
        <TextField
          name="description"
          variant="outlined"
          label="Description"
          fullWidth
          value={postData.description}
          onChange={(e) =>
            setPostData({ ...postData, description: e.target.value })
          }
        />
        <TextField
          name="content"
          variant="outlined"
          label="Content of the News"
          fullWidth
          value={postData.content}
          onChange={(e) =>
            setPostData({ ...postData, content: e.target.value })
          }
        />
        <TextField
          name="imageUrl"
          variant="outlined"
          label="Url to the Image"
          fullWidth
          value={postData.imageUrl}
          onChange={(e) =>
            setPostData({ ...postData, imageUrl: e.target.value })
          }
        />
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="secondary"
          size="large"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
