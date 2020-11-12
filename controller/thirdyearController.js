const db = require("../connect/Connect");
const Thirdyear = db.THIRDYEAR;
const Llbstudent = db.LLBSTUDENT;
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
    LLBSTUDENTID : req.body.SId
  };

  Thirdyear.create(thirdyear)
  .then(data => {
    
    var totalMarks = 0;
    var percent = 0;

    if(data.INTERNATIONAL_HUMAN_RIGHT != 'I' && data.INTERPRETATION != 'I' && data.LAW_EVIDENCE != 'I' && data.INTERNATIONAL_LAW != 'I'
      && data.CONSTITUTIONAL_LAW != 'I' && data.LEGAL_RESEARCH != 'I' && data.PROFESSIONAL_ETHICS != 'I' && data.CLINICAL_LEGAL_EDUCATION != 'I'
      && data.CLINICAL_WORK != 'I') {
        totalMarks = parseInt(data.INTERNATIONAL_HUMAN_RIGHT) + parseInt(data.INTERPRETATION) + parseInt(data.LAW_EVIDENCE) + parseInt(data.INTERNATIONAL_LAW)
                      + parseInt(data.CONSTITUTIONAL_LAW) + parseInt(data.LEGAL_RESEARCH) + parseInt(data.PROFESSIONAL_ETHICS) + parseInt(data.CLINICAL_LEGAL_EDUCATION)
                      + parseInt(data.CLINICAL_WORK);
        percent = (totalMarks / 700) * 100;
    }
    else if(data.INTERNATIONAL_HUMAN_RIGHT == 'I' && data.INTERPRETATION != 'I' && data.LAW_EVIDENCE != 'I' && data.INTERNATIONAL_LAW != 'I'
    && data.CONSTITUTIONAL_LAW != 'I' && data.LEGAL_RESEARCH != 'I' && data.PROFESSIONAL_ETHICS != 'I' && data.CLINICAL_LEGAL_EDUCATION != 'I'
    && data.CLINICAL_WORK != 'I') {
      totalMarks = parseInt(data.INTERPRETATION) + parseInt(data.LAW_EVIDENCE) + parseInt(data.INTERNATIONAL_LAW)
                    + parseInt(data.CONSTITUTIONAL_LAW) + parseInt(data.LEGAL_RESEARCH) + parseInt(data.PROFESSIONAL_ETHICS) + parseInt(data.CLINICAL_LEGAL_EDUCATION)
                    + parseInt(data.CLINICAL_WORK);
      percent = (totalMarks / 700) * 100;
    }
    else if(data.INTERNATIONAL_HUMAN_RIGHT == 'I' && data.INTERPRETATION == 'I' && data.LAW_EVIDENCE != 'I' && data.INTERNATIONAL_LAW != 'I'
    && data.CONSTITUTIONAL_LAW != 'I' && data.LEGAL_RESEARCH != 'I' && data.PROFESSIONAL_ETHICS != 'I' && data.CLINICAL_LEGAL_EDUCATION != 'I'
    && data.CLINICAL_WORK != 'I') {
      totalMarks = parseInt(data.LAW_EVIDENCE) + parseInt(data.INTERNATIONAL_LAW)
                    + parseInt(data.CONSTITUTIONAL_LAW) + parseInt(data.LEGAL_RESEARCH) + parseInt(data.PROFESSIONAL_ETHICS) + parseInt(data.CLINICAL_LEGAL_EDUCATION)
                    + parseInt(data.CLINICAL_WORK);
      percent = (totalMarks / 700) * 100;
    }
    else if(data.INTERNATIONAL_HUMAN_RIGHT == 'I' && data.INTERPRETATION == 'I' && data.LAW_EVIDENCE == 'I' && data.INTERNATIONAL_LAW != 'I'
    && data.CONSTITUTIONAL_LAW != 'I' && data.LEGAL_RESEARCH != 'I' && data.PROFESSIONAL_ETHICS != 'I' && data.CLINICAL_LEGAL_EDUCATION != 'I'
    && data.CLINICAL_WORK != 'I') {
      totalMarks = parseInt(data.INTERNATIONAL_LAW) + parseInt(data.CONSTITUTIONAL_LAW) + parseInt(data.LEGAL_RESEARCH) 
      + parseInt(data.PROFESSIONAL_ETHICS) + parseInt(data.CLINICAL_LEGAL_EDUCATION) + parseInt(data.CLINICAL_WORK);
      percent = (totalMarks / 700) * 100;
    }
    else if(data.INTERNATIONAL_HUMAN_RIGHT == 'I' && data.INTERPRETATION == 'I' && data.LAW_EVIDENCE == 'I' && data.INTERNATIONAL_LAW == 'I'
    && data.CONSTITUTIONAL_LAW != 'I' && data.LEGAL_RESEARCH != 'I' && data.PROFESSIONAL_ETHICS != 'I' && data.CLINICAL_LEGAL_EDUCATION != 'I'
    && data.CLINICAL_WORK != 'I') {
      totalMarks = parseInt(data.CONSTITUTIONAL_LAW) + parseInt(data.LEGAL_RESEARCH) 
      + parseInt(data.PROFESSIONAL_ETHICS) + parseInt(data.CLINICAL_LEGAL_EDUCATION) + parseInt(data.CLINICAL_WORK);
      percent = (totalMarks / 700) * 100;
    }
    else if(data.INTERNATIONAL_HUMAN_RIGHT == 'I' && data.INTERPRETATION == 'I' && data.LAW_EVIDENCE == 'I' && data.INTERNATIONAL_LAW == 'I'
    && data.CONSTITUTIONAL_LAW == 'I' && data.LEGAL_RESEARCH != 'I' && data.PROFESSIONAL_ETHICS != 'I' && data.CLINICAL_LEGAL_EDUCATION != 'I'
    && data.CLINICAL_WORK != 'I') {
      totalMarks = parseInt(data.LEGAL_RESEARCH) + parseInt(data.PROFESSIONAL_ETHICS) + parseInt(data.CLINICAL_LEGAL_EDUCATION) + parseInt(data.CLINICAL_WORK);
      percent = (totalMarks / 700) * 100;
    }
    else if(data.INTERNATIONAL_HUMAN_RIGHT == 'I' && data.INTERPRETATION == 'I' && data.LAW_EVIDENCE == 'I' && data.INTERNATIONAL_LAW == 'I'
    && data.CONSTITUTIONAL_LAW == 'I' && data.LEGAL_RESEARCH == 'I' && data.PROFESSIONAL_ETHICS != 'I' && data.CLINICAL_LEGAL_EDUCATION != 'I'
    && data.CLINICAL_WORK != 'I') {
      totalMarks = parseInt(data.PROFESSIONAL_ETHICS) + parseInt(data.CLINICAL_LEGAL_EDUCATION) + parseInt(data.CLINICAL_WORK);
      percent = (totalMarks / 700) * 100;
    }
    else if(data.INTERNATIONAL_HUMAN_RIGHT == 'I' && data.INTERPRETATION == 'I' && data.LAW_EVIDENCE == 'I' && data.INTERNATIONAL_LAW == 'I'
    && data.CONSTITUTIONAL_LAW == 'I' && data.LEGAL_RESEARCH == 'I' && data.PROFESSIONAL_ETHICS == 'I' && data.CLINICAL_LEGAL_EDUCATION != 'I'
    && data.CLINICAL_WORK != 'I') {
      totalMarks = parseInt(data.CLINICAL_LEGAL_EDUCATION) + parseInt(data.CLINICAL_WORK);
      percent = (totalMarks / 700) * 100;
    }
    else if(data.INTERNATIONAL_HUMAN_RIGHT == 'I' && data.INTERPRETATION == 'I' && data.LAW_EVIDENCE == 'I' && data.INTERNATIONAL_LAW == 'I'
    && data.CONSTITUTIONAL_LAW == 'I' && data.LEGAL_RESEARCH == 'I' && data.PROFESSIONAL_ETHICS == 'I' && data.CLINICAL_LEGAL_EDUCATION == 'I'
    && data.CLINICAL_WORK != 'I') {
      totalMarks = parseInt(data.CLINICAL_WORK);
      percent = (totalMarks / 700) * 100;
    }
    else if(data.INTERNATIONAL_HUMAN_RIGHT == 'I' && data.INTERPRETATION == 'I' && data.LAW_EVIDENCE == 'I' && data.INTERNATIONAL_LAW == 'I'
    && data.CONSTITUTIONAL_LAW == 'I' && data.LEGAL_RESEARCH == 'I' && data.PROFESSIONAL_ETHICS == 'I' && data.CLINICAL_LEGAL_EDUCATION == 'I'
    && data.CLINICAL_WORK == 'I') {
      percent = 0;
    }

    Llbstudent.update(
      { PERCENT : percent}, 
      {where : {ID : req.body.SId}}
    )
    .then (data1 => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
          message:
          err.message || "Some error occurred while entering marks."
      });
  });

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
            where: { ID: id }
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
            where: { ID: id }
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