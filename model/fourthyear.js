module.exports = (sequelize, Sequelize) => {
    const FOURTHYEAR = sequelize.define("FOURTHYEAR", {
        FOURTHYEARID: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      CLINICAL_EDUCATION: {
        type: Sequelize.INTEGER
      },
      ADVANCED_JURISPRUDENCE: {
          type: Sequelize.INTEGER
      },
      CONTRACT_LAW:{
        type: Sequelize.INTEGER
      },
      COMPANY_LAW: {
        type: Sequelize.INTEGER
      },
      ADMINISTATIVE_LAW:{
        type: Sequelize.INTEGER
      },
      CLINICAL_LEGAL_EDUCATION:{
        type: Sequelize.INTEGER
      },
      INTERNATIONAL_DISPUTES:{
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
  
    return FOURTHYEAR;
  };