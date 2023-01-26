// const router = require("express").Router();
// const { Blog } = require("../../models/Blog");

const { Blog } = require("../../models");

router.post("/", async (req, res) => {
  const blogData = await Blog.create(req.body);

  return res.json(blogData);
});
