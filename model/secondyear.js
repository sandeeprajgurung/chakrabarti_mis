module.exports = (sequelize, Sequelize) => {
    const SECONDYEAR = sequelize.define("SECONDYEAR", {
        SECONDYEARID: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      ENGLISH: {
        type: Sequelize.INTEGER
      },
      NEPALI: {
          type: Sequelize.INTEGER
      },
      INTERNATIONAL_RELATION:{
        type: Sequelize.INTEGER
      },
      LEGISLATIVE_PRINCIPLE: {
        type: Sequelize.INTEGER
      },
      PROCEDURE_LAW:{
        type: Sequelize.INTEGER
      },
      SOCOLOGY:{
        type: Sequelize.INTEGER
      },
      CRIMINAL_LAW:{
        type: Sequelize.INTEGER
      },
      CLINICAL_COURSE:{
        type: Sequelize.INTEGER
      },
      SID:{
        type: Sequelize.INTEGER
      },
      PRGID: {
        type: Sequelize.INTEGER
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    });
  
    return SECONDYEAR;
  };