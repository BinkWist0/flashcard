'use strict';
const { Model } = require('sequelize');
const theme = require('./theme');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Theme }) {
      this.belongsTo(Theme, { foreignKey: 'theme_id' });
    }
  }
  Question.init(
    {
      quest: {
        type: DataTypes.TEXT,
      },
      answer: {
        type: DataTypes.TEXT,
      },
      img: {
        type: DataTypes.TEXT,
      },
      theme_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Themes',
          key: 'id',
        },
        onDelete: 'cascade',
      },
    },
    {
      sequelize,
      modelName: 'Question',
    }
  );
  return Question;
};
