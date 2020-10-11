module.exports = (sequelize, Sequelize) => {
    const FOURTHYEAR_ENVIRONMENT = sequelize.define("FOURTHYEAR_ENVIRONMENT", {
        ENVIRONMENTID: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      ENVIRONMENT_LAW: {
        type: Sequelize.INTEGER
      },
      WATER_RIVER: {
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
  
    return FOURTHYEAR_ENVIRONMENT;
  };