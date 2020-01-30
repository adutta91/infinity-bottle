module.exports = (sequelize, DataTypes) => {
  const Whiskey = sequelize.define("Whiskey", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: DataTypes.STRING,
    distillery: DataTypes.STRING,
    age: DataTypes.INTEGER, // in years
    abv: DataTypes.FLOAT,
    picture: DataTypes.STRING // img url
  });

  return Whiskey;
};
