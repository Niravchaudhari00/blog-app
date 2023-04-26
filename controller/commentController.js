import Comment from "../model/commentSchema.js";
import Post from "../model/postSchema.js";

// create a comment
export const createComment = async (req, res) => {
       try {
              const { body, post, user } = req.body;
              const commnet = await Comment.create({
                     body, post, user
              });

       const updatePost = await Post.findByIdAndUpdate(post, { $push: { comments: commnet._id } }, { new: true }).populate("comments").exec();

              res.json({
                     post: updatePost
              })

       } catch (error) {
              res.status(500).json({
                     success: true,
                     message: error.message
              })
       }
};
