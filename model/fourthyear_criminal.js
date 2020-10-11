module.exports = (sequelize, Sequelize) => {
    const FOURTHYEAR_CRIMINAL = sequelize.define("FOURTHYEAR_CRIMINAL", {
        CRIMINALID: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      FORENSIC: {
        type: Sequelize.INTEGER
      },
      CRIMINOLOGY: {
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
  
    return FOURTHYEAR_CRIMINAL;
  };