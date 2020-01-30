module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define("Note", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    text: DataTypes.TEXT
  });

  Note.associate = db => {
    Note.belongsTo(db.Bottle, { as: "Bottle" });
  };

  return Note;
};
