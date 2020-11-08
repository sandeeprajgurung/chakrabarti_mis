module.exports = (sequelize, Sequelize) => {
  const SECONDYEAR_HUMANRIGHTS = sequelize.define("SECONDYEAR_HUMANRIGHTS", {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    FEMINIST_JURISPRUDENCE: {
      type: Sequelize.STRING
    },
    WOMEN_HUMAN_RIGHT: {
      type: Sequelize.STRING
    },
    ECONOMIC_SOCIAL_CULTURE: {
      type: Sequelize.STRING
    },
    DISSERTATION: {
      type: Sequelize.STRING
    }
  },
    {
      timestamps: false,
      freezeTableName: true
    });

  return SECONDYEAR_HUMANRIGHTS;
};