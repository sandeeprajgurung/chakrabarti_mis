module.exports = (sequelize, Sequelize) => {
    const FOURTHYEAR_ENVIRONMENT = sequelize.define("FOURTHYEAR_ENVIRONMENT", {
        ID: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      ENVIRONMENT_LAW: {
        type: Sequelize.STRING
      },
      WATER_RIVER: {
          type: Sequelize.STRING
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    });
  
    return FOURTHYEAR_ENVIRONMENT;
  };