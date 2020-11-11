const server = require('../AppConfig');
const Sequelize = require('sequelize');
const mysql = require('mysql2');

var Op = Sequelize.Op;

const sequelize = new Sequelize(server.DB, server.USER, server.PASSWORD, {
  host: server.HOST,
  dialect: "mysql",
  omitNull: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: {
    $and: Op.and,
    $or: Op.or,
    $eq: Op.eq,
    $gt: Op.gt,
    $lt: Op.lt,
    $lte: Op.lte,
    $like: Op.like,
    $between: Op.between,
    $iLike: Op.iLike,
    $ne: Op.ne,
    $in: Op.in
  }
});

// Create a connection to the database
// const connection = mysql.createConnection({
//   host: server.HOST,
//   user: server.USER,
//   password: server.PASSWORD,
//   database: server.DB
// });


// // open the MySQL connection
// connection.connect(error => {
//   if (error) throw error;
//   console.log("Successfully connected to the database.");
// });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.PROGRAMME = require("../model/programme.js")(sequelize, Sequelize);
db.LLBGROUP = require("../model/llbgroup.js")(sequelize, Sequelize);
db.LLMGROUP = require("../model/llmgroup.js")(sequelize, Sequelize);
db.USER = require("../model/user.js")(sequelize, Sequelize);
db.LLBSTUDENT = require("../model/llbstudent.js")(sequelize, Sequelize);
db.LLMSTUDENT = require("../model/llmstudent.js")(sequelize, Sequelize);
db.FIRSTYEAR_HUMANRIGHTS = require("../model/firstyear_humanrights.js")(sequelize, Sequelize);
db.FIRSTYEAR_BUSINESS = require("../model/firstyear_business.js")(sequelize, Sequelize);
db.FIRSTYEAR_CRIMINALLAW = require("../model/firstyear_criminallaw.js")(sequelize, Sequelize);
db.SECONDYEAR_HUMANRIGHTS = require("../model/secondyear_humanrights.js")(sequelize, Sequelize);
db.SECONDYEAR_BUSINESS = require("../model/secondyear_business.js")(sequelize, Sequelize);
db.SECONDYEAR_CRIMINALLAW = require("../model/secondyear_criminallaw.js")(sequelize, Sequelize);
db.FIRSTYEAR = require("../model/firstyear.js")(sequelize, Sequelize);
db.SECONDYEAR = require("../model/secondyear.js")(sequelize, Sequelize);
db.THIRDYEAR = require("../model/thirdyear.js")(sequelize, Sequelize);
db.FOURTHYEAR = require("../model/fourthyear.js")(sequelize, Sequelize);
db.FOURTHYEAR_CRIMINAL = require("../model/fourthyear_criminal.js")(sequelize, Sequelize);
db.FOURTHYEAR_BUSINESS = require("../model/fourthyear_business.js")(sequelize, Sequelize);
db.FOURTHYEAR_CONSTITUTIONAL = require("../model/fourthyear_constitution.js")(sequelize, Sequelize);
db.FOURTHYEAR_ENVIRONMENT = require("../model/fourthyear_environment.js")(sequelize, Sequelize);
db.FIFTHYEAR = require("../model/fifthyear.js")(sequelize, Sequelize);
db.FIFTHYEAR_CRIMINAL = require("../model/fifthyear_criminal.js")(sequelize, Sequelize);
db.FIFTHYEAR_BUSINESS = require("../model/fifthyear_business.js")(sequelize, Sequelize);
db.FIFTHYEAR_CONSTITUTIONAL = require("../model/fifthyear_constitutional.js")(sequelize, Sequelize);
db.FIFTHYEAR_ENVIRONMENT = require("../model/fifthyear_environment.js")(sequelize, Sequelize);

//program association
db.PROGRAMME.hasMany(db.LLBSTUDENT, {
  onDelete: "cascade"
});
//LLB student end

//Group association
db.LLBGROUP.hasMany(db.LLBSTUDENT, {
  onDelete: "cascade"
});
//LLB student end

//LLB student association

db.LLBSTUDENT.belongsTo(db.PROGRAMME, {
  foreignKey: "PROGRAMMEID",
  allowNull: false
});
db.LLBSTUDENT.belongsTo(db.LLBGROUP, {
  foreignKey: "LLBGROUPID",
  allowNull: false
});
db.LLBSTUDENT.hasOne(db.FIRSTYEAR, {
  onDelete: "cascade"
});
db.LLBSTUDENT.hasOne(db.SECONDYEAR, {
  onDelete: "cascade"
});
db.LLBSTUDENT.hasOne(db.THIRDYEAR, {
  onDelete: "cascade"
});
db.LLBSTUDENT.hasOne(db.FOURTHYEAR, {
  onDelete: "cascade"
});
db.LLBSTUDENT.hasOne(db.FIFTHYEAR, {
  onDelete: "cascade"
});

//end

//LLB firstyear
db.FIRSTYEAR.belongsTo(db.LLBSTUDENT, {
  foreignKey: "LLBSTUDENTID",
  allowNull: false
});
//end

//LLB secondyear
db.SECONDYEAR.belongsTo(db.LLBSTUDENT, {
  foreignKey: "LLBSTUDENTID",
  allowNull: false
});
//end

//LLB thirdyear
db.THIRDYEAR.belongsTo(db.LLBSTUDENT, {
  foreignKey: "LLBSTUDENTID",
  allowNull: false
});
//end

//fourthyear association

db.FOURTHYEAR.belongsTo(db.LLBSTUDENT, {
  foreignKey: "LLBSTUDENTID",
  allowNull: false
});
db.FOURTHYEAR.hasOne(db.FOURTHYEAR_CRIMINAL, {
  onDelete: "cascade"
});
db.FOURTHYEAR.hasOne(db.FOURTHYEAR_BUSINESS, {
  onDelete: "cascade"
});
db.FOURTHYEAR.hasOne(db.FOURTHYEAR_CONSTITUTIONAL, {
  onDelete: "cascade"
});
db.FOURTHYEAR.hasOne(db.FOURTHYEAR_ENVIRONMENT, {
  onDelete: "cascade"
});

db.FOURTHYEAR_CRIMINAL.belongsTo(db.FOURTHYEAR, {
  foreignKey: "FOURTHYEARID",
  allowNull: false,
});
db.FOURTHYEAR_BUSINESS.belongsTo(db.FOURTHYEAR, {
  foreignKey: "FOURTHYEARID",
  allowNull: false,
});
db.FOURTHYEAR_CONSTITUTIONAL.belongsTo(db.FOURTHYEAR, {
  foreignKey: "FOURTHYEARID",
  allowNull: false,
});
db.FOURTHYEAR_ENVIRONMENT.belongsTo(db.FOURTHYEAR, {
  foreignKey: "FOURTHYEARID",
  allowNull: false,
});

//fourthyear association end

//fifthyear association

db.FIFTHYEAR.belongsTo(db.LLBSTUDENT, {
  foreignKey: "LLBSTUDENTID",
  allowNull: false
});
db.FIFTHYEAR.hasOne(db.FIFTHYEAR_CRIMINAL, {
  onDelete: "cascade"
});
db.FIFTHYEAR.hasOne(db.FIFTHYEAR_BUSINESS, {
  onDelete: "cascade"
});
db.FIFTHYEAR.hasOne(db.FIFTHYEAR_CONSTITUTIONAL, {
  onDelete: "cascade"
});
db.FIFTHYEAR.hasOne(db.FIFTHYEAR_ENVIRONMENT, {
  onDelete: "cascade"
});

db.FIFTHYEAR_CRIMINAL.belongsTo(db.FIFTHYEAR, {
  foreignKey: "FIFTHYEARID",
  allowNull: false,
});
db.FIFTHYEAR_BUSINESS.belongsTo(db.FIFTHYEAR, {
  foreignKey: "FIFTHYEARID",
  allowNull: false,
});
db.FIFTHYEAR_CONSTITUTIONAL.belongsTo(db.FIFTHYEAR, {
  foreignKey: "FIFTHYEARID",
  allowNull: false,
});
db.FIFTHYEAR_ENVIRONMENT.belongsTo(db.FIFTHYEAR, {
  foreignKey: "FIFTHYEARID",
  allowNull: false,
});

//end

//LLM student association

db.LLMSTUDENT.belongsTo(db.PROGRAMME, {
  foreignKey: "PROGRAMMEID",
  allowNull: false
});
db.LLMSTUDENT.belongsTo(db.LLMGROUP, {
  foreignKey: "LLMGROUPID",
  allowNull: false
});
db.LLMSTUDENT.hasOne(db.FIRSTYEAR_HUMANRIGHTS, {
  onDelete: "cascade"
});
db.LLMSTUDENT.hasOne(db.FIRSTYEAR_BUSINESS, {
  onDelete: "cascade"
});
db.LLMSTUDENT.hasOne(db.FIRSTYEAR_CRIMINALLAW, {
  onDelete: "cascade"
});
db.LLMSTUDENT.hasOne(db.SECONDYEAR_HUMANRIGHTS, {
  onDelete: "cascade"
});
db.LLMSTUDENT.hasOne(db.SECONDYEAR_BUSINESS, {
  onDelete: "cascade"
});
db.LLMSTUDENT.hasOne(db.SECONDYEAR_CRIMINALLAW, {
  onDelete: "cascade"
});

//end

//LLM firstyear humanRights
db.FIRSTYEAR_HUMANRIGHTS.belongsTo(db.LLMSTUDENT, {
  foreignKey: "LLMSTUDENTID",
  allowNull: false,
});
//end

//LLM firstyear Business
db.FIRSTYEAR_BUSINESS.belongsTo(db.LLMSTUDENT, {
  foreignKey: "LLMSTUDENTID",
  allowNull: false,
});
//end

//LLM firstyear Criminal
db.FIRSTYEAR_CRIMINALLAW.belongsTo(db.LLMSTUDENT, {
  foreignKey: "LLMSTUDENTID",
  allowNull: false,
});
//end

//LLM Secondyear Humanrights
db.SECONDYEAR_HUMANRIGHTS.belongsTo(db.LLMSTUDENT, {
  foreignKey: "LLMSTUDENTID",
  allowNull: false,
});
//end

//LLM Secondyear Business
db.SECONDYEAR_BUSINESS.belongsTo(db.LLMSTUDENT, {
  foreignKey: "LLMSTUDENTID",
  allowNull: false,
});
//end

//LLM Secondyear Criminal
db.SECONDYEAR_CRIMINALLAW.belongsTo(db.LLMSTUDENT, {
  foreignKey: "LLMSTUDENTID",
  allowNull: false,
});
//end

module.exports = db;
// module.exports = connection;