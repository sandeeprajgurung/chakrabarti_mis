module.exports = (sequelize, Sequelize) => {
    const SECONDYEAR_HUMANRIGHTS = sequelize.define("SECONDYEAR_HUMANRIGHTS", {
        SECOND_HUMANRIGHTID: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      FEMINIST_JURISPRUDENCE: {
        type: Sequelize.INTEGER
      },
      WOMEN_HUMAN_RIGHT: {
          type: Sequelize.INTEGER
      },
      ECONOMIC_SOCIAL_CULTURE:{
        type: Sequelize.INTEGER
      },
      DISSERTATION: {
        type: Sequelize.INTEGER
      },
      SID:{
        type: Sequelize.INTEGER
      },
      PRGID: {
        type: Sequelize.INTEGER
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    });
  
    return SECONDYEAR_HUMANRIGHTS;
  };