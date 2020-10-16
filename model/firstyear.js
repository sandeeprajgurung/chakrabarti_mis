module.exports = (sequelize, Sequelize) => {
    const FIRSTYEAR = sequelize.define("FIRSTYEAR", {
        FIRSTYEARID: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      POLITICAL: {
        type: Sequelize.INTEGER
      },
      ECONOMIC: {
          type: Sequelize.INTEGER
      },
      HISTORY_OF_NEPAL:{
        type: Sequelize.INTEGER
      },
      SOCOLOGY: {
        type: Sequelize.INTEGER
      },
      PRINCIPLE_OF_LAW:{
        type: Sequelize.INTEGER
      },
      CONCEPT_OF_LAW:{
        type: Sequelize.INTEGER
      },
      LOGIC_LEGAL_REASONING:{
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
  
    return FIRSTYEAR;
  };