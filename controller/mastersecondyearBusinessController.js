const db = require("../connect/Connect");
const SecondyearBusiness = db.SECONDYEAR_BUSINESS;
const Op = db.Sequelize.Op;

exports.Create = (req, res) => {
  const Business = {
    BANKING_LAW : req.body.BankingLaw,
    CORPORATE_MANAGEMENT : req.body.CorporateManagement,
    TRADE_LAW : req.body.TradeLaw,
    TAXATION : req.body.Taxation,
    INSURANCE: req.body.Insurance,
    DISSERTATION : req.body.Dissertation,
    SID : req.body.SId
  };

  SecondyearBusiness.create(Business)
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