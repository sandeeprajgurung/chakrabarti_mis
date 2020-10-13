const db = require("../connect/Connect");
const Llbgroup = db.LLBGROUP;
const Llmgroup = db.LLMGROUP;
// const Op = db.Sequelize.Op;

exports.FindAll = (req, res) => {
    if(req.body.Programme == 'LLB'){
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
    else if(req.body.Programme == 'LLM') {
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
    else if(req.body.Programme == '') {
    }
    else {
        res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving Year."
          });
    }
    
}