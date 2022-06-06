import Post from "../model/userSchema.js";

export const createPost = async (request, response) => {
  const { title, description } = request.body;
  if (!title || !description) {
    return response.status(422).json("Please fill data");
  }
  try {
    const post = await new Post(request.body);
    post.save();
    response.status(200).json("Post saved successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};

export const updatePost = async (request, response) => {
  try {
    await Post.findByIdAndUpdate(request.params.id, { $set: request.body });
    response.status(200).json("Blog updated successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};

export const deletePost = async (request, response) => {
  try {
    const post = await Post.findById(request.params.id);
    await post.delete();
    response.status(200).json("post deleted successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getPost = async (request, response) => {
  try {
    const post = await Post.findById(request.params.id);
    response.status(200).json(post);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getAllPosts = async (request, response) => {
  let category = request.query.category;
  let posts;
  try {
    if(category){
      posts=await Post.find({categories:category});
    }
    else {
      posts = await Post.find({});
    }
    response.status(200).json(posts);
  } catch (error) {
    response.status(500).json(error);
  }
};
