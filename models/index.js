const User = require("./User");
const Blog = require("./Blog");
const Comment = require("./Comment");

Blog.hasMany(Comment, {
  foreignKey: "blog_id",
});

Comment.belongsTo(Blog, {
  foreignKey: "gallery_id",
});

module.exports = { User, Blog, Comment };
