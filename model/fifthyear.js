module.exports = (sequelize, Sequelize) => {
    const FIFTHYEAR = sequelize.define("FIFTHYEAR", {
        FIFTHYEARID: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      LEGAL_PHILOSOPHY: {
        type: Sequelize.INTEGER
      },
      AGRARIAN: {
          type: Sequelize.INTEGER
      },
      INTERNATIONAL_HUMANITARIAN:{
        type: Sequelize.INTEGER
      },
      CONSERVATION_LAW: {
        type: Sequelize.INTEGER
      },
      INTERNATIONAL_LAW:{
        type: Sequelize.INTEGER
      },
      PRE_TRIAL_PRESENTATION:{
        type: Sequelize.INTEGER
      },
      CLINICAL_EDUCATION:{
        type: Sequelize.INTEGER
      },
      DISSERTATION:{
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
  
    return FIFTHYEAR;
  };