module.exports = (sequelize, Sequelize) => {
    const FIFTHYEAR_CRIMINAL = sequelize.define("FIFTHYEAR_CRIMINAL", {
        ID: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      ORGANIZED_CRIME: {
        type: Sequelize.STRING
      },
      FISCAL_CRIME: {
          type: Sequelize.STRING
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    });
  
    return FIFTHYEAR_CRIMINAL;
  };