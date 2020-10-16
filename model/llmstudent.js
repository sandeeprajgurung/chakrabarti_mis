module.exports = (sequelize, Sequelize) => {
    const LLMSTUDENT = sequelize.define("LLMSTUDENT", {
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
        type: Sequelize.STRING,
        IsEmail: true
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

    // LLMSTUDENT.associate = model => {
    //     LLMSTUDENT.belongsTo(model.LLBGROUP,{
    //         foreignkey : {
    //             allowNull : true
    //         }
    //     })};

    //     LLMSTUDENT.associate = model => {
    //         LLMSTUDENT.belongsTo(model.PROGRAMME,{
    //             foreignkey : {
    //                 allowNull : true
    //             }
    //         })};
  
    return LLMSTUDENT;
  };