const userController = require("./controller/userController");
const studentController = require("./controller/studentController");
const programmeController = require("./controller/programmeController");
const resultController = require("./controller/resultController");
const firstyearController = require("./controller/firstyearController");
const groupController = require("./controller/groupController");
const secondyearController = require("./controller/secondyearController")
const thirdyearController = require("./controller/thirdyearController")
const fourthyearController = require("./controller/fourthyearController")
const fifthyearController = require("./controller/fifthyearController")
const firstyearhumanController = require("./controller/masterfirstyearCriminalController")

const checkAuth = require("./middleware/check-auth");


const bodyParser = require('body-parser');

const http = require('http');
const express = require('express');
const app = express();
var cors = require('cors')
// const db = require("./connect/Connect");
// // db.sequelize.sync();
// const Llbgroup = db.LLBGROUP;
// const Op = db.Sequelize.Op;
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });

var router = express.Router();

app.use(cors());

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
  router.get("/Programme", (req, res) => { programmeController.FindAll(req, res)});
  // region end

  // region for group
  router.get("/Group", (req, res) => { groupController.FindAll(req, res)});
  // region end

  // region for student start
  router.post("/Student", (req, res) => { studentController.Create(req, res)});
  router.put("/Student/:Id", (req, res) => { studentController.Update(req, res)});
  router.delete("/Student/:Id", (req, res) => { studentController.Delete(req, res)});
  router.get("/Student", (req, res) => { studentController.FindAll(req, res)});
  router.get("/Student/:Id", (req, res) => { studentController.FindById(req, res)});
  // region end

  // region to save student marks
  router.post("/Result", (req, res) => { resultController.Create(req, res)});
  // region end

  // region for first year student result
  router.get("/Firstyear", (req, res) => { firstyearController.FindAll(req, res)});
  router.get("/Firstyear/Search", (req, res) => { firstyearController.Search(req, res)});
  router.put("/Firstyear/:Id", (req, res) => { firstyearController.Update(req, res)});
  router.delete("/Firstyear/:Id", (req, res) => { firstyearController.Delete(req, res)});
  // region end

  // region for second year student result
  router.get("/Secondyear", (req, res) => { secondyearController.FindAll(req, res)});
  router.get("/Secondyear/Search", (req, res) => { secondyearController.Search(req, res)});
  router.put("/Secondyear/:Id", (req, res) => { secondyearController.Update(req, res)});
  router.delete("/Secondyear/:Id", (req, res) => { secondyearController.Delete(req, res)});
  // region end

  // region for third year student result
  router.get("/Thirdyear", (req, res) => { thirdyearController.FindAll(req, res)});
  router.get("/Thirdyear/Search", (req, res) => { thirdyearController.Search(req, res)});
  router.put("/Thirdyear/:Id", (req, res) => { thirdyearController.Update(req, res)});
  router.delete("/Thirdyear/:Id", (req, res) => { thirdyearController.Delete(req, res)});
  // region end

  // region for fourth year student result
  router.get("/Fourthyear", (req, res) => { fourthyearController.FindAll(req, res)});
  router.get("/Fourthyear/Search", (req, res) => { fourthyearController.Search(req, res)});
  router.put("/Fourthyear/Criminal/:Id/:CId", (req, res) => { fourthyearController.UpdateCriminal(req, res)});
  router.put("/Fourthyear/Business/:Id/:BId", (req, res) => { fourthyearController.UpdateBusiness(req, res)});
  router.put("/Fourthyear/Constitutional/:Id/:CUId", (req, res) => { fourthyearController.UpdateConstitutional(req, res)});
  router.put("/Fourthyear/Environment/:Id/:EId", (req, res) => { fourthyearController.UpdateEnvironment(req, res)});
  router.delete("/Fourthyear/:Id", (req, res) => { fourthyearController.Delete(req, res)});
  // region end

  // region for fifth year student result
  router.get("/Fifthyear", (req, res) => { fifthyearController.FindAll(req, res)});
  router.get("/Fifthyear/Search", (req, res) => { fifthyearController.Search(req, res)});
  router.put("/Fifthyear/Criminal/:Id/:CId", (req, res) => { fifthyearController.UpdateCriminal(req, res)});
  router.put("/Fifthyear/Business/:Id/:BId", (req, res) => { fifthyearController.UpdateBusiness(req, res)});
  router.put("/Fifthyear/Constitutional/:Id/:CUId", (req, res) => { fifthyearController.UpdateConstitutional(req, res)});
  router.put("/Fifthyear/Environment/:Id/:EId", (req, res) => { fifthyearController.UpdateEnvironment(req, res)});
  router.delete("/Fifthyear/:Id", (req, res) => { fifthyearController.Delete(req, res)});
  // region end

  // region for LLM first year student result
  router.get("/Firstyear/HumanRights", (req, res) => { firstyearhumanController.FindAll(req, res)});
  router.get("/Firstyear/HumanRights/Search", (req, res) => { firstyearhumanController.Search(req, res)});
  router.put("/Firstyear/HumanRights/:Id", (req, res) => { firstyearhumanController.Update(req, res)});
  router.delete("/Firstyear/HumanRights/:Id", (req, res) => { firstyearhumanController.Delete(req, res)});
  // region end

//when api doesnt matches with above api list then status 400 bad request is sent
app.use(function (req, res, next) {
  res.status(400).send({ message: "Bad Request!!" });
});
