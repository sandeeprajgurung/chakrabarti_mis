const db = require("../connect/Connect");
const SecondyearHuman = db.SECONDYEAR_HUMANRIGHTS;
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
          res.send(data);
              })
      .catch(err => {
          res.status(500).send({
              message:
              err.message || "Some error occurred while entering marks."
          });
        })
}