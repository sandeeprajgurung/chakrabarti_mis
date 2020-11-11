module.exports = (sequelize, Sequelize) => {
  const SECONDYEAR_CRIMINALLAW = sequelize.define("SECONDYEAR_CRIMINALLAW", {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    CRIMINOLOGY: {
      type: Sequelize.STRING
    },
    FAIR_TRAIL: {
      type: Sequelize.STRING
    },
    WHITE_COLLAR: {
      type: Sequelize.STRING
    },
    DISSERTATION: {
      type: Sequelize.STRING
    }
  },
    {
      timestamps: false,
      freezeTableName: true
    });

  return SECONDYEAR_CRIMINALLAW;
};