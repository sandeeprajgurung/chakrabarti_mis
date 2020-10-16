const db = require("../connect/Connect");
const SecondyearCriminal = db.SECONDYEAR_CRIMINALLAW;
const Op = db.Sequelize.Op;

exports.Create = (req, res) => {
  const Criminal = {
    CRIMINOLOGY : req.body.Criminology,
    FAIR_TRAIL : req.body.FairTrail,
    WHITE_COLLAR : req.body.WhiteCollar,
    DISSERTATION : req.body.Dissertation,
    SID : req.body.SId
  };

  SecondyearCriminal.create(Criminal)
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