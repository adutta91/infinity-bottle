module.exports = (sequelize, DataTypes) => {
  const Bottle = sequelize.define("Bottle", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: DataTypes.STRING
  });

  Bottle.associate = db => {
    Bottle.belongsTo(db.User, { as: "User" });
    Bottle.hasMany(db.Note, { as: "Notes" });
  };

  return Bottle;
};
