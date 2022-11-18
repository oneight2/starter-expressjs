"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pokemon.init(
    {
      name: { type: DataTypes.TEXT, allowNull: false },
      strength: DataTypes.TEXT,
      profile: DataTypes.JSON,
      active: DataTypes.BOOLEAN,
      createdBy: DataTypes.JSON,
      updatedBy: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "Pokemon",
    }
  );
  return Pokemon;
};
