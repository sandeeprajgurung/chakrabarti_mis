const db = require("../connect/Connect");
const FirstyearBusiness = db.FIRSTYEAR_BUSINESS;
const Llmstudent = db.LLMSTUDENT;
const Op = db.Sequelize.Op;

exports.Search=async (req,res)=>{
    try{
        const student = await db.sequelize.query(`SELECT LS.SNAME,IFNULL(FB.LEGAL_RESEARCH,0),IFNULL(FB.COMPARATIVE_STUDY,0),IFNULL(FB.CONTRACT_LAW,0),IFNULL(FB.INTELLECTUAL_PROPERTY,0)
        FROM llmstudent AS LS join FIRSTYEAR_BUSINESS AS FB on LS.SID = FCL.SID 
        WHERE LS.PRGID = (:prgid) AND LS.GRPID = (:grpid)`, {
            replacements: {
              prgid: req.query.prgid,
              grpid: req.query.grpid
            },
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

exports.Create = (req, res) => {
  const Business = {
    LEGAL_RESEARCH : req.body.LegalResearch,
    COMPARATIVE_STUDY : req.body.ComparativeStudy,
    CONTRACT_LAW : req.body.ContractLaw,
    INTELLECTUAL_PROPERTY : req.body.IntellectualProperty,
    LLMSTUDENTID : req.body.SId
  };

  FirstyearBusiness.create(Business)
      .then(data =>  {
          
        var totalMarks = 0;
        var percent = 0;

        if(data.LEGAL_RESEARCH != 'I' && data.COMPARATIVE_STUDY != 'I' && data.CONTRACT_LAW != 'I' && data.INTELLECTUAL_PROPERTY != 'I'){
          totalMarks = parseInt(data.LEGAL_RESEARCH) + parseInt(data.COMPARATIVE_STUDY) + parseInt(data.CONTRACT_LAW) + parseInt(data.INTELLECTUAL_PROPERTY);
          percent = (totalMarks / 400) * 100;
        }
        else if(data.LEGAL_RESEARCH == 'I' && data.COMPARATIVE_STUDY != 'I' && data.CONTRACT_LAW != 'I' && data.INTELLECTUAL_PROPERTY != 'I'){
          totalMarks = parseInt(data.COMPARATIVE_STUDY) + parseInt(data.CONTRACT_LAW) + parseInt(data.INTELLECTUAL_PROPERTY);
          percent = (totalMarks / 400) * 100;
        }
        else if(data.LEGAL_RESEARCH == 'I' && data.COMPARATIVE_STUDY == 'I' && data.CONTRACT_LAW != 'I' && data.INTELLECTUAL_PROPERTY != 'I'){
          totalMarks = parseInt(data.CONTRACT_LAW) + parseInt(data.INTELLECTUAL_PROPERTY);
          percent = (totalMarks / 400) * 100;
        }
        else if(data.LEGAL_RESEARCH == 'I' && data.COMPARATIVE_STUDY == 'I' && data.CONTRACT_LAW == 'I' && data.INTELLECTUAL_PROPERTY != 'I'){
          totalMarks = parseInt(data.INTELLECTUAL_PROPERTY);
          percent = (totalMarks / 400) * 100;
        }
        else if(data.LEGAL_RESEARCH == 'I' && data.COMPARATIVE_STUDY == 'I' && data.CONTRACT_LAW == 'I' && data.INTELLECTUAL_PROPERTY == 'I'){
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

  FirstyearBusiness.destroy({
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

}