
import React, { useEffect, useState } from "react";
import { Grid, Box } from "@material-ui/core";
import { Link, useLocation,useSearchParams } from "react-router-dom";

import { getAllPosts } from "../../service/api";
import Post from "./Post.jsx";

const Posts = () => {
  const [posts, getPosts] = useState([]);
  const [searchParams,setSearchParams] = useSearchParams();
  const category = searchParams.get('category');
 
  useEffect(() => {
    const fetchData = async () => {
      let data = await getAllPosts(category || " "); // params in url
   console.log(data,'getAllPost');
      getPosts(data);
      console.log(posts,'from_post');
    };
    
    fetchData();
  }, [category]);

  return (
    <>
      {posts.length ? (
        posts.map((post,i) => (
          <Grid item md={4} sm={6} xs={12} key={i}>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={`details/${post._id}`}
            >
              <Post post={post} />
            </Link>
          </Grid>
        ))
      ) : (
        <Box style={{ color: "878787", margin: "30px 80px", fontSize: 18 }}>
          No data is available for selected category
        </Box>
      )}
    </>
  );
};

export default Posts;
