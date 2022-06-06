import React from "react";
import { Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Delete } from "@mui/icons-material";
import { deleteComment } from "../../service/api.js";
const useStyles = makeStyles({
  component: {
    marginTop: 20,
    background: "maroon",
    padding: 10,
    marginBottom: 20,
  },
  container: {
    display: "flex",
    marginBottom: 5,
    justifyContent: "space-between",
    color: "yellow",
  },
  nameStyle: {
    fontSize: 18,
    fontWeight: 600,
    marginLeft: 10,
  },
  dateStyle: {
    color: "#878787",
    
  },
  deleteStyle: {
    cursor:'pointer',
  },
  commentStyle: {
    color: "white",
    textTransform: "capitalize",
  },
});
const Comments = ({ comment, setToggle }) => {
  const classes = useStyles();

  const removeComment = async () => {
    await deleteComment(comment._id);
    setToggle((prev) => !prev);
  };

  return (
    <Box className={classes.component}>
      <Box className={classes.container}>
        <Typography className={classes.nameStyle}>{comment.name}</Typography>
        <Typography className={classes.dateStyle}>
          {new Date(comment.date).toDateString()}
        </Typography>
        <Delete
          className={classes.deleteStyle}
          onClick={()=> removeComment()}
        />
      </Box>
      <Typography className={classes.commentStyle}>
        {comment.comments}
      </Typography>
    </Box>
  );
};

export default Comments;
