import React, { useEffect, useState } from "react";
import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";
import FetchNews from "./FetchNews";
import axios from "axios";

import { CircularProgress } from "@material-ui/core";

function Newsfeed() {
  const [getNews, setGetNews] = useState(null);
  const [loadNews, setLoadNews] = useState(getNews);

  useEffect(() => {
    axios
      .get(
        // "https://newsapi.org/v2/everything?q=Good News&from=2021-10-28&to=2021-10-28&sortBy=publishedAt&pageSize=50&page=1&apiKey=60d1c163741e4400b34162d265f80fc9"
        "https://newsapi.org/v2/top-headlines?country=ng&apiKey=60d1c163741e4400b34162d265f80fc9"
      )
      .then((response) => {
        setGetNews(response.data);
        console.log(response.data.articles);
      });
  }, []);

  const HandleNewsFetch = () => {
    setLoadNews(getNews);
  };

  return (
    <div>
      <DashboardNavbar />
      <div className="d-flex flex-row">
        <DashboardSidebar className="w-25" />
        <section className="w-75">
          <main className="container mt-5">
            <button onClick={HandleNewsFetch} className="btn btn-success w-100">
              {" "}
              Fetch News{" "}
            </button>
          </main>

          <main className="">
            <div className="d-flex flex-wrap">
              {!loadNews ? (
                <CircularProgress />
              ) : (
                loadNews.articles.map((article, index) => (
                  <div className="col-12 col-md-4">
                    <FetchNews
                      data={article}
                      // key={index}
                      // Title={article.title}
                      // Imagesrc={article.urlToImage}
                      // url={article.url}
                    />
                  </div>
                ))
              )}
            </div>
          </main>
        </section>
      </div>
    </div>
  );
}

export default Newsfeed;
