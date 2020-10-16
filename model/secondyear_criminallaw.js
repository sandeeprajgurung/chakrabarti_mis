module.exports = (sequelize, Sequelize) => {
    const SECONDYEAR_CRIMINALLAW = sequelize.define("SECONDYEAR_CRIMINALLAW", {
        SECOND_CRIMIANLID: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      CRIMINOLOGY: {
        type: Sequelize.INTEGER
      },
      FAIR_TRAIL: {
          type: Sequelize.INTEGER
      },
      WHITE_COLLAR:{
        type: Sequelize.INTEGER
      },
      DISSERTATION: {
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
  
    return SECONDYEAR_CRIMINALLAW;
  };