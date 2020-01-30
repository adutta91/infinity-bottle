module.exports = (sequelize, DataTypes) => {
  const Addition = sequelize.define("Addition", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true }
  });

  Addition.associate = db => {
    Addition.belongsTo(db.Bottle, { as: "Bottle" });
    Addition.belongsTo(db.Whiskey, { as: "Whiskey" });
  };

  return Addition;
};
