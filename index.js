const userController = require("./controller/userController");
const studentController = require("./controller/studentController");
const programmeController = require("./controller/programmeController");
const resultController = require("./controller/resultController");

const checkAuth = require("./middleware/check-auth");


const bodyParser = require('body-parser');

const http = require('http');
const express = require('express');
const app = express();
// const db = require("./connect/Connect");
// // db.sequelize.sync();
// const Llbgroup = db.LLBGROUP;
// const Op = db.Sequelize.Op;
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });

var router = express.Router();


app.use(bodyParser.urlencoded({
  extended: false
}));
// create application/json parser
var jsonParser = bodyParser.json();
app.use(bodyParser.json());
app.use("/", router);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

var httpServer = http.createServer(app).listen(6445, function () {
  console.log("Live at Port 6445 for HTTPS");
});
app.get('/', (req, res, next) => {
    res.send('Hello World');
  });

  router.post("/Signup", (req, res, next) => { userController.Create(req, res, next)});
  router.post("/Login", (req, res) => { userController.login(req, res)});

  // region for programme
  router.get("/Programme", checkAuth, (req, res) => { programmeController.FindAll(req, res)});
  // region end

  // region for student start
  router.post("/Student", checkAuth, (req, res) => { studentController.Create(req, res)});
  router.put("/Student/:Id", checkAuth, (req, res) => { studentController.Update(req, res)});
  router.delete("/Student/:Id", checkAuth, (req, res) => { studentController.Delete(req, res)});
  router.get("/Student", checkAuth, (req, res) => { studentController.FindAll(req, res)});
  router.get("/Student/:Id", checkAuth, (req, res) => { studentController.FindById(req, res)});
  // region end

  // region for student marks
  router.post("/Result", checkAuth, (req, res) => { resultController.Create(req, res)});
  // region end

//when api doesnt matches with above api list then status 400 bad request is sent
app.use(function (req, res, next) {
  res.status(400).send({ message: "Bad Request!!" });
});
