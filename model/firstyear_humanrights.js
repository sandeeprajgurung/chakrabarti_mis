module.exports = (sequelize, Sequelize) => {
    const FIRSTYEAR_HUMANRIGHTS = sequelize.define("FIRSTYEAR_HUMANRIGHTS", {
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
      NEPALESE_STUDY:{
        type: Sequelize.STRING
      },
      CIVIL_POLITICAL: {
        type: Sequelize.STRING
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    });
  
    return FIRSTYEAR_HUMANRIGHTS;
  };