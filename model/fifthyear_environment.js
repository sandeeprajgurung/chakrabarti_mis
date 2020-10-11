module.exports = (sequelize, Sequelize) => {
    const FIFTHYEAR_ENVIRONMENT = sequelize.define("FIFTHYEAR_ENVIRONMENT", {
        ENVIRONMENTID: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      ENERGY_LAW: {
        type: Sequelize.INTEGER
      },
      CIVIL_AVIATION: {
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
  
    return FIFTHYEAR_ENVIRONMENT;
  };