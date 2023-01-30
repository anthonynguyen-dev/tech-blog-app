const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");

const userData = require("./userSeed.json");

const seedDB = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
  });

  for (const post of postData) {
    await Post.create({});
  }
  process.exit(0);
};

seedDB();
