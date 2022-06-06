import axios from "axios";

const URL = "http://localhost:4000";

export const createPost = async (post) => {
  try {
    return await axios.post(`${URL}/create`, post);
  } catch (error) {
    console.log("Error while calling createPost API:",error);
  }
};

export const getAllPosts = async (param) => {
  try {
    let response = await axios.get(`${URL}/posts/?category=${param}`);
    return response.data;
  } catch (error) {
    console.log("Error while calling getAllPosts API ", error);
  }
};

export const getPost = async (id) => {
  try {
    let response = await axios.get(`${URL}/post/${id}`);
    console.log("api-getPost");
    console.log(response);
    return response;
  } catch (error) {
    console.log("Error while calling getPost API ", error);
  }
};

export const updatePost = async (id, description) => {
  try {
    await axios.post(`${URL}/update/${id}`, description);
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (id) => {
  try {
    return await axios.delete(`${URL}/delete/${id}`);
  } catch (error) {
    console.log(error);
  }
};



export const newComment = async (comment) => {
  try {
    return await axios.post(`${URL}/comment/new/`, comment);
  } catch (err) {
    // res.status(500).json(err);
    console.log(err);
  }
};

export const getComment = async (id) => {
  try {
    let res = await axios.get(`${URL}/comment/${id}`);

    return res.data;
  } catch (err) {
    // res.status(500).json(err);
    console.log(err);
  }
};

export const deleteComment = async (id) => {
  try {
    console.log(id,'delete id')
    return await axios.delete(`${URL}/comment/delete/${id}`);
  } catch (error) {
    console.log("Error while calling deleteComments API ", error);
  }
};

export const contactUs= async(newMsg)=>{
  try{
    return await axios.post(`${URL}/contact`,newMsg);
   
  }catch(error){
    console.log("Error while calling contactUs API:",error);
  }
}
