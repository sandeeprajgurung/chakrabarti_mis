module.exports = (sequelize, Sequelize) => {
    const FIFTHYEAR_BUSINESS = sequelize.define("FIFTHYEAR_BUSINESS", {
        ID: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      INTELLECTUAL_PROPERTY: {
        type: Sequelize.STRING
      },
      TAXATION: {
          type: Sequelize.STRING
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    });
  
    return FIFTHYEAR_BUSINESS;
  };