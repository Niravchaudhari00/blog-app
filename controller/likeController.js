import postSchema from "../model/postSchema.js";
import likeSchema from "../model/likeSchema.js";

// like post
export const likePost = async (req, res) => {
  try {
    const { user, post } = req.body;

    const like = new likeSchema({
      user,
      post,
    });

    const likeSave = await like.save();

    // updatepost
    const updatedPost = await postSchema
      .findByIdAndUpdate(
        post,
        { $push: { likes: likeSave._id } },
        { new: true }
      )
      .populate("likes")
      .exec();

    res.json({
      post: updatedPost,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

// dislike post

export const dislikePost = async (req, res) => {
  try {
    const { post, like } = req.body;

    // unlike post
    const deleteLike = await likeSchema.findOneAndDelete({
      post: post,
      _id: like,
    });

    // updated post
    const updatedPost = await postSchema.findByIdAndUpdate(
      post,
      { $pull: { likes: deleteLike._id } },
      { new: true }
    );

    res.json({
      success: true,
      message: "dislike success",
      post: updatedPost,
    });

    //
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
