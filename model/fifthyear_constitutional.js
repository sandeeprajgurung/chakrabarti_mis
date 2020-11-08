module.exports = (sequelize, Sequelize) => {
    const FIFTHYEAR_CONSTITUTIONAL = sequelize.define("FIFTHYEAR_CONSTITUTIONAL", {
        ID: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      LAW_OF_EQUITY: {
        type: Sequelize.STRING
      },
      LAW_ON_GENDER: {
          type: Sequelize.STRING
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    });
  
    return FIFTHYEAR_CONSTITUTIONAL;
  };