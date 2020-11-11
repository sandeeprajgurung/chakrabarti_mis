module.exports = (sequelize, Sequelize) => {
    const FIFTHYEAR = sequelize.define("FIFTHYEAR", {
        ID: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      LEGAL_PHILOSOPHY: {
        type: Sequelize.STRING
      },
      AGRARIAN: {
          type: Sequelize.STRING
      },
      LABOUR: {
        type: Sequelize.STRING
    },
      INTERNATIONAL_HUMANITARIAN:{
        type: Sequelize.STRING
      },
      CONSERVATION_LAW: {
        type: Sequelize.STRING
      },
      INTERNATIONAL_LAW:{
        type: Sequelize.STRING
      },
      PRE_TRIAL_PRESENTATION:{
        type: Sequelize.STRING
      },
      CLINICAL_EDUCATION:{
        type: Sequelize.STRING
      },
      DISSERTATION:{
        type: Sequelize.STRING
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    });
  
    return FIFTHYEAR;
  };