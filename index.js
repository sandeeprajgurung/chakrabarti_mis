const userController = require("./controller/userController");
const studentController = require("./controller/studentController");
const programmeController = require("./controller/programmeController");
const firstyearController = require("./controller/firstyearController");
const groupController = require("./controller/groupController");
const secondyearController = require("./controller/secondyearController")
const thirdyearController = require("./controller/thirdyearController")
const fourthyearController = require("./controller/fourthyearController")
const fifthyearController = require("./controller/fifthyearController")
const firstyearhumanController = require("./controller/masterfirstyearHumanController")
const masterfirstyearCriminalController = require("./controller/masterfirstyearCriminalController")
const masterfirstyearBusinessController = require("./controller/masterfirstyearBusinessController")
const mastersecondyearBusinessController = require("./controller/mastersecondyearBusinessController")
const mastersecondyearCriminalController = require("./controller/mastersecondyearCriminalController")
const mastersecondyearHumanController = require("./controller/mastersecondyearHumanController")

const resultController = require("./controller/resultController");

const checkAuth = require("./middleware/check-auth");


const bodyParser = require('body-parser');

const http = require('http');
const express = require('express');
const app = express();
var cors = require('cors')
const db = require("./connect/Connect");

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

var httpServer = http.createServer(app).listen(8080, function () {
  console.log("Live at Port 6445 for HTTPS");
});
// app.get('/', (req, res, next) => {
//   res.send('Hello World');
// });

router.post("/Signup", (req, res, next) => { userController.Create(req, res, next) });
router.post("/Login", (req, res) => { userController.login(req, res) });

// region for programme
router.get("/Programme", (req, res) => { programmeController.FindAll(req, res) });
// region end

// region for group
router.get("/LLBGroup", (req, res) => { groupController.FindAllLLB(req, res) });
router.get("/LLMGroup", (req, res) => { groupController.FindAllLLM(req, res) });
// region end

// region for student start
router.get("/Student", (req, res) => { studentController.FindAllStudent(req, res) });
router.post("/LLBStudent", (req, res) => { studentController.CreateLLB(req, res) });
router.post("/LLMStudent", (req, res) => { studentController.CreateLLM(req, res) });
router.put("/LLBStudent/:Id", (req, res) => { studentController.UpdateLLB(req, res) });
router.put("/LLMStudent/:Id", (req, res) => { studentController.UpdateLLM(req, res) });
router.delete("/LLBStudent/:Id", (req, res) => { studentController.DeleteLLB(req, res) });
router.delete("/LLMStudent/:Id", (req, res) => { studentController.DeleteLLM(req, res) });
router.get("/LLBStudent", (req, res) => { studentController.FindAllLLB(req, res) });
router.get("/LLMStudent", (req, res) => { studentController.FindAllLLM(req, res) });
// router.get("/Student/:Id", (req, res) => { studentController.FindById(req, res)});
// region end

//region for student search with programme and group
router.get("/LLBStudent/Search", (req, res) => { studentController.SearchLLBStudent(req, res) });
router.get("/LLMStudent/Search", (req, res) => { studentController.SearchLLMStudent(req, res) });
//region end

// region for first year student result
router.get("/Firstyear", (req, res) => { firstyearController.FindAll(req, res) });
router.post("/Firstyear", (req, res) => { firstyearController.Create(req, res) });
// router.get("/Firstyear/Search", (req, res) => { firstyearController.Search(req, res)});
router.put("/Firstyear/:Id", (req, res) => { firstyearController.Update(req, res) });
router.delete("/Firstyear/:Id", (req, res) => { firstyearController.Delete(req, res) });
// region end

// region for second year student result
router.get("/Secondyear", (req, res) => { secondyearController.FindAll(req, res) });
router.post("/Secondyear", (req, res) => { secondyearController.Create(req, res) });
// router.get("/Secondyear/Search", (req, res) => { secondyearController.Search(req, res)});
router.put("/Secondyear/:Id", (req, res) => { secondyearController.Update(req, res) });
router.delete("/Secondyear/:Id", (req, res) => { secondyearController.Delete(req, res) });
// region end

// region for third year student result
router.get("/Thirdyear", (req, res) => { thirdyearController.FindAll(req, res) });
router.post("/Thirdyear", (req, res) => { thirdyearController.Create(req, res) });
// router.get("/Thirdyear/Search", (req, res) => { thirdyearController.Search(req, res)});
router.put("/Thirdyear/:Id", (req, res) => { thirdyearController.Update(req, res) });
router.delete("/Thirdyear/:Id", (req, res) => { thirdyearController.Delete(req, res) });
// region end

// region for fourth year student result
router.get("/Fourthyear", (req, res) => { fourthyearController.FindAll(req, res) });
router.post("/Fourthyear/Criminal", (req, res) => { fourthyearController.CreateCriminal(req, res) });
router.post("/Fourthyear/Business", (req, res) => { fourthyearController.CreateBusiness(req, res) });
router.post("/Fourthyear/Constitutional", (req, res) => { fourthyearController.CreateConstitution(req, res) });
router.post("/Fourthyear/Environment", (req, res) => { fourthyearController.CreateEnvironment(req, res) });
// router.get("/Fourthyear/Search", (req, res) => { fourthyearController.Search(req, res)});
router.put("/Fourthyear/Criminal/:Id/:CId", (req, res) => { fourthyearController.UpdateCriminal(req, res) });
router.put("/Fourthyear/Business/:Id/:BId", (req, res) => { fourthyearController.UpdateBusiness(req, res) });
router.put("/Fourthyear/Constitutional/:Id/:CUId", (req, res) => { fourthyearController.UpdateConstitutional(req, res) });
router.put("/Fourthyear/Environment/:Id/:EId", (req, res) => { fourthyearController.UpdateEnvironment(req, res) });
router.delete("/Fourthyear/Criminal/:Id", (req, res) => { fourthyearController.Delete(req, res) });
router.delete("/Fourthyear/Business/:Id", (req, res) => { fourthyearController.Delete(req, res) });
router.delete("/Fourthyear/Constitutional/:Id", (req, res) => { fourthyearController.Delete(req, res) });
router.delete("/Fourthyear/Environment/:Id", (req, res) => { fourthyearController.Delete(req, res) });
// region end

// region for fifth year student result
router.get("/Fifthyear", (req, res) => { fifthyearController.FindAll(req, res) });
router.post("/Fifthyear/Criminal", (req, res) => { fifthyearController.CreateCriminal(req, res) });
router.post("/Fifthyear/Business", (req, res) => { fifthyearController.CreateBusiness(req, res) });
router.post("/Fifthyear/Constitutional", (req, res) => { fifthyearController.CreateConstitution(req, res) });
router.post("/Fifthyear/Environment", (req, res) => { fifthyearController.CreateEnvironment(req, res) });
// router.get("/Fifthyear/Search", (req, res) => { fifthyearController.Search(req, res)});
router.put("/Fifthyear/Criminal/:Id/:CId", (req, res) => { fifthyearController.UpdateCriminal(req, res) });
router.put("/Fifthyear/Business/:Id/:BId", (req, res) => { fifthyearController.UpdateBusiness(req, res) });
router.put("/Fifthyear/Constitutional/:Id/:CUId", (req, res) => { fifthyearController.UpdateConstitutional(req, res) });
router.put("/Fifthyear/Environment/:Id/:EId", (req, res) => { fifthyearController.UpdateEnvironment(req, res) });
router.delete("/Fifthyear/Criminal/:Id", (req, res) => { fifthyearController.Delete(req, res) });
router.delete("/Fifthyear/Business/:Id", (req, res) => { fifthyearController.Delete(req, res) });
router.delete("/Fifthyear/Constitutional/:Id", (req, res) => { fifthyearController.Delete(req, res) });
router.delete("/Fifthyear/Environment/:Id", (req, res) => { fifthyearController.Delete(req, res) });
// region end

// region for LLM Human Rights first year student result
router.post("/Firstyear/HumanRights", (req, res) => { firstyearhumanController.Create(req, res) });
// router.get("/Master/Firstyear/HumanRights", (req, res) => { firstyearhumanController.FindAll(req, res)});
// router.get("/Master/Firstyear/HumanRights/Search", (req, res) => { firstyearhumanController.Search(req, res)});
// router.put("/Master/Firstyear/HumanRights/:Id", (req, res) => { firstyearhumanController.Update(req, res)});
router.delete("/Master/Firstyear/HumanRights/:Id", (req, res) => { firstyearhumanController.Delete(req, res) });
// region end

// region for LLM Criminal First year student result
router.post("/Firstyear/Criminal", (req, res) => { masterfirstyearCriminalController.Create(req, res) });
//  router.get("/Firstyear/HumanRights", (req, res) => { masterfirstyearCriminalController.FindAll(req, res)});
//  router.get("/Master/Firstyear/CriminalLaw/Search", (req, res) => { masterfirstyearCriminalController.Search(req, res)});
//  router.put("/Firstyear/Criminal/:Id", (req, res) => { masterfirstyearCriminalController.Update(req, res)});
router.delete("/Firstyear/Criminal/:Id", (req, res) => { masterfirstyearCriminalController.Delete(req, res) });
// region end

// region for LLM Business first year student result
//  router.get("/Firstyear/Business", (req, res) => { masterfirstyearBusinessController.FindAll(req, res)});
router.post("/Firstyear/Business", (req, res) => { masterfirstyearBusinessController.Create(req, res) });
//  router.put("/Firstyear/Business/:Id", (req, res) => { masterfirstyearBusinessController.Update(req, res)});
router.delete("/Firstyear/Business/:Id", (req, res) => { masterfirstyearBusinessController.Delete(req, res) });
// region end

// region for LLM Human Rights Second year student result
router.post("/Secondyear/HumanRights", (req, res) => { mastersecondyearHumanController.Create(req, res) });
router.delete("/Secondyear/HumanRights/:Id", (req, res) => { mastersecondyearHumanController.Delete(req, res) });
// region end

// region for LLM Criminal Second year student result
router.post("/Secondyear/Criminal", (req, res) => { mastersecondyearCriminalController.Create(req, res) });
router.delete("/Secondyear/Criminal/:Id", (req, res) => { mastersecondyearCriminalController.Delete(req, res) });
// region end

// region for LLM Business Second year student result
router.post("/Secondyear/Business", (req, res) => { mastersecondyearBusinessController.Create(req, res) });
router.delete("/Secondyear/Business/:Id", (req, res) => { mastersecondyearBusinessController.Delete(req, res) });
// region end

// region for result
router.get("/Result/LLBFirstyear", (req, res) => { resultController.getLLBFirst(req, res) });
router.get("/Result/LLBSecondyear", (req, res) => { resultController.getLLBSecond(req, res) });
router.get("/Result/LLBThirdyear", (req, res) => { resultController.getLLBThird(req, res) });
router.get("/Result/LLBFourthyear/Criminal", (req, res) => { resultController.getLLBFourthCriminal(req, res) });
router.get("/Result/LLBFourthyear/Business", (req, res) => { resultController.getLLBFourthBusiness(req, res) });
router.get("/Result/LLBFourthyear/Environment", (req, res) => { resultController.getLLBFourthEnvironment(req, res) });
router.get("/Result/LLBFourthyear/Constitutional", (req, res) => { resultController.getLLBFourthConstitutional(req, res) });
router.get("/Result/LLBFifthyear/Criminal", (req, res) => { resultController.getLLBFifthCriminal(req, res) });
router.get("/Result/LLBFifthyear/Business", (req, res) => { resultController.getLLBFifthBusiness(req, res) });
router.get("/Result/LLBFifthyear/Constitutional", (req, res) => { resultController.getLLBFifthConstitutional(req, res) });
router.get("/Result/LLBFifthyear/Environment", (req, res) => { resultController.getLLBFifthEnvironment(req, res) });

router.get("/Result/LLMFirstyear/HumanRights", (req, res) => { resultController.getLLMFirstHumanRights(req, res) });
router.get("/Result/LLMFirstyear/Business", (req, res) => { resultController.getLLMFirstBusiness(req, res) });
router.get("/Result/LLMFirstyear/Criminal", (req, res) => { resultController.getLLMFirstCriminalLaw(req, res) });
router.get("/Result/LLMSecondyear/Criminal", (req, res) => { resultController.getLLMSecondCriminal(req, res) });
router.get("/Result/LLMSecondyear/HumanRights", (req, res) => { resultController.getLLMSecondHumanRights(req, res) });
router.get("/Result/LLMSecondyear/Business", (req, res) => { resultController.getLLMSecondBusiness(req, res) });
// region end

//when api doesnt matches with above api list then status 400 bad request is sent
app.use(function (req, res, next) {
  res.status(400).send({ message: "Bad Request!!" });
});
