import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

// News Components
import Newscard from "../components/NewsCard";

// bootsrapt css
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "../components/Form/Form";

const baseURL = "https://api-good-news.herokuapp.com/api";

const classes = makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
}));

function TopNews() {
  // const [post, setPost] = React.useState(null);
  const posts = useSelector((state) => state.posts)
  console.log(posts)

  let data = posts[0];
 

  // useEffect(() => {
  //   axios.get(`${baseURL}/posts/top-posts`).then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);

  // if (!post) return null;

  // console.log(post);

  // let data = post.data;

  return (
    <><div className=" container mt-5">

      <section className="container d-flex flex-wrap">
        {/* {data.map((news) => (
      <div className="col-12 col-md-6 col-lg-4 p-1">
        <Newscard
          title={news.title}
          name={news.nameOfAuthor}
          imagesrc={news.imageUrl}
          description={news.description.slice(0, 150)}
          url={"/post?id=" + news._id}
          likes={news.numberOfLikes}
          views={news.numberOfViews}
          comment={news.comments.length}
          postId={news._id}
          baseURL={baseURL}
        />
      </div>
    ))} */}
      </section>
      {!data.length ? <CircularProgress /> : (
        <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
          {data.map((news) => (
            <Grid key={news._id} item xs={12} sm={6}>
              <Newscard
                title={news.title}
                name={news.nameOfAuthor}
                imagesrc={news.imageUrl}
                description={news.description.slice(0, 150)}
                url={"/post?id=" + news._id}
                likes={news.numberOfLikes}
                views={news.numberOfViews}
                comment={news.comments.length}
                postId={news._id}
                baseURL={baseURL} />
            </Grid>
          ))}
        </Grid>
      )}
    </div><Form /></>
  );
}

export default TopNews;
