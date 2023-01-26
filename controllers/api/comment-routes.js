// const router = require("express").Router();
// const { Comment } = require("../../models/Comment");

const { Comment } = require("../../models");

router.post("/", async (req, res) => {
  const commentData = await Comment.create(req.body);

  return res.json(commentData);
});
