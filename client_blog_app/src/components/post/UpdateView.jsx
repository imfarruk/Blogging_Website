import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  makeStyles,
  Box,
  Button,
  FormControl,
  InputBase,
  TextareaAutosize,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { AddCircle, Send, Update } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import { getPost, updatePost, uploadFile } from "../../service/api.js";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0 100px",
    [theme.breakpoints.down("sm")]: {
      padding: "0 10px",
    },
  },
  imageStyle: {
    width: "100%",
    height: 300,
    boxShadow: "2px 4px 14px",
    ObjectFit: "cover",
  },
  form: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
  },
  addCircle: {
    boxShadow: "2px 4px 14px",
    borderRadius: "50%",
  },
  textField: {
    flex: 1,
    paddingLeft: 20,
  },
  btn: {
    background: "green",
    width: 120,
    display: "flex",
    justifyContent: "space-around",
    marginLeft: 10,
  },
  textarea: {
    width: "100%",
    marginTop: 50,
    marginBottom: 50,
    textTransform: "capitalize",
    border: "1px solid black",
    textIndent: 10,
    paddingTop: 10,
    fontSize: 18,
    "&:focus-visible": {
      outline: "none",
    },
  },
}));
const UpdateView = () => {
  const classes = useStyles();
  let { id } = useParams();
  let navigate = useNavigate();
  const initialValues = {
    title: "",
    description: "",
    picture: "",
    username: "imfarruk",
    categories: "All",
    createDate: new Date(),
  };
  const imgUrl = "/images/blog.jpg";
  const [post, setPost] = useState({initialValues});

  useEffect(() => {
    const fetchData = async () => {
      let res = await getPost(id);
      console.log(res.data,'data');
      setPost({...post,title:res.data.title,description:res.data.description});
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const updatedata = async (e) => {
    await updatePost(id, post);
    navigate(`/details/${id}`);
  };
  return (
    <>
      <Box className={classes.container}>
        <img
          src={imgUrl}
          alt="create"
          className={classes.imageStyle}
        />
        <FormControl className={classes.form}>
          
          <InputBase
            value={post.title}
            name="title"
            onChange={(e) => handleChange(e)}
            className={classes.textField}
            placeholder="Title"
          />
          <Button
            onClick={() => updatedata()}
            className={classes.btn}
            variant="contained"
            color="secondary"
          >
            Update <Update />
          </Button>
        </FormControl>
        <TextareaAutosize
          name="description"
          onChange={(e) => handleChange(e)}
          value={post.description}
          className={classes.textarea}
          placeholder="Tell Your Story"
          rowsMin={5}
        />
      </Box>
    </>
  );
};

export default UpdateView;
