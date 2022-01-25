import React, { useEffect, useState } from "react";
import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";
import FetchNews from "./FetchNews";
import axios from "axios";
import { Button } from "react-bootstrap";

const keywords =
  "Good news Nigeria" +
  "Good news Lagos" +
  "Positive Nigerian news" +
  "Positive news Lagos" +
  "Nigeria good stories" +
  "Nigerians making impact around the world " +
  " Nigerians in the diaspora making waves " +
  "Nigerians making impact";

// import { CircularProgress } from "@material-ui/core";

function Newsfeed() {
  const user = JSON.parse(localStorage.getItem("profile"));
  const [getNews, setGetNews] = useState(null);
  const [loadNews, setLoadNews] = useState(getNews);
  // const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://newscatcher.p.rapidapi.com/v1/search_free",
      params: { q: `${keywords}`, lang: "en", media: "True" },
      headers: {
        "x-rapidapi-host": "newscatcher.p.rapidapi.com",
        "x-rapidapi-key": "78bf95013fmsh55c60620a15fb9dp10fddcjsn6f4b315f827c",
      },
    };

    axios.request(options).then((response) => {
      setGetNews(response.data);
      console.log(response.data);
    });
  }, []);

  // Fetch and display articles on button click
  const HandleNewsFetch = () => {
    setLoadNews(getNews);
  };

  function redirect() {
    localStorage.clear();
    window.location.replace("/authsignin");
  }

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
      <div>
        <DashboardNavbar />
        <div className="d-flex flex-row justify-content-between">
          <div className="w-25">
            <DashboardSidebar />
          </div>
          <section className="w-75">
            <main className="container mt-5">
              <button
                onClick={HandleNewsFetch}
                className="btn btn-success w-100"
              >
                {" "}
                Fetch News{" "}
              </button>
            </main>

            <main className="">
              <div className="d-flex flex-wrap">
                {!loadNews ? (
                  <></>
                ) : (
                  loadNews.articles.map((article, index) => (
                    <div className="col-12 col-md-4">
                      <FetchNews
                        data={article}
                        key={index}
                        // Title={article.title}
                        // Imagesrc={article.urlToImage}
                        // url={article.url}
                      />
                    </div>
                  ))
                )}
              </div>
              {/* {!loadNews ? (
                <></>
              ) : (
                <Button onClick={HandLoadMore}>Loadmore</Button>
              )} */}
            </main>
          </section>
        </div>
      </div>
    );
  }
}

export default Newsfeed;
