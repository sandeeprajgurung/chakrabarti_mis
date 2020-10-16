module.exports = (sequelize, Sequelize) => {
    const THIRDYEAR = sequelize.define("THIRDYEAR", {
        THIRDYEARID: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      INTERNATIONAL_HUMAN_RIGHT: {
        type: Sequelize.INTEGER
      },
      INTERPRETATION: {
          type: Sequelize.INTEGER
      },
      LAW_EVIDENCE:{
        type: Sequelize.INTEGER
      },
      INTERNATIONAL_LAW: {
        type: Sequelize.INTEGER
      },
      CONSTITUTIONAL_LAW:{
        type: Sequelize.INTEGER
      },
      LEGAL_RESEARCH:{
        type: Sequelize.INTEGER
      },
      PROFESSIONAL_ETHICS:{
        type: Sequelize.INTEGER
      },
      CLINICAL_LEGAL_EDUCATION:{
        type: Sequelize.INTEGER
      },
      CLINICAL_WORK:{
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
  
    return THIRDYEAR;
  };