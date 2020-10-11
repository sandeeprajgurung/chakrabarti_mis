module.exports = (sequelize, Sequelize) => {
    const FIFTHYEAR_CRIMINAL = sequelize.define("FIFTHYEAR_CRIMINAL", {
        CRIMINALID: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      ORGANIZED_CRIME: {
        type: Sequelize.INTEGER
      },
      FISCAL_CRIME: {
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
  
    return FIFTHYEAR_CRIMINAL;
  };