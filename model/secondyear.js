module.exports = (sequelize, Sequelize) => {
    const SECONDYEAR = sequelize.define("SECONDYEAR", {
      ID: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      ENGLISH: {
        type: Sequelize.STRING
      },
      NEPALI: {
          type: Sequelize.STRING
      },
      INTERNATIONAL_RELATION:{
        type: Sequelize.STRING
      },
      LEGISLATIVE_PRINCIPLE: {
        type: Sequelize.STRING
      },
      PROCEDURE_LAW:{
        type: Sequelize.STRING
      },
      SOCOLOGY:{
        type: Sequelize.STRING
      },
      CRIMINAL_LAW:{
        type: Sequelize.STRING
      },
      CLINICAL_COURSE:{
        type: Sequelize.STRING
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    });
  
    return SECONDYEAR;
  };