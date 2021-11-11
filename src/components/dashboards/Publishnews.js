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
// import parse from "html-react-parser";

const Editorbar = styled.div`
  align-items: center;
  background: #fff;
  height: 500px;
  overflow-y: scroll;
`;

function Publishnews() {
  const dispatch = useDispatch();

  //   const [text, setText] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    nameOfAuthor: "",
    imageUrl: "",
    content: "",
  });

  const [categories, setCategories] = useState(null);

  useEffect(() => {
    axios
      .get("https://api-good-news.herokuapp.com/api/categories/all")
      .then((response) => {
        setCategories(response.data);
      });
  }, []);

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setFormData({
      ...formData,
      content: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
    return setEditorState(editorState);
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

  return (
    <>
      <DashboardNavbar />
      <div className="d-flex flex-row">
        <DashboardSidebar className="w-25" />
        <div className="w-75 mt-5 ">
          <div>
            <h2> Create News </h2>
            {!categories ? (
              <CircularProgress />
            ) : (
              <div className="d-flex flex-column align-items-center">
                <section className="d-flex flex-row container justify-content-between mb-3 w-100">
                  <div className="pe-2 w-30">
                    <label> Title </label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="News title"
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
                      <option></option>
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
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                    ></textarea>
                    <label> Name Of Author </label>
                    <input
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

                <section className="container w-100">
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
                <div className="w-100 container mt-3 mb-3">
                  <button
                    className="w-100 btn btn-primary"
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

export default Publishnews;
