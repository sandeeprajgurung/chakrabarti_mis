module.exports = (sequelize, Sequelize) => {
    const FOURTHYEAR_CONSTITUTIONAL = sequelize.define("FOURTHYEAR_CONSTITUTIONAL", {
        ID: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      GOOD_GONERNANCE: {
        type: Sequelize.STRING
      },
      ELECTORAL_LAW: {
          type: Sequelize.STRING
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    });
  
    return FOURTHYEAR_CONSTITUTIONAL;
  };