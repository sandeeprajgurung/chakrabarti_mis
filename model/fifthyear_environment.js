module.exports = (sequelize, Sequelize) => {
    const FIFTHYEAR_ENVIRONMENT = sequelize.define("FIFTHYEAR_ENVIRONMENT", {
        ID: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      ENERGY_LAW: {
        type: Sequelize.STRING
      },
      CIVIL_AVIATION: {
          type: Sequelize.STRING
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    });
  
    return FIFTHYEAR_ENVIRONMENT;
  };