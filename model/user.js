module.exports = (sequelize, Sequelize) => {
    const USER = sequelize.define("USER", {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
          type: Sequelize.STRING
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    });
  
    return USER;
  };