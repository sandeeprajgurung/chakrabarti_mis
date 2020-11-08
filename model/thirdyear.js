module.exports = (sequelize, Sequelize) => {
    const THIRDYEAR = sequelize.define("THIRDYEAR", {
      ID: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      INTERNATIONAL_HUMAN_RIGHT: {
        type: Sequelize.STRING
      },
      INTERPRETATION: {
          type: Sequelize.STRING
      },
      LAW_EVIDENCE:{
        type: Sequelize.STRING
      },
      INTERNATIONAL_LAW: {
        type: Sequelize.STRING
      },
      CONSTITUTIONAL_LAW:{
        type: Sequelize.STRING
      },
      LEGAL_RESEARCH:{
        type: Sequelize.STRING
      },
      PROFESSIONAL_ETHICS:{
        type: Sequelize.STRING
      },
      CLINICAL_LEGAL_EDUCATION:{
        type: Sequelize.STRING
      },
      CLINICAL_WORK:{
        type: Sequelize.STRING
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    });
  
    return THIRDYEAR;
  };