const db = require("../connect/Connect");
const fourthyear_criminal = require("../model/fourthyear_criminal");
const Firstyear = db.FIRSTYEAR;
const Llbstudent = db.LLBSTUDENT;
const Llbgroup = db.LLBGROUP;
const Op = db.Sequelize.Op;

exports.FindAll=(req,res)=>{
    Firstyear.findAll()
        .then(data =>{
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving Student."
            });
        });
}

exports.Search=(req,res)=>{
    const sname = req.params.Sname;
    Firstyear.findAll({
        include: [{
            model: Llbstudent,
            where: {SNAME: sname}
            // required: false,
           }]
    })
        .then(data =>{
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving Student."
            });
        });
}