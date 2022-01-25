import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
// import htmlToDraft from "html-to-draftjs";

import styled from "styled-components";
import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar";
import { CircularProgress } from "@material-ui/core";
import DashboardSidebar from "./DashboardSidebar";
import { Button } from "react-bootstrap";
// import parse from "html-react-parser";

const Editorbar = styled.div`
  align-items: center;
  background: #fff;
  height: 500px;
  border: lightGrey solid 1px;
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

function Publishnews() {
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();

  //   const [text, setText] = useState("");

  // Get data for all form fields including the wysiwyg
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    nameOfAuthor: "",
    imageUrl: "",
    content: "",
  });

  // Fetching categories into category select field
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    axios
      .get("https://api-good-news.herokuapp.com/api/categories/all")
      .then((response) => {
        setCategories(response.data);
      });
  }, []);

  // Set up for wysiwyg
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setFormData({
      ...formData,
      content: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
    return setEditorState(editorState);
  };

  // Handle Image upload for news article
  const [artcileThumb, setArtcileThumb] = useState();
  const HandleImageUpload = (e) => {
    // accessing the value of the input
    const files = e.target.files[0];

    //  getting and appending the value to send to CDN via axios.post
    const uploadData = new FormData();
    uploadData.append("file", files);
    uploadData.append("upload_preset", "gztyasbe");
    console.log(uploadData);

    axios
      .post(
        "https://api.cloudinary.com/v1_1/dmsyfdo0y/image/upload",
        uploadData
      )
      .then((response) => {
        // set the response data to state using spread operator to get other datas too
        setFormData({ ...formData, imageUrl: response.data.secure_url });

        // set response.data.secure_url to image state so as to be able to display the uploaded image
        setArtcileThumb(response.data.secure_url);

        console.log(response);
      });
  };
  // function clear() {
  //   setFormData({
  //     nameOfAuthor: "",
  //     title: "",
  //     content: "",
  //     category: "",
  //     description: "",
  //     imageUrl: "",
  //   });
  // }

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost(formData));
    // console.log(formData);

    // setTimeout(() => {
    //   Swal.fire("Article Created Succesfully");
    // }, 3000);
    // clear();
  };

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
        <DashboardNavbar />
        <div className="d-flex flex-row">
          <DashboardSidebar className="w-25" />
          <div className="w-75 mt-5 ">
            <div>
              <h2 className="mb-3"> Create News </h2>
              {!categories ? (
                <CircularProgress />
              ) : (
                <div className=" container d-flex flex-column align-items-center">
                  <section className="d-flex flex-column flex-md-row flex-wrap container justify-content-between mb-3 col-12">
                    <div className="pe-2 mt-1 col-12 col-md-6">
                      <label className="mb-2"> Title </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="News title"
                        onChange={(e) =>
                          setFormData({ ...formData, title: e.target.value })
                        }
                      />
                    </div>

                    <div className="pe-2 mt-1 col-12 col-md-6">
                      <Label htmlFor="file" className="mb-2">
                        {" "}
                        Thumbnail URL{" "}
                      </Label>
                      <Input
                        id="file"
                        className="form-control"
                        placeholder="Image url"
                        type="file"
                        onChange={HandleImageUpload}
                      />

                      <img src={artcileThumb} alt="" />
                    </div>

                    <div className=" pe-2 col-12 mt-1 col-md-6">
                      <label className="mb-2"> Categories </label>
                      <select
                        className="form-control"
                        onChange={(e) =>
                          setFormData({ ...formData, category: e.target.value })
                        }
                      >
                        <option> Select Category </option>
                        {categories.data.map((cat) => (
                          <option value={cat._id}>{cat.title}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-12 mt-1 col-md-6">
                      <label className="mb-2"> Name Of Author </label>
                      <input
                        placeholder="author name"
                        className="form-control"
                        type="text"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            nameOfAuthor: e.target.value,
                          })
                        }
                      />
                    </div>
                  </section>

                  <section className=" container col-12">
                    <div className="mt-3 mb-3">
                      <label className="mb-2"> Description </label>
                      <textarea
                        className="form-control w-100"
                        placeholder="Article descriptions"
                        type="text"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            description: e.target.value,
                          })
                        }
                      ></textarea>
                    </div>
                  </section>

                  <section className="container col-12">
                    <label className="mb-3"> Article Contents </label>
                    <Editorbar className="editor">
                      <Editor
                        editorState={editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onEditorStateChange={onEditorStateChange}
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
                  <div className="col-12 container mt-3 mb-3">
                    <button
                      className="col-12 btn btn-primary"
                      onClick={handleSubmit}
                    >
                      {" "}
                      Publish{" "}
                    </button>
                  </div>
                  {/* <div>
          <p>{parse(text)}</p>
        </div> */}
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Publishnews;
