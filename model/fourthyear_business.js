module.exports = (sequelize, Sequelize) => {
    const FOURTHYEAR_BUSINESS = sequelize.define("FOURTHYEAR_BUSINESS", {
        BUSINESSID: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      BANKING_INSURANCE: {
        type: Sequelize.INTEGER
      },
      INTERNATIONAL_TRADE: {
          type: Sequelize.INTEGER
      },
      FOURTHYEARID: {
        type: Sequelize.INTEGER
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    });
  
    return FOURTHYEAR_BUSINESS;
  };