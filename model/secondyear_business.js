module.exports = (sequelize, Sequelize) => {
    const SECONDYEAR_BUSINESS = sequelize.define("SECONDYEAR_BUSINESS", {
        SECOND_BUSINESSID: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      BANKING_LAW: {
        type: Sequelize.INTEGER
      },
      CORPORATE_MANAGEMENT: {
          type: Sequelize.INTEGER
      },
      TRADE_LAW:{
        type: Sequelize.INTEGER
      },
      TAXATION: {
        type: Sequelize.INTEGER
      },
      INSURANCE:{
        type: Sequelize.INTEGER
      },
      DISSERTATION:{
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
  
    return SECONDYEAR_BUSINESS;
  };