module.exports = (sequelize, Sequelize) => {
  const LLBGROUP = sequelize.define("LLBGROUP", {
    grpid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    grpname: {
        type: Sequelize.STRING
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  });

  // LLBGROUP.associate = model => {
  //   LLBGROUP.hasMany(model.LLBSTUDENT,{
  //     onDelete: 'cascade'
  //   })};

  //   LLBGROUP.associate = model => {
  //     LLBGROUP.hasMany(model.f,{
  //       onDelete: 'cascade'
  //     })};

  return LLBGROUP;
};