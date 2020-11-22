const db = require("../connect/Connect");
const FirstyearCriminal = db.FIRSTYEAR_CRIMINALLAW;
const Llmstudent = db.LLMSTUDENT;
const Op = db.Sequelize.Op;

exports.FindAll = async (req, res) => {

  Llmstudent.findAll({
    include: [{
      model: FirstyearCriminal
    }],
    raw: true
  })
    .then(data => {
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
  const Criminal = {
    LEGAL_RESEARCH : req.body.LegalResearch,
    COMPARATIVE_STUDY : req.body.ComparativeStudy,
    CRIMINAL_LAW : req.body.CriminalLaw,
    FORENSIC : req.body.Forensic,
    JUVINAL_JUSTICE : req.body.JuvinalJustice,
    LLMSTUDENTID : req.body.SId
  };

  FirstyearCriminal.create(Criminal)
      .then(data =>  {
         
        var totalMarks = 0;
        var percent = 0;

        if(data.LEGAL_RESEARCH != 'I' && data.COMPARATIVE_STUDY != 'I' && data.CRIMINAL_LAW != 'I' && data.FORENSIC != 'I' && data.JUVINAL_JUSTICE != 'I'){
          totalMarks = parseInt(data.LEGAL_RESEARCH) + parseInt(data.COMPARATIVE_STUDY) + parseInt(data.CRIMINAL_LAW) + parseInt(data.FORENSIC) + parseInt(data.JUVINAL_JUSTICE);
          percent = (totalMarks / 400) * 100;
        }
        else if(data.LEGAL_RESEARCH == 'I' && data.COMPARATIVE_STUDY != 'I' && data.CRIMINAL_LAW != 'I' && data.FORENSIC != 'I' && data.JUVINAL_JUSTICE != 'I'){
          totalMarks = parseInt(data.COMPARATIVE_STUDY) + parseInt(data.CRIMINAL_LAW) + parseInt(data.FORENSIC) + parseInt(data.JUVINAL_JUSTICE);
          percent = (totalMarks / 400) * 100;
        }
        else if(data.LEGAL_RESEARCH == 'I' && data.COMPARATIVE_STUDY == 'I' && data.CRIMINAL_LAW != 'I' && data.FORENSIC != 'I' && data.JUVINAL_JUSTICE != 'I'){
          totalMarks = parseInt(data.CRIMINAL_LAW) + parseInt(data.FORENSIC) + parseInt(data.JUVINAL_JUSTICE);
          percent = (totalMarks / 400) * 100;
        }
        else if(data.LEGAL_RESEARCH == 'I' && data.COMPARATIVE_STUDY == 'I' && data.CRIMINAL_LAW == 'I' && data.FORENSIC != 'I' && data.JUVINAL_JUSTICE != 'I'){
          totalMarks = parseInt(data.FORENSIC) + parseInt(data.JUVINAL_JUSTICE);
          percent = (totalMarks / 400) * 100;
        }
        else if(data.LEGAL_RESEARCH == 'I' && data.COMPARATIVE_STUDY == 'I' && data.CRIMINAL_LAW == 'I' && data.FORENSIC == 'I' && data.JUVINAL_JUSTICE != 'I'){
          totalMarks = parseInt(data.JUVINAL_JUSTICE);
          percent = (totalMarks / 400) * 100;
        }
        else if(data.LEGAL_RESEARCH == 'I' && data.COMPARATIVE_STUDY == 'I' && data.CRIMINAL_LAW == 'I' && data.FORENSIC == 'I' && data.JUVINAL_JUSTICE == 'I'){
          percent = 0;
        }

        Llmstudent.update(
          { PERCENT : percent}, 
          {where : {SID : req.body.SId}}
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
        })
}

exports.Delete = (req, res) => {
  const id = req.params.Id;

  FirstyearCriminal.findAll({ where: { ID: id }, raw: true })
    .then(data => {
      Llmstudent.update(
        { PERCENT: null },
        { where: { ID: data[0].LLMSTUDENTID } },
      )
        .then(num => {
          if (num == 1) {
            FirstyearCriminal.destroy({
              where: { ID: id }
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
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Student with id=" + id
      });
    });

  

}