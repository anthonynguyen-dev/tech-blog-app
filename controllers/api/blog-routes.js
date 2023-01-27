const router = require("express").Router();
const { Blog } = require("../../models/Blog");

const { Blog } = require("../../models");

router.post("/", async (req, res) => {
  const blogData = await Blog.create(req.body);

  return res.json(blogData);
});

router.put("/:id", async (req, res) => {
  try {
    const blogData = await Blog.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (blogData[0]) {
      res.status(404).json({ message: "No blog with this id!" });
      return;
    }
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!blogData) {
      res.status(404).json({ message: "No user with this id" });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
