import React, { useState } from "react";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import styled from "styled-components";

// import parse from "html-react-parser";

const Editorbar = styled.div`
  align-items: center;
  background: #fff;
  height: 300px;
`;

function Publishnews() {
  //   const [text, setText] = useState("");

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    return setEditorState(editorState);
  };

  return (
    <div>
      <h2> Create News </h2>

      <div className="d-flex flex-column align-items-center">
        <section className="d-flex flex-row container justify-content-between mb-3 w-100">
          <div className="pe-2 w-30">
            <label> Title </label>
            <input
              className="form-control"
              type="text"
              placeholder="News title"
            />
          </div>

          <div className="pe-2 w-30">
            <label> Thumbnail </label>
            <input className="form-control" type="file" />
          </div>

          <div className="w-40">
            <label> Categories </label>
            <select className="form-control">
              <option>Topstories</option>
              <option>Technology</option>
              <option>Fashion</option>
              <option>BusinessFinance</option>
              <option>Sport</option>
              <option>Entertainments</option>
              <option>Greater lagos</option>
            </select>
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
          <button className="w-100 btn btn-primary"> Publish </button>
        </div>
        {/* <div>
          <p>{parse(text)}</p>
        </div> */}
      </div>
    </div>
  );
}

export default Publishnews;
