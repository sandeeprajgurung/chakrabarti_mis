module.exports = (sequelize, Sequelize) => {
    const FIRSTYEAR_BUSINESS = sequelize.define("FIRSTYEAR_BUSINESS", {
        BUSINESSID: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      LEGAL_RESEARCH: {
        type: Sequelize.INTEGER
      },
      COMPARATIVE_STUDY: {
          type: Sequelize.INTEGER
      },
      CONTRACT_LAW:{
        type: Sequelize.INTEGER
      },
      INTELLECTUAL_PROPERTY: {
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
  
    return FIRSTYEAR_BUSINESS;
  };