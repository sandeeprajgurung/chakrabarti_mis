module.exports = (sequelize, Sequelize) => {
    const FIRSTYEAR_HUMANRIGHTS = sequelize.define("FIRSTYEAR_HUMANRIGHTS", {
        HUMANRIGHTID: {
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
      NEPALESE_STUDY:{
        type: Sequelize.INTEGER
      },
      CIVIL_POLITICAL: {
        type: Sequelize.INTEGER
      },
      SID:{
        type: Sequelize.INTEGER
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    });
  
    return FIRSTYEAR_HUMANRIGHTS;
  };