import React, { useState, useEffect } from "react";
import { Box, Button, TextareaAutosize } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { newComment, getComment } from "../../service/api";
import Comments from "./getComment";

const useStyles = makeStyles({
  container: {
    display: "flex",
    marginTop: 100,
    marginBottom: 50,
  },
  imageStyle: {
    width: "70px",
    height: "70px",
  },
  textField: {
    border: "1px solid",
    width: "100%",
    margin: "0 10px",
    textTransform: "capitalize",
  },
  btn: {
    height: "50%",
  },
});

const initialValue = {
  name: "",
  postId: "",
  date: new Date(),
  comments: "",
};

export const Comment = ({ post }) => {
  const classes = useStyles();
  const url = "/images/account11.jpg";

  const [comment, setComment] = useState(initialValue);
  const [resComment, setResComment] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      let response = await getComment(post._id);
      setResComment(response);
    };
    getData();
  }, [post, toggle]);

  const handleComment = (e) => {
    setComment({
      ...comment,
      name: post.username,
      postId: post._id,
      comments: e.target.value,
    });
    setData(e.target.value);
  };

  const postComment = async () => {
    await newComment(comment);
    setData({...data,comments:""});
    // setComment("")
    setToggle((prev) => !prev);
  };
  return (
    <>
      <Box>
        <Box className={classes.container}>
          <img className={classes.imageStyle} src={url} alt="comment" />
          <TextareaAutosize
            minRows={5}
            name="comments"
            value={comment.comments}
            className={classes.textField}
            onChange={(e) => handleComment(e)}
          />
          <Button
            variant="contained"
            className={classes.btn}
            onClick={(e) => postComment(e)}
          >
            Post
          </Button>
        </Box>
        <Box>
          {resComment &&
            resComment.map((comment) => (
              <Comments comment={comment} setToggle={setToggle} />
            ))}
        </Box>
      </Box>
    </>
  );
};
export default Comment;
