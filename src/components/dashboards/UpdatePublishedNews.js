import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../../actions/posts";
import Swal from "sweetalert2";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {
  EditorState,
  convertToRaw,
  ContentState,
  convertFromHTML,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
// import htmlToDraft from "html-to-draftjs";

import styled from "styled-components";
// import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";
// import { CircularProgress } from "@material-ui/core";
// import parse from "html-react-parser";

const Editorbar = styled.div`
  align-items: center;
  background: #fff;
  height: 500px;
  overflow-y: scroll;
`;

const baseURL = "https://api-good-news.herokuapp.com/api";

// function getQuery() {
//   let search = window.location.search;
//   let params = new URLSearchParams(search);
//   // let foo = parseInt(params.get('id'))
//   let foo = params.get("id");
//   return foo;
// }

function UpdatePublishedNews({ currentId, setCurrentId }) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    currentId ? state.posts.find((post) => post._id === currentId) : null
  );
  //   const [text, setText] = useState("");
  const [categories, setCategories] = useState(null);
  // const [post, setPost] = useState(null);

  // if (post) {
  //   const blocksFromHtml = htmlToDraft(post.content);
  //   const { contentBlocks, entityMap } = blocksFromHtml;
  //   const contentState = ContentState.createFromBlockArray(
  //     contentBlocks,
  //     entityMap
  //   );

  //   setEditorState(EditorState.createWithContent(contentState));
  // }

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    nameOfAuthor: "",
    imageUrl: "",
    content: "",
  });

  useEffect(() => {
    if (post) {
      setFormData(post);
      setEditorState(
        EditorState.createWithContent(
          ContentState.createFromBlockArray(
            convertFromHTML(`<p>${formData.content}</p>`)
          )
        )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post]);

  console.log(formData.content);

  useEffect(() => {
    axios.get(`${baseURL}/categories/all`).then((response) => {
      setCategories(response.data);
    });
  }, []);

  const onEditorStateChange = (editorState) => {
    setFormData({
      ...formData,
      content: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
    return setEditorState(editorState);
  };

  function clear() {
    setCurrentId(0);
    setFormData({
      nameOfAuthor: "",
      title: "",
      content: "",
      category: "",
      description: "",
      imageUrl: "",
    });
  }

  async function handleUpdateNews(e) {
    e.preventDefault();

    if (currentId !== 0) {
      dispatch(updatePost(currentId, formData));
      Swal.fire("Article Updated Succesfully");
    }
    clear();
  }

  return (
    <>
      {/* <DashboardNavbar /> */}
      <div>
        <h2> Edit News </h2>
        {!post ? (
          <></>
        ) : (
          <div className="d-flex flex-column align-items-center">
            <section className="d-flex flex-row container justify-content-between mb-3 w-100">
              <div className="pe-2 w-30">
                <label> Title </label>
                <input
                  className="form-control"
                  type="text"
                  id="id"
                  placeholder="News title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />
              </div>

              <div className="pe-2 w-30">
                <label> Thumbnail URL </label>
                <input
                  className="form-control"
                  type="text"
                  value={formData.imageUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, imageUrl: e.target.value })
                  }
                />
              </div>

              <div className="w-40">
                <label> Categories </label>
                <select
                  className="form-control"
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                >
                  <option value={post.category._id}>
                    {post.category.title}
                  </option>
                  {categories.data.map((cat) => (
                    <option value={cat._id}>{cat.title}</option>
                  ))}
                </select>
              </div>
            </section>

            <section>
              <div className="contain">
                <label> Description </label>
                <textarea
                  className="form-control"
                  type="text"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                ></textarea>
                <label> Name Of Author </label>
                <input
                  className="form-control"
                  type="text"
                  value={formData.nameOfAuthor}
                  onChange={(e) =>
                    setFormData({ ...formData, nameOfAuthor: e.target.value })
                  }
                />
              </div>
            </section>

            <section className="container w-100">
              <Editorbar className="editor">
                <Editor
                  editorState={editorState}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  onEditorStateChange={onEditorStateChange}
                  value="textxss"
                  // onContentStateChange={onEditorStateChange}
                />
              </Editorbar>
            </section>

            {/* <div className="editor container p-5">
          <CKEditor
            editor={ClassicEditor}
            data={text}
            onChange={(event, editor) => {
              const data = editor.getData();
              setText(data);
            }}
          />
        </div> */}
            <div className="w-100 container mt-3 mb-3">
              <button
                className="w-100 btn btn-primary"
                onClick={handleUpdateNews}
              >
                {" "}
                Update News{" "}
              </button>
            </div>
            {/* <div>
          <p>{parse(text)}</p>
        </div> */}
          </div>
        )}
      </div>
    </>
  );
}

export default UpdatePublishedNews;
