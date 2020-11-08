const criminal = require("./fourthyear_criminal");

module.exports = (sequelize, Sequelize) => {
  const FOURTHYEAR = sequelize.define("FOURTHYEAR", {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    CLINICAL_EDUCATION: {
      type: Sequelize.STRING
    },
    ADVANCED_JURISPRUDENCE: {
      type: Sequelize.STRING
    },
    CONTRACT_LAW: {
      type: Sequelize.STRING
    },
    COMPANY_LAW: {
      type: Sequelize.STRING
    },
    ADMINISTATIVE_LAW: {
      type: Sequelize.STRING
    },
    CLINICAL_LEGAL_EDUCATION: {
      type: Sequelize.STRING
    },
    INTERNATIONAL_DISPUTES: {
      type: Sequelize.STRING
    }
  },
    {
      timestamps: false,
      freezeTableName: true
    });

  return FOURTHYEAR;
};