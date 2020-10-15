const db = require("../connect/Connect");
const FirstyearBusiness = db.FIRSTYEAR_BUSINESS;
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
    SID : req.body.SId
  };

  FirstyearBusiness.create(Business)
      .then(data =>  {
          res.send(data);
              })
      .catch(err => {
          res.status(500).send({
              message:
              err.message || "Some error occurred while entering marks."
          });
        })
}