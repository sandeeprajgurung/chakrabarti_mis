const db = require("../connect/Connect");
const Secondyear = db.SECONDYEAR;
const Llbstudent = db.LLBSTUDENT;
const Op = db.Sequelize.Op;

exports.FindAll=(req,res)=>{
    Secondyear.findAll()
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
  const secondyear = {
    ENGLISH : req.body.English,
    NEPALI : req.body.Nepali,
    INTERNATIONAL_RELATION : req.body.InternationalRelation,
    LEGISLATIVE_PRINCIPLE : req.body.LegislativePrinciple,
    PROCEDURE_LAW : req.body.ProcedureLaw,
    SOCOLOGY : req.body.Socology,
    CRIMINAL_LAW : req.body.CriminalLaw,
    CLINICAL_COURSE : req.body.ClinicalCourse,
    LLBSTUDENTID : req.body.SId
};

  Secondyear.create(secondyear)
  .then(data => {
    var totalMarks = 0;
      var percent = 0;

      if(data.ENGLISH != 'I' && data.NEPALI != 'I' && data.INTERNATIONAL_RELATION != 'I' && data.LEGISLATIVE_PRINCIPLE != 'I' && data.PROCEDURE_LAW != 'I'
        && data.SOCOLOGY != 'I' && data.CRIMINAL_LAW != 'I' && data.CLINICAL_COURSE != 'I') {
          totalMarks = parseInt(data.ENGLISH) + parseInt(data.NEPALI) + parseInt(data.INTERNATIONAL_RELATION) + parseInt(data.LEGISLATIVE_PRINCIPLE)
                        + parseInt(data.PROCEDURE_LAW) + parseInt(data.SOCOLOGY) + parseInt(data.CRIMINAL_LAW) + parseInt(data.CLINICAL_COURSE);
          percent = (totalMarks / 750) * 100;
        }
        else if(data.ENGLISH == 'I' && data.NEPALI != 'I' && data.INTERNATIONAL_RELATION != 'I' && data.LEGISLATIVE_PRINCIPLE != 'I' && data.PROCEDURE_LAW != 'I'
        && data.SOCOLOGY != 'I' && data.CRIMINAL_LAW != 'I' && data.CLINICAL_COURSE != 'I') {
          totalMarks = parseInt(data.NEPALI) + parseInt(data.INTERNATIONAL_RELATION) + parseInt(data.LEGISLATIVE_PRINCIPLE)
          + parseInt(data.PROCEDURE_LAW) + parseInt(data.SOCOLOGY) + parseInt(data.CRIMINAL_LAW) + parseInt(data.CLINICAL_COURSE);
          percent = (totalMarks / 750) * 100;
        }
        else if(data.ENGLISH == 'I' && data.NEPALI == 'I' && data.INTERNATIONAL_RELATION != 'I' && data.LEGISLATIVE_PRINCIPLE != 'I' && data.PROCEDURE_LAW != 'I'
        && data.SOCOLOGY != 'I' && data.CRIMINAL_LAW != 'I' && data.CLINICAL_COURSE != 'I') {
          totalMarks = parseInt(data.INTERNATIONAL_RELATION) + parseInt(data.LEGISLATIVE_PRINCIPLE) + parseInt(data.PROCEDURE_LAW)
                        + parseInt(data.SOCOLOGY) + parseInt(data.CRIMINAL_LAW) + parseInt(data.CLINICAL_COURSE);
          percent = (totalMarks / 750) * 100;
        }
        else if(data.ENGLISH == 'I' && data.NEPALI == 'I' && data.INTERNATIONAL_RELATION == 'I' && data.LEGISLATIVE_PRINCIPLE != 'I' && data.PROCEDURE_LAW != 'I'
        && data.SOCOLOGY != 'I' && data.CRIMINAL_LAW != 'I' && data.CLINICAL_COURSE != 'I') {
          totalMarks = parseInt(data.LEGISLATIVE_PRINCIPLE) + parseInt(data.PROCEDURE_LAW)
                        + parseInt(data.SOCOLOGY) + parseInt(data.CRIMINAL_LAW) + parseInt(data.CLINICAL_COURSE);
          percent = (totalMarks / 750) * 100;
        }
        else if(data.ENGLISH == 'I' && data.NEPALI == 'I' && data.INTERNATIONAL_RELATION == 'I' && data.LEGISLATIVE_PRINCIPLE == 'I' && data.PROCEDURE_LAW != 'I'
        && data.SOCOLOGY != 'I' && data.CRIMINAL_LAW != 'I' && data.CLINICAL_COURSE != 'I') {
          totalMarks =  parseInt(data.PROCEDURE_LAW) + parseInt(data.SOCOLOGY) + parseInt(data.CRIMINAL_LAW) + parseInt(data.CLINICAL_COURSE);
          percent = (totalMarks / 750) * 100;
        }
        else if(data.ENGLISH == 'I' && data.NEPALI == 'I' && data.INTERNATIONAL_RELATION == 'I' && data.LEGISLATIVE_PRINCIPLE == 'I' && data.PROCEDURE_LAW == 'I'
        && data.SOCOLOGY != 'I' && data.CRIMINAL_LAW != 'I' && data.CLINICAL_COURSE != 'I') {
          totalMarks = parseInt(data.SOCOLOGY) + parseInt(data.CRIMINAL_LAW) + parseInt(data.CLINICAL_COURSE);
          percent = (totalMarks / 750) * 100;
        }
        else if(data.ENGLISH == 'I' && data.NEPALI == 'I' && data.INTERNATIONAL_RELATION == 'I' && data.LEGISLATIVE_PRINCIPLE == 'I' && data.PROCEDURE_LAW == 'I'
        && data.SOCOLOGY == 'I' && data.CRIMINAL_LAW != 'I' && data.CLINICAL_COURSE != 'I') {
          totalMarks = parseInt(data.CRIMINAL_LAW) + parseInt(data.CLINICAL_COURSE);
          percent = (totalMarks / 750) * 100;
        }
        else if(data.ENGLISH == 'I' && data.NEPALI == 'I' && data.INTERNATIONAL_RELATION == 'I' && data.LEGISLATIVE_PRINCIPLE == 'I' && data.PROCEDURE_LAW == 'I'
        && data.SOCOLOGY == 'I' && data.CRIMINAL_LAW == 'I' && data.CLINICAL_COURSE != 'I') {
          totalMarks = parseInt(data.CLINICAL_COURSE);
          percent = (totalMarks / 750) * 100;
        }
        else if(data.ENGLISH == 'I' && data.NEPALI == 'I' && data.INTERNATIONAL_RELATION == 'I' && data.LEGISLATIVE_PRINCIPLE == 'I' && data.PROCEDURE_LAW == 'I'
        && data.SOCOLOGY == 'I' && data.CRIMINAL_LAW == 'I' && data.CLINICAL_COURSE == 'I') {
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

// exports.Search=async (req,res)=>{
//     try{
//         const student = await db.sequelize.query('SELECT LS.SNAME,SY.ENGLISH,SY.NEPALI,SY.INTERNATIONAL_RELATION,SY.LEGISLATIVE_PRINCIPLE,SY.PROCEDURE_LAW,SY.SOCOLOGY,SY.CRIMINAL_LAW,SY.CLINICAL_COURSE FROM llbstudent AS LS join secondyear AS SY on LS.SID = SY.SID WHERE LS.PRGID = (:prgid)', {
//             replacements: {prgid: req.query.prgid},
//             type: db.sequelize.QueryTypes.SELECT
//           });
    
//           res.send(student);
//     }
//     catch(err){
//         res.status(500).send({
//             message:
//               err.message || "Some error occurred while retrieving Student."
//           });
//     }
   
// }

exports.Search = (req, res) => {

  Secondyear.findAll({
    where: { PROGRAMMEID: req.query.prgid }
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

exports.Update = (req, res) => {
    const id = req.params.Id;

        Secondyear.update(req.body, {
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

  Secondyear.findAll({ where: { ID: id }, raw: true })
    .then(data => {
      Llbstudent.update(
        { PERCENT: null },
        { where: { ID: data[0].LLBSTUDENTID } },
      )
        .then(num => {
          if (num == 1) {
            Secondyear.destroy({
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