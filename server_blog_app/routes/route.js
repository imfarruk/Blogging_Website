import express from "express";
const router = express.Router();
import {
  createPost,
  getAllPosts,
  getPost,
  deletePost,
  updatePost,
} from "../middleware/controller.js";
import { newComment, getComment,deleteComment } from "../middleware/commentController.js";
import {contactUs} from '../middleware/messageController.js';

//To create post
router.post("/create", createPost);

//to view post details
router.get("/posts", getAllPosts);
router.get("/post/:id", getPost);

//to update and delete particular post
router.post("/update/:id", updatePost);
router.delete("/delete/:id", deletePost);

// to create and delete comment
router.post("/comment/new", newComment);
router.get("/comment/:id", getComment);
router.delete('/comment/delete/:id',deleteComment);

// for Contact 
router.post("/contact",contactUs)
export default router;
