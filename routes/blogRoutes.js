import { createComment } from "../controller/commentController.js";
import { dislikePost, likePost } from "../controller/likeController.js";
import { createPost, getAllPost } from "../controller/postController.js";
import { Router } from "express";

const router = Router();

// get and post routes
router.get("/post", getAllPost);
router.post("/post/create", createPost);

// like and dislike routes
router.post("/post/like", likePost);
router.post("/post/dislike", dislikePost);

// create comment
router.post("/post/comment", createComment);

export default router;
