const db = require("../connect/Connect");
const FirstyearHumanrights = db.FIRSTYEAR_HUMANRIGHTS;
const Llmstudent = db.LLMSTUDENT;
const Op = db.Sequelize.Op;

exports.FindAll= async (req,res)=>{
    try{
        const student = await db.sequelize.query('SELECT LS.SNAME,FYH.LEGAL_RESEARCH,FYH.COMPARATIVE_STUDY,FYH.NEPALESE_STUDY,FYH.CIVIL_POLITICAL FROM llmstudent AS LS join FIRSTYEAR_HUMANRIGHTS AS FYH on LS.SID = FYH.SID', {
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
  const HumanRights = {
    LEGAL_RESEARCH : req.body.LegalResearch,
    COMPARATIVE_STUDY : req.body.ComparativeStudy,
    NEPALESE_STUDY : req.body.NepaleseStudy,
    CIVIL_POLITICAL : req.body.CivilPolitical,
    LLMSTUDENTID : req.body.SId
  };

  FirstyearHumanrights.create(HumanRights)
      .then(data =>  {
         
        var totalMarks = 0;
        var percent = 0;

        if(data.LEGAL_RESEARCH != 'I' && data.COMPARATIVE_STUDY != 'I' && data.NEPALESE_STUDY != 'I' && data.CIVIL_POLITICAL != 'I'){
          totalMarks = parseInt(data.LEGAL_RESEARCH) + parseInt(data.COMPARATIVE_STUDY) + parseInt(data.NEPALESE_STUDY) + parseInt(data.CIVIL_POLITICAL);
          percent = (totalMarks / 400) * 100;
        }
        else if(data.LEGAL_RESEARCH == 'I' && data.COMPARATIVE_STUDY != 'I' && data.NEPALESE_STUDY != 'I' && data.CIVIL_POLITICAL != 'I'){
          totalMarks = parseInt(data.COMPARATIVE_STUDY) + parseInt(data.NEPALESE_STUDY) + parseInt(data.CIVIL_POLITICAL);
          percent = (totalMarks / 400) * 100;
        }
        else if(data.LEGAL_RESEARCH == 'I' && data.COMPARATIVE_STUDY == 'I' && data.NEPALESE_STUDY != 'I' && data.CIVIL_POLITICAL != 'I'){
          totalMarks = parseInt(data.NEPALESE_STUDY) + parseInt(data.CIVIL_POLITICAL);
          percent = (totalMarks / 400) * 100;
        }
        else if(data.LEGAL_RESEARCH == 'I' && data.COMPARATIVE_STUDY == 'I' && data.NEPALESE_STUDY == 'I' && data.CIVIL_POLITICAL != 'I'){
          totalMarks = parseInt(data.CIVIL_POLITICAL);
          percent = (totalMarks / 400) * 100;
        }
        else if(data.LEGAL_RESEARCH == 'I' && data.COMPARATIVE_STUDY == 'I' && data.NEPALESE_STUDY == 'I' && data.CIVIL_POLITICAL == 'I'){
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

exports.Search=async (req,res)=>{
    try{
        const student = await db.sequelize.query(`SELECT LS.SNAME,FYH.LEGAL_RESEARCH,FYH.COMPARATIVE_STUDY,FYH.NEPALESE_STUDY,FYH.CIVIL_POLITICAL 
        FROM llmstudent AS LS join FIRSTYEAR_HUMANRIGHTS AS FYH on LS.SID = FYH.SID 
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