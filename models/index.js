const { Model, Datatypes } = require("sequelize");
const sequelize = require("../config/connection");

class  extends Model {}

Blog.init(
  {
    id: {
      type: Datatypes.INTERGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Datatypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "blog",
  }
);

module.exports = Gallery;
