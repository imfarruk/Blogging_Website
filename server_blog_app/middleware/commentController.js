import Comment from "../model/commentSchema.js";

export const newComment = async (req, res) => {
  try {
    const {comments} = req.body;
    if(!comments){
      return res.status(422).json({message:"Please write comment"});
    }
    const comment = await new Comment(req.body);
    comment.save();
    console.log("data save");
    res.status(200).json({message:"Comment saved Successfully"});
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getComment = async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.id });
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteComment=async(req,res)=>{
  try{
    console.log(req.params.id);
    const comment=await Comment.findById(req.params.id);
    console.log(comment);
    await comment.delete();
    res.status(200).json('Comment deleted');
  }catch(error){
    res.status(500).json(error);
  }
}
