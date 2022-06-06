import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Delete, Edit } from "@mui/icons-material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getPost, deletePost } from "../../service/api.js";

//components
import Comment from "../comment/comment";

const useStyle = makeStyles((theme) => ({
  container: {
    margin: "50px 100px",
    // [theme.breakpoints.down("md")]: {
    //   margin: 0,
    // },
  },
  image: {
    width: "100%",
    height: "50vh",
    objectFit: "cover",
  },
  icons: {
    float: "right",
  },
  icon: {
    margin: 5,
    padding: 5,
    border: "1px solid #878787",
    cursor:'pointer',
    borderRadius: 10,
  },
  heading: {
    fontSize: 22,
    fontWeight: 700,
    textAlign: "center",
    margin: "50px 0 10px 0",
  },
  author: {
    color: "#878787",
    display: "flex",
    margin: "20px 0",
    // [theme.breakpoints.down("sm")]: {
    //   display: "block",
    // },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  description:{
    textTransform: "capitalize",
  }
}));

const DetailView = () => {
  const classes = useStyle();
  const url = "/images/blog.jpg";
  const { id } = useParams();
  const navigation = useNavigate();

  const [post, setPost] = useState([]);

  const fetchData = async () => {
    const data = await fetch(`http://localhost:4000/post/${id}`);
    const res=await data.json();
    setPost(res);
    console.log(res,"data");
  }
  useEffect(() => {
    // const fetchData = async () => {
    //   let data = await getPost(id);
    //   console.log(data,"data");
      // setPost(data); 
    fetchData();
  },[]);

  const deleteBlog = async () => {
    await deletePost(post._id);
    navigation("/");
  };
  
  return (
    <Box className={classes.container}>
      <img src={url} alt="titleImag" className={classes.image} />
      <Box className={classes.icons}>
        <Link to={`/update/${post._id}`}>
          <Edit className={classes.icon} color="primary" />
        </Link>     
          <Delete
           onClick={() => deleteBlog()}
            className={classes.icon}
            color="error"
          />
      </Box>
      <Typography className={classes.heading}><span className={classes.heading}>{post.title}</span></Typography>
      <Box className={classes.author}>
        <Link to={`/?category=${post.categories}`} className={classes.link}>
        <Typography>
          Categories: <span style={{ fontWeight: 600 }}>{post.categories}</span>        
        </Typography>
        </Link>
        <Typography style={{ marginLeft: "auto" }}>
          {new Date(post.createdDate).toDateString()}
        </Typography>
      </Box>
      <Typography >{post.description}</Typography>
      <Comment post={post} />
    </Box>   
  );
};

export default DetailView;
