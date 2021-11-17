import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "./FetchNews.css";
import { Button } from "react-bootstrap";
import axios from "axios";

import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";

import Swal from "sweetalert2";

function FetchNews(props) {
  const [categories, setCategories] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://api-good-news.herokuapp.com/api/categories/all")
      .then((response) => {
        setCategories(response.data);
      });
  }, []);

  function handlePublish(e) {
    console.log(e.data);
    console.log(categories);
    let newsData = {
      nameOfAuthor: "Good News",
      content: e.data.summary,
      title: e.data.title,
      description: e.data.summary,
      imageUrl: e.data.media,
    };

    // let categories = [
    //   { id: "1", title: "hello" },
    //   { id: "2", title: "hey" },
    //   { id: "3", title: "hi" },
    // ];
    let data = [];

    for (let i = 0; i < categories.data.length; i++) {
      data.push(categories.data[i].title);
    }
    Swal.fire({
      title: "Select Category to publish the news",
      input: "select",
      inputOptions: data,
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Look up",
      showLoaderOnConfirm: true,
      preConfirm: (e) => {
        console.log(e);
        let option = parseInt(e);

        let category = categories.data[option];

        newsData.category = category._id;
        console.log(newsData);
        console.log(category);
        // return fetch("/api", newsData)
        //   .then((response) => {
        //     if (!response.ok) {
        //       throw new Error(response.statusText);
        //     }
        //     console.log(response);
        //     return response.json();
        //   })
        //   .catch((error) => {
        //     Swal.showValidationMessage(`Request failed: ${error}`);
        //   });
        return dispatch(createPost(newsData));
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "New post created",
          text: "It was successful",
        });
      }
    });
  }

  return (
    <div>
      <section className="p-3 mt-2 fetchnews">
        <div className="col-12">
          <img className="" src={props.data.media} alt="" />{" "}
        </div>
        <div
        //   onClick={() =>
        //     setTimeout(() => {
        //       window.location.replace(props.url);
        //       //   window.history.go(props.url);
        //     }, 2000)
        //   }
        >
          <a href={props.data.link} target="_blank" rel="noreferrer">
            <h2>{props.data.title}</h2>{" "}
          </a>
        </div>
      </section>

      <Button
        onClick={() => handlePublish(props)}
        variant="success"
        size="medium"
      >
        {" "}
        Publish News{" "}
      </Button>
    </div>
  );
}

export default FetchNews;
