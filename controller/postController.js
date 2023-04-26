import Post from "../model/postSchema.js";

// create a post =>
export const createPost = async (req, res) => {
  try {
    // const post = await postSchema.create(req.body);
    const { title, body } = req.body;
    const post = new Post({
      title,
      body,
    });

    const savePost = await post.save();

    res.status(201).json({
      success: true,
      post: savePost,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// get all post
export const getAllPost = async (req, res) => {
  try {
    const post = await Post.find({});
    if (post.length == 0) {
      res.status(404).json({
        success: false,
        message: "Post Not Found",
      });
    }

    res.status(200).json({
      success: true,
      post,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
