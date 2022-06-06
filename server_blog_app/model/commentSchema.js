import mongoose from "mongoose";
const CommentSchema = mongoose.Schema({
  // name: {
  //   type: String,
  //   required: true,
  // },
  postId: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  comments: {
    type: String,
  },
});

const Comment = mongoose.model("comment", CommentSchema);

export default Comment;
