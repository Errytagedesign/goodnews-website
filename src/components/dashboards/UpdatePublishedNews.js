import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../../actions/posts";
import { Button } from "react-bootstrap";
// import Swal from "sweetalert2";
import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar";

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
// import { CircularProgress } from "@mui/material";
// import parse from "html-react-parser";

const Editorbar = styled.div`
  align-items: center;
  background: #fff;
  height: 500px;
  overflow-y: scroll;
`;

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  padding: 1em;
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  background: var(--main-color);
  width: 80%;
  margin-top: 2em;
  border-radius: 15px;
  &:hover {
    background: var(--pry-color);
    box-shadow: 1px 2px 3px 1.5px #c1c1c1;
  }

  @media screen and (max-width: 500px) {
    font-size: 0.5rem;
  }
`;

const baseURL = "https://goodnews-ng.herokuapp.com/api";

// function getQuery() {
//   let search = window.location.search;
//   let params = new URLSearchParams(search);
//   // let foo = parseInt(params.get('id'))
//   let foo = params.get("id");
//   return foo;
// }

function UpdatePublishedNews({ currentId, setCurrentId }) {
  const user = JSON.parse(localStorage.getItem("profile"));
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

  // Update article image by uploading new one
  const [artcileThumb, setArtcileThumb] = useState();
  const HandleUpdateImage = (e) => {
    const files = e.target.files[0];

    const uploadData = new FormData();
    uploadData.append("file", files);
    uploadData.append("upload_preset", "gztyasbe");

    axios
      .post(
        "https://api.cloudinary.com/v1_1/dmsyfdo0y/image/upload",
        uploadData
      )
      .then((response) => {
        setFormData({ ...formData, imageUrl: response.data.secure_url });
        setArtcileThumb(response.data.secure_url);
      });
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
      // Swal.fire("Article Updated Succesfully");
    }
    clear();
  }

  const redirect = () => {
    localStorage.clear();
    window.location.replace("/authsignin");
  };

  if (!user) {
    return (
      <>
        <DashboardNavbar />
        <div>
          <br /> <br />
          <h2>You are not an Admin, Login as an Admin to access this Page</h2>
          <h2>
            Click this <Button onClick={redirect}>Link </Button> to go to Login
            Page
          </h2>
        </div>
      </>
    );
  }
  //

  if (user.token.length > 500) {
    return (
      <>
        <DashboardNavbar />
        <div>
          <br /> <br />
          <h2>You are not an Admin, Login as an Admin to access this Page</h2>
          <h2>
            Click this <Button onClick={redirect}>Link </Button> to go to Login
            Page
          </h2>
        </div>
      </>
    );
  }

  if (user.result.role.toLowerCase() !== "admin") {
    return (
      <>
        <DashboardNavbar />
        <div>
          <br /> <br />
          <h2>You are not an Admin, Login as an Admin to access this Page</h2>
          <h2>
            Click this <Button onClick={redirect}>Link </Button> to go to Login
            Page
          </h2>
        </div>
      </>
    );
  } else {
    return (
      <>
        {/* <DashboardNavbar /> */}
        <div>
          {!post ? (
            <></>
          ) : (
            <>
              <h2> Edit News </h2>
              <div className="d-flex flex-column align-items-center">
                <section className="d-flex flex-row container justify-content-between mb-3 w-100">
                  <div className="pe-2 w-50">
                    <label className="mb-2"> Title </label>
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

                  <div className="w-40">
                    <label className="mb-2"> Categories </label>
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
                  <div className="w-40">
                    <label className="mb-2"> Name Of Author </label>
                    <input
                      className="form-control"
                      type="text"
                      value={formData.nameOfAuthor}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          nameOfAuthor: e.target.value,
                        })
                      }
                    />
                  </div>
                </section>

                <section className="col-12">
                  <div className="contain ">
                    <label className="mb-2"> Description </label>
                    <textarea
                      className="form-control col-12"
                      width=""
                      type="text"
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>
                </section>
                <section>
                  <div className=" w-30">
                    <Label htmlFor="file"> Thumbnail URL </Label>
                    <Input
                      className="form-control"
                      id="file"
                      type="file"
                      onChange={HandleUpdateImage}
                    />

                    <img
                      className="p-3 m-2 "
                      src={artcileThumb ? artcileThumb : formData.imageUrl}
                      alt=""
                    />
                  </div>
                </section>

                <section className="container w-100">
                  <label className="mb-3"> Article Contents </label>
                  <Editorbar className="editor">
                    <Editor
                      editorState={editorState}
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                      onEditorStateChange={onEditorStateChange}
                      value="textxss"
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
            </>
          )}
        </div>
      </>
    );
  }
}

export default UpdatePublishedNews;
