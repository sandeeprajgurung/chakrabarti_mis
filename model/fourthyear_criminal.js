
const fourthyear = require("./fourthyear");

module.exports = (sequelize, Sequelize) => {
    const FOURTHYEAR_CRIMINAL = sequelize.define("FOURTHYEAR_CRIMINAL", {
        ID: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      FORENSIC: {
        type: Sequelize.STRING
      },
      CRIMINOLOGY: {
          type: Sequelize.STRING
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    });
  
    return FOURTHYEAR_CRIMINAL;
  };