module.exports = (sequelize, Sequelize) => {
  const SECONDYEAR_BUSINESS = sequelize.define("SECONDYEAR_BUSINESS", {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    BANKING_LAW: {
      type: Sequelize.STRING
    },
    CORPORATE_MANAGEMENT: {
      type: Sequelize.STRING
    },
    TRADE_LAW: {
      type: Sequelize.STRING
    },
    TAXATION: {
      type: Sequelize.STRING
    },
    INSURANCE: {
      type: Sequelize.STRING
    },
    DISSERTATION: {
      type: Sequelize.STRING
    }
  },
    {
      timestamps: false,
      freezeTableName: true
    });

  return SECONDYEAR_BUSINESS;
};