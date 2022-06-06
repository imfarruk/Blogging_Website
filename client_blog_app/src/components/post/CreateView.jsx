import React, { useState, useEffect, useContext } from "react";
import { useNavigate,Link, useLocation } from "react-router-dom";
import { createPost} from "../../service/api.js";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {
  makeStyles,
  Box,
  Button,
  FormLabel,
  Grid,
  FormControl,
  InputBase,
  TextareaAutosize,
} from "@material-ui/core";
import { AddCircle, Send } from "@mui/icons-material";
import { categories } from "../../constant/data";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0 100px 20px",
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
  textField: {
    flex: 1,
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
    textIndent: 10,
    paddingTop: 10,
    fontSize: 18,
    "&:focus-visible": {
      outline: "none",
    },
  },
}));

const initialValues = {
  title: "",
  description: "",
  picture: "",
  username: "imfarruk",
  categories: "All",
  createDate: new Date(),
};

const CreateView = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const [post, setPost] = useState(initialValues);

  const url ="/images/blog.jpg";

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const savedPost = async () => {
    const data = await createPost(post);
    if (!data) {
      toast.error("Fill all column perfectly", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
      console.log("invalid data");
    } else {
      toast.success("🦄 Blog is Published Successfully..!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
      console.log("Registration Successful");
      setTimeout(() => {
        navigate("/");
      }, 2400);
    }
  };

  return (
    <>
      <Box className={classes.container}>
        <img src={url} alt="create" className={classes.imageStyle} />
        <FormControl className={classes.form}>
          

          <InputBase
            // value={post.title}
            onChange={(e) => handleChange(e)}
            name="title"
            className={classes.textField}
            placeholder="Title"
          />

          <Button
            onClick={() => savedPost()}
            className={classes.btn}
            variant="contained"
            color="secondary"
          >
            Publish <Send />
          </Button>
        </FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">
          Tag a category
        </FormLabel>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <Grid
            container
            item
            xs={10}
            sm={10}
            md={10}
            lg={10}
            style={{
              display: "flex",
              // flexDirection: "row",
            }}
          >
           
              {/* <Grid item xs={6} sm={4} md={3} lg={3}> */}
               
              <form style={{display:'flex'}}>
              { categories.map((category)=>(
                 <Grid item xs={12} sm={6} md={3} lg={4} style={{display:'flex',marginRight:15}}>
                <input type="radio" value={category} id={category}
               onChange={handleChange} name="categories" />
             <label for={category}>{category}</label>
             </Grid>
             
              ))}            
         </form>      
          </Grid>
        </Box>

        <TextareaAutosize
          // value={post.description}
          onChange={(e) => handleChange(e)}
          name="description"
          className={classes.textarea}
          minRows={5}
          placeholder="Tell Your Story"
        />
        <ToastContainer />
      </Box>
    </>
  );
};

export default CreateView;
