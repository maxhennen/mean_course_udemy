const express = require("express");

const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");

const router = express.Router();

const postController = require('../controller/posts');

router.post(
  "",
  checkAuth,
  extractFile,
  postController.createPost);

router.put(
  "/:id",
  checkAuth,
  extractFile,
  postController.updatePost);

router.get("", postController.getPosts);

router.get("/:id", postController.getPostById);

router.delete("/:id", checkAuth, postController.deletePost);

module.exports = router;
