const db = require("../connect/Connect");
const Firstyear = db.FIRSTYEAR;
const Llbstudent = db.LLBSTUDENT;
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

exports.Create = (req, res) => {
  const firstyear = {
    POLITICAL : req.body.Political,
    ECONOMIC : req.body.Economic,
    HISTORY_OF_NEPAL : req.body.HistoryOfNepal,
    SOCOLOGY : req.body.Socology,
    PRINCIPLE_OF_LAW : req.body.PrincipleOfLaw,
    CONCEPT_OF_LAW : req.body.ConceptOfLaw,
    LOGIC_LEGAL_REASONING : req.body.LogicLegalReasoning,
    CLINICAL_WORK : req.body.ClinicalWork,
    LLBSTUDENTID : req.body.SId
  };

      Firstyear.create(firstyear)
      .then(data => {
      var totalMarks = 0;
      var percent = 0;
        if(data.POLITICAL != 'I' && data.ECONOMIC != 'I' && data.HISTORY_OF_NEPAL != 'I' && data.SOCOLOGY != 'I' && data.PRINCIPLE_OF_LAW != 'I'
            && data.CONCEPT_OF_LAW != 'I' && data.LOGIC_LEGAL_REASONING != 'I' && data.CLINICAL_WORK != 'I'){
                totalMarks = parseInt(data.POLITICAL) + parseInt(data.ECONOMIC) + parseInt(data.HISTORY_OF_NEPAL) + parseInt(data.SOCOLOGY) + parseInt(data.PRINCIPLE_OF_LAW)
                                  + parseInt(data.CONCEPT_OF_LAW) + parseInt(data.LOGIC_LEGAL_REASONING) + parseInt(data.CLINICAL_WORK);  
                percent = (totalMarks / 650) * 100 ;
        }
        else if(data.POLITICAL == 'I' && data.ECONOMIC != 'I' && data.HISTORY_OF_NEPAL != 'I' && data.SOCOLOGY != 'I' && data.PRINCIPLE_OF_LAW != 'I'
            && data.CONCEPT_OF_LAW != 'I' && data.LOGIC_LEGAL_REASONING != 'I' && data.CLINICAL_WORK != 'I'){
                totalMarks = parseInt(data.ECONOMIC) + parseInt(data.HISTORY_OF_NEPAL) + parseInt(data.SOCOLOGY) + parseInt(data.PRINCIPLE_OF_LAW)
                                  + parseInt(data.CONCEPT_OF_LAW) + parseInt(data.LOGIC_LEGAL_REASONING) + parseInt(data.CLINICAL_WORK);      
                percent = (totalMarks / 650) * 100 ;   
        }
        else if(data.POLITICAL == 'I' && data.ECONOMIC == 'I' && data.HISTORY_OF_NEPAL != 'I' && data.SOCOLOGY != 'I' && data.PRINCIPLE_OF_LAW != 'I'
        && data.CONCEPT_OF_LAW != 'I' && data.LOGIC_LEGAL_REASONING != 'I' && data.CLINICAL_WORK != 'I'){
            totalMarks = parseInt(data.HISTORY_OF_NEPAL) + parseInt(data.SOCOLOGY) + parseInt(data.PRINCIPLE_OF_LAW)
                              + parseInt(data.CONCEPT_OF_LAW) + parseInt(data.LOGIC_LEGAL_REASONING) + parseInt(data.CLINICAL_WORK);    
            percent = (totalMarks / 650) * 100 ;
        }
        else if(data.POLITICAL == 'I' && data.ECONOMIC == 'I' && data.HISTORY_OF_NEPAL == 'I' && data.SOCOLOGY != 'I' && data.PRINCIPLE_OF_LAW != 'I'
        && data.CONCEPT_OF_LAW != 'I' && data.LOGIC_LEGAL_REASONING != 'I' && data.CLINICAL_WORK != 'I'){
            totalMarks = parseInt(data.SOCOLOGY) + parseInt(data.PRINCIPLE_OF_LAW)
                              + parseInt(data.CONCEPT_OF_LAW) + parseInt(data.LOGIC_LEGAL_REASONING) + parseInt(data.CLINICAL_WORK);    
            percent = (totalMarks / 650) * 100 ;
        }
        else if(data.POLITICAL == 'I' && data.ECONOMIC == 'I' && data.HISTORY_OF_NEPAL == 'I' && data.SOCOLOGY == 'I' && data.PRINCIPLE_OF_LAW != 'I'
        && data.CONCEPT_OF_LAW != 'I' && data.LOGIC_LEGAL_REASONING != 'I' && data.CLINICAL_WORK != 'I'){
            totalMarks = parseInt(data.PRINCIPLE_OF_LAW) + parseInt(data.CONCEPT_OF_LAW) + parseInt(data.LOGIC_LEGAL_REASONING) + parseInt(data.CLINICAL_WORK); 
            percent = (totalMarks / 650) * 100 ;   
        }
        else if(data.POLITICAL == 'I' && data.ECONOMIC == 'I' && data.HISTORY_OF_NEPAL == 'I' && data.SOCOLOGY == 'I' && data.PRINCIPLE_OF_LAW == 'I'
        && data.CONCEPT_OF_LAW != 'I' && data.LOGIC_LEGAL_REASONING != 'I' && data.CLINICAL_WORK != 'I'){
            totalMarks = parseInt(data.CONCEPT_OF_LAW) + parseInt(data.LOGIC_LEGAL_REASONING) + parseInt(data.CLINICAL_WORK);    
            percent = (totalMarks / 650) * 100 ;
        }
        else if(data.POLITICAL == 'I' && data.ECONOMIC == 'I' && data.HISTORY_OF_NEPAL == 'I' && data.SOCOLOGY == 'I' && data.PRINCIPLE_OF_LAW == 'I'
        && data.CONCEPT_OF_LAW == 'I' && data.LOGIC_LEGAL_REASONING != 'I' && data.CLINICAL_WORK != 'I'){
            totalMarks = parseInt(data.LOGIC_LEGAL_REASONING) + parseInt(data.CLINICAL_WORK);   
            percent = (totalMarks / 650) * 100 ; 
        }
        else if(data.POLITICAL == 'I' && data.ECONOMIC == 'I' && data.HISTORY_OF_NEPAL == 'I' && data.SOCOLOGY == 'I' && data.PRINCIPLE_OF_LAW == 'I'
        && data.CONCEPT_OF_LAW == 'I' && data.LOGIC_LEGAL_REASONING == 'I' && data.CLINICAL_WORK != 'I'){
            totalMarks = parseInt(data.CLINICAL_WORK);
            percent = (totalMarks / 650) * 100 ;
        }
        else if(data.POLITICAL == 'I' && data.ECONOMIC == 'I' && data.HISTORY_OF_NEPAL == 'I' && data.SOCOLOGY == 'I' && data.PRINCIPLE_OF_LAW == 'I'
        && data.CONCEPT_OF_LAW == 'I' && data.LOGIC_LEGAL_REASONING == 'I' && data.CLINICAL_WORK == 'I'){
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
//         const student = await db.sequelize.query('SELECT LS.SNAME,FS.POLITICAL,FS.ECONOMIC,FS.HISTORY_OF_NEPAL,FS.SOCOLOGY,FS.PRINCIPLE_OF_LAW,FS.CONCEPT_OF_LAW,FS.LOGIC_LEGAL_REASONING,FS.CLINICAL_WORK FROM llbstudent AS LS join firstyear AS FS on LS.SID = FS.SID WHERE LS.PRGID = (:prgid)', {
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

exports.Search= (req,res)=>{
  Firstyear.findAll({
    where: { PRGID: req.query.prgid }
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

        Firstyear.update(req.body, {
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
    
        Firstyear.destroy({
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



