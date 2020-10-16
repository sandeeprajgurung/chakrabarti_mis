module.exports = (sequelize, Sequelize) => {
    const FIRSTYEAR_CRIMINALLAW = sequelize.define("FIRSTYEAR_CRIMINALLAW", {
        CRIMINALID: {
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
      CRIMINAL_LAW:{
        type: Sequelize.INTEGER
      },
      FORENSIC: {
        type: Sequelize.INTEGER
      },
      JUVINAL_JUSTICE: {
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
  
    return FIRSTYEAR_CRIMINALLAW;
  };