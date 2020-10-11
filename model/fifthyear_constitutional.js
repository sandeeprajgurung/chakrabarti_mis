module.exports = (sequelize, Sequelize) => {
    const FIFTHYEAR_CONSTITUTIONAL = sequelize.define("FIFTHYEAR_CONSTITUTIONAL", {
        CONSTITUTIONALID: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      LAW_OF_EQUITY: {
        type: Sequelize.INTEGER
      },
      LAW_ON_GENDER: {
          type: Sequelize.INTEGER
      },
      FIFTHYEARID: {
        type: Sequelize.INTEGER
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    });
  
    return FIFTHYEAR_CONSTITUTIONAL;
  };