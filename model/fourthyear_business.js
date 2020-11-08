module.exports = (sequelize, Sequelize) => {
    const FOURTHYEAR_BUSINESS = sequelize.define("FOURTHYEAR_BUSINESS", {
        ID: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      BANKING_INSURANCE: {
        type: Sequelize.STRING
      },
      INTERNATIONAL_TRADE: {
          type: Sequelize.STRING
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    });
  
    return FOURTHYEAR_BUSINESS;
  };