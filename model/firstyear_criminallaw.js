module.exports = (sequelize, Sequelize) => {
  const FIRSTYEAR_CRIMINALLAW = sequelize.define("FIRSTYEAR_CRIMINALLAW", {
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
    CRIMINAL_LAW: {
      type: Sequelize.STRING
    },
    FORENSIC: {
      type: Sequelize.STRING
    },
    JUVINAL_JUSTICE: {
      type: Sequelize.STRING
    }
  },
    {
      timestamps: false,
      freezeTableName: true
    });

  return FIRSTYEAR_CRIMINALLAW;
};