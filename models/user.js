const Bottle = require("./bottle.js");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: DataTypes.STRING
  });

  User.associate = db => {
    User.hasMany(db.Bottle, { as: "Bottle" });
  };

  return User;
};
