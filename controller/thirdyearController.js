const db = require("../connect/Connect");
const Thirdyear = db.THIRDYEAR;
const Op = db.Sequelize.Op;

exports.FindAll=(req,res)=>{
    Thirdyear.findAll()
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

exports.Create = (req, res) => {
  const thirdyear = {
    INTERNATIONAL_HUMAN_RIGHT : req.body.InternationalHumanRight,
    INTERPRETATION : req.body.Interpretation,
    LAW_EVIDENCE : req.body.LawEvidence,
    INTERNATIONAL_LAW : req.body.InternationalLaw,
    CONSTITUTIONAL_LAW : req.body.ConstitutionalLaw,
    LEGAL_RESEARCH : req.body.LegalResearch,
    PROFESSIONAL_ETHICS : req.body.ProfessionalEthics,
    CLINICAL_LEGAL_EDUCATION : req.body.ClinicalLegalEducation,
    CLINICAL_WORK : req.body.ClinicalWork,
    SID : req.body.SId,
    PRGID : req.body.PrgId
  };

  Thirdyear.create(thirdyear)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
      res.status(500).send({
          message:
          err.message || "Some error occurred while entering marks."
      });
  });
}

exports.Search=async (req,res)=>{
    try{
        const student = await db.sequelize.query('SELECT LS.SNAME,TY.INTERNATIONAL_HUMAN_RIGHT,TY.INTERPRETATION,TY.LAW_EVIDENCE,TY.INTERNATIONAL_LAW,TY.CONSTITUTIONAL_LAW,TY.LEGAL_RESEARCH,TY.PROFESSIONAL_ETHICS,TY.CLINICAL_LEGAL_EDUCATION,TY.CLINICAL_WORK FROM llbstudent AS LS join thirdyear AS TY on LS.SID = TY.SID WHERE LS.PRGID = (:prgid)', {
            replacements: {prgid: req.query.prgid},
            type: db.sequelize.QueryTypes.SELECT
          });
    
          res.send(student);
    }
    catch(err){
        res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving Student."
          });
    }
   
}



exports.Update = (req, res) => {
    const id = req.params.Id;

    Thirdyear.update(req.body, {
            where: { THIRDYEARID: id }
        })
        .then(num => {
            if (num == 1) {
            res.send({
                message: "Student was updated successfully."
            });
            } else {
            res.send({
                message: `Cannot update Student with id=${id}. Maybe Student was not found or req.body is empty!`
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: 
            err.message || "Error updating Student with id=" + id
            });
        });
    
}

exports.Delete = (req, res) => {
    const id = req.params.Id;
    
        Thirdyear.destroy({
            where: { THIRDYEARID: id }
        })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Student was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete Student with id=${id}. Maybe Student was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete Student with id=" + id
          });
        });
    
}