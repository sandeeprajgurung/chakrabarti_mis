module.exports = (sequelize, Sequelize) => {
    const PROGRAMME = sequelize.define("PROGRAMME", {
        ID: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      PRGNAME: {
          type: Sequelize.STRING
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    });
  
    // PROGRAMME.associate = model => {
    //   PROGRAMME.hasMany(model.LLBSTUDENT,{
    //       onDelete: 'cascade'
    //   })};
  
    return PROGRAMME;
  };