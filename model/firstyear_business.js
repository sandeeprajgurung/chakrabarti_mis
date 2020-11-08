module.exports = (sequelize, Sequelize) => {
  const FIRSTYEAR_BUSINESS = sequelize.define("FIRSTYEAR_BUSINESS", {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    LEGAL_RESEARCH: {
      type: Sequelize.STRING
    },
    COMPARATIVE_STUDY: {
      type: Sequelize.STRING
    },
    CONTRACT_LAW: {
      type: Sequelize.STRING
    },
    INTELLECTUAL_PROPERTY: {
      type: Sequelize.STRING
    }
  },
    {
      timestamps: false,
      freezeTableName: true
    });

  return FIRSTYEAR_BUSINESS;
};