module.exports = (sequelize, Sequelize) => {
    const FIRSTYEAR = sequelize.define("FIRSTYEAR", {
        ID: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      POLITICAL: {
        type: Sequelize.STRING
      },
      ECONOMIC: {
          type: Sequelize.STRING
      },
      HISTORY_OF_NEPAL:{
        type: Sequelize.STRING
      },
      SOCOLOGY: {
        type: Sequelize.STRING
      },
      PRINCIPLE_OF_LAW:{
        type: Sequelize.STRING
      },
      CONCEPT_OF_LAW:{
        type: Sequelize.STRING
      },
      LOGIC_LEGAL_REASONING:{
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
  
    return FIRSTYEAR;
  };