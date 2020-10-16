const db = require("../connect/Connect");
const SecondyearHuman = db.SECONDYEAR_HUMANRIGHTS;
const Llmstudent = db.LLMSTUDENT;
const Op = db.Sequelize.Op;

exports.Create = (req, res) => {
  const Human = {
    FEMINIST_JURISPRUDENCE : req.body.FeministJurisprudence,
    WOMEN_HUMAN_RIGHT : req.body.WomenHumanRights,
    ECONOMIC_SOCIAL_CULTURE : req.body.EconomicSocialCulture,
    DISSERTATION : req.body.Dissertation,
    SID : req.body.SId
  };

  SecondyearHuman.create(Human)
      .then(data =>  {
         
        var totalMarks = 0;
        var percent = 0;

        if(data.FEMINIST_JURISPRUDENCE != 'I' && data.WOMEN_HUMAN_RIGHT != 'I' && data.ECONOMIC_SOCIAL_CULTURE != 'I' && data.DISSERTATION != 'I'){
          totalMarks = parseInt(data.FEMINIST_JURISPRUDENCE) + parseInt(data.WOMEN_HUMAN_RIGHT) + parseInt(data.ECONOMIC_SOCIAL_CULTURE) + parseInt(data.DISSERTATION);
          percent = (totalMarks / 400) * 100;
        }
        else if(data.FEMINIST_JURISPRUDENCE == 'I' && data.WOMEN_HUMAN_RIGHT != 'I' && data.ECONOMIC_SOCIAL_CULTURE != 'I' && data.DISSERTATION != 'I'){
          totalMarks = parseInt(data.WOMEN_HUMAN_RIGHT) + parseInt(data.ECONOMIC_SOCIAL_CULTURE) + parseInt(data.DISSERTATION);
          percent = (totalMarks / 400) * 100;
        }
        else if(data.FEMINIST_JURISPRUDENCE == 'I' && data.WOMEN_HUMAN_RIGHT == 'I' && data.ECONOMIC_SOCIAL_CULTURE != 'I' && data.DISSERTATION != 'I'){
          totalMarks = parseInt(data.ECONOMIC_SOCIAL_CULTURE) + parseInt(data.DISSERTATION);
          percent = (totalMarks / 400) * 100;
        }
        else if(data.FEMINIST_JURISPRUDENCE == 'I' && data.WOMEN_HUMAN_RIGHT == 'I' && data.ECONOMIC_SOCIAL_CULTURE == 'I' && data.DISSERTATION != 'I'){
          totalMarks = parseInt(data.DISSERTATION);
          percent = (totalMarks / 400) * 100;
        }
        else if(data.FEMINIST_JURISPRUDENCE == 'I' && data.WOMEN_HUMAN_RIGHT == 'I' && data.ECONOMIC_SOCIAL_CULTURE == 'I' && data.DISSERTATION == 'I'){
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