const db = require("../connect/Connect");
const FirstyearCriminal = db.FIRSTYEAR_CRIMINALLAW;
const FirstyearBusiness = db.FIRSTYEAR_BUSINESS;
const FirstyearHumanrights = db.FIRSTYEAR_HUMANRIGHTS;
const Op = db.Sequelize.Op;

exports.FindAll= async (req,res)=>{
    try{
        const student = await db.sequelize.query('SELECT LS.SNAME,FYH.LEGAL_RESEARCH,FYH.COMPARATIVE_STUDY,FYH.NEPALESE_STUDY,FYH.CIVIL_POLITICAL FROM llbstudent AS LS join FIRSTYEAR_HUMANRIGHTS AS FYH on LS.SID = FYH.SID', {
            type: db.sequelize.QueryTypes.SELECT
          });
    
          res.send(student);
    }
    catch(err){
        res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving Student Result."
          });
    }
}

exports.Search=async (req,res)=>{
    try{
        const student = await db.sequelize.query('SELECT LS.SNAME,FYH.LEGAL_RESEARCH,FYH.COMPARATIVE_STUDY,FYH.NEPALESE_STUDY,FYH.CIVIL_POLITICAL FROM llbstudent AS LS join FIRSTYEAR_HUMANRIGHTS AS FYH on LS.SID = FYH.SID WHERE LS.sname = (:name)', {
            replacements: {name: req.query.name},
            type: db.sequelize.QueryTypes.SELECT
          });
    
          res.send(student);
    }
    catch(err){
        res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving Student Result."
          });
    }
   
}

exports.Update = (req, res) => {
    const id = req.params.Id;

    FirstyearHumanrights.update(req.body, {
            where: { HUMANRIGHTID: id }
        })
        .then(num => {
            if (num == 1) {    
                res.send({
                message: "Student Result was updated successfully."
            });
            } else {
            res.send({
                message: `Cannot update Student Result with id=${id}. Maybe Student Result was not found or req.body is empty!`
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: 
            err.message || "Error updating Student Result with id=" + id
            });
        });
    
}

exports.Delete = (req, res) => {
    const id = req.params.Id;
    
        FirstyearHumanrights.destroy({
            where: { HUMANRIGHTID: id }
        })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Student Result was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete Student Result with id=${id}. Maybe Student was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete Student Result with id=" + id
          });
        });
    
}