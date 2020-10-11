module.exports = (sequelize, Sequelize) => {
    const FOURTHYEAR_CONSTITUTIONAL = sequelize.define("FOURTHYEAR_CONSTITUTIONAL", {
        CONSTITUTIONALID: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      GOOD_GONERNANCE: {
        type: Sequelize.INTEGER
      },
      ELECTORAL_LAW: {
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
  
    return FOURTHYEAR_CONSTITUTIONAL;
  };