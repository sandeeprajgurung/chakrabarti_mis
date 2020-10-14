const db = require("../connect/Connect");
const Llbgroup = db.LLBGROUP;
const Llmgroup = db.LLMGROUP;
const Op = db.Sequelize.Op;

exports.FindAllLLB = (req, res) => {
        Llbgroup.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving Year."
            });
        });
}

exports.FindAllLLM = (req,res) =>{
    Llmgroup.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Year."
        });
    });
}