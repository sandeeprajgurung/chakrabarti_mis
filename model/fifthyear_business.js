module.exports = (sequelize, Sequelize) => {
    const FIFTHYEAR_BUSINESS = sequelize.define("FIFTHYEAR_BUSINESS", {
        BUSINESSID: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      INTELLECTUAL_PROPERTY: {
        type: Sequelize.INTEGER
      },
      TAXATION: {
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
  
    return FIFTHYEAR_BUSINESS;
  };