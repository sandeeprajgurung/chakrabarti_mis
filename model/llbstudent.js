module.exports = (sequelize, Sequelize) => {
    const LLBSTUDENT = sequelize.define("LLBSTUDENT", {
      ID: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      SNAME: {
        type: Sequelize.STRING
      },
      EXAM_NO: {
          type: Sequelize.STRING
      },
      ROLL_NO:{
        type: Sequelize.INTEGER
      },
      EMAIL: {
        type: Sequelize.STRING
      },
      PHONE_NO: {
          type: Sequelize.BIGINT
      },
      GENDER:{
        type: Sequelize.CHAR
      },
      BATCH: {
        type: Sequelize.INTEGER
      },
      PERCENT:{
        type: Sequelize.FLOAT
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    });

    // LLBSTUDENT.associate = model => {
    //     LLBSTUDENT.belongsTo(model.LLBGROUP,{
    //         foreignkey : {
    //             allowNull : true
    //         }
    //     })};

    //     LLBSTUDENT.associate = model => {
    //         LLBSTUDENT.belongsTo(model.PROGRAMME,{
    //             foreignkey : {
    //                 allowNull : true
    //             }
    //         })};

    //         LLBSTUDENT.associate = model => {
    //             LLBSTUDENT.hasMany(model.FIRSTYEAR_HUMANRIGHTS,{
    //               onDelete: 'cascade'
    //             })};
  
    return LLBSTUDENT;
  };