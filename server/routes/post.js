const router = require("express").Router();
const { Model } = require("mongoose");
const Post = require("../models/Post");
const verifyToken = require("../middleware/auth");

// @route POST api/post
// @desc Create post
// @access Public
router.post("/", verifyToken, async (req, res) => {
  const { desc, image } = req.body;

  if (desc === "" && image === "") {
    return res
      .status(400)
      .json({ success: false, message: "Desc and image are empty" });
  }

  const newPost = new Post({ userId: req.userId, desc, image });
  try {
    await newPost.save();
    return res
      .status(200)
      .json({ success: true, message: "Created post successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error", error });
  }
});

// @route PUT api/post/:postId
// @desc Update post
// @access Public
router.put("/:postId", verifyToken, async (req, res) => {
  const { desc, image } = req.body;

  if (desc === "" && image === "") {
    return res
      .status(400)
      .json({ message: "Desc and image cannot be empty at the same time" });
  }

  try {
    const post = await Post.findById(req.params.postId);

    if (post.userId !== req.userId) {
      return res
        .status(400)
        .json({ success: false, message: "Please update your post" });
    }

    const updatePost = await Post.findByIdAndUpdate(req.params.postId, {
      $set: { desc, image },
    });
    return res.status(200).json({
      success: true,
      message: "Updated post successfully",
      updatePost,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error", error });
  }
});

// @route GET api/post/:postId
// @desc Get a post
// @access Public
router.get("/:postId", verifyToken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    return res
      .status(200)
      .json({ success: true, message: "Get a post successfully", post });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error", error });
  }
});

// @route DELETE api/post/:postId
// @desc Update post
// @access Public
router.delete("/:postId", verifyToken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);

    if (post.userId !== req.userId) {
      return res
        .status(400)
        .json({ success: false, message: "Please delete your post" });
    }

    const deletePost = await Post.findByIdAndDelete(req.params.postId);
    return res.status(200).json({
      success: true,
      message: "Deleted post successfully",
      deletePost,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error", error });
  }
});

module.exports = router;
