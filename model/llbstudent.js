module.exports = (sequelize, Sequelize) => {
    const LLBSTUDENT = sequelize.define("LLBSTUDENT", {
        SID: {
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
      YEAR: {
          type: Sequelize.INTEGER
      },
      GPA:{
        type: Sequelize.FLOAT
      },
      PRGID: {
        type: Sequelize.INTEGER
    },
    GRPID:{
      type: Sequelize.INTEGER
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