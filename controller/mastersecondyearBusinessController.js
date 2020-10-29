const db = require("../connect/Connect");
const SecondyearBusiness = db.SECONDYEAR_BUSINESS;
const Llmstudent = db.LLMSTUDENT;
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
          
        var totalMarks = 0;
        var percent = 0;

        if(data.BANKING_LAW != 'I' && data.CORPORATE_MANAGEMENT != 'I' && data.TRADE_LAW != 'I' && data.TAXATION != 'I' && data.INSURANCE != 'I' && data.DISSERTATION != 'I') {
          totalMarks = parseInt(data.BANKING_LAW) + parseInt(data.CORPORATE_MANAGEMENT) + parseInt(data.TRADE_LAW) + parseInt(data.TAXATION) + parseInt(data.INSURANCE) + parseInt(data.DISSERTATION);
          percent = ( totalMarks / 400) * 100;
        }
        else if(data.BANKING_LAW == 'I' && data.CORPORATE_MANAGEMENT != 'I' && data.TRADE_LAW != 'I' && data.TAXATION != 'I' && data.INSURANCE != 'I' && data.DISSERTATION != 'I') {
          totalMarks = parseInt(data.CORPORATE_MANAGEMENT) + parseInt(data.TRADE_LAW) + parseInt(data.TAXATION) + parseInt(data.INSURANCE) + parseInt(data.DISSERTATION);
          percent = ( totalMarks / 400) * 100;
        }
        else if(data.BANKING_LAW == 'I' && data.CORPORATE_MANAGEMENT == 'I' && data.TRADE_LAW != 'I' && data.TAXATION != 'I' && data.INSURANCE != 'I' && data.DISSERTATION != 'I') {
          totalMarks = parseInt(data.TRADE_LAW) + parseInt(data.TAXATION) + parseInt(data.INSURANCE) + parseInt(data.DISSERTATION);
          percent = ( totalMarks / 400) * 100;
        }
        else if(data.BANKING_LAW == 'I' && data.CORPORATE_MANAGEMENT == 'I' && data.TRADE_LAW == 'I' && data.TAXATION != 'I' && data.INSURANCE != 'I' && data.DISSERTATION != 'I') {
          totalMarks = parseInt(data.TAXATION) + parseInt(data.INSURANCE) + parseInt(data.DISSERTATION);
          percent = ( totalMarks / 400) * 100;
        }
        else if(data.BANKING_LAW == 'I' && data.CORPORATE_MANAGEMENT == 'I' && data.TRADE_LAW == 'I' && data.TAXATION == 'I' && data.INSURANCE != 'I' && data.DISSERTATION != 'I') {
          totalMarks = parseInt(data.INSURANCE) + parseInt(data.DISSERTATION);
          percent = ( totalMarks / 400) * 100;
        }
        else if(data.BANKING_LAW == 'I' && data.CORPORATE_MANAGEMENT == 'I' && data.TRADE_LAW == 'I' && data.TAXATION == 'I' && data.INSURANCE == 'I' && data.DISSERTATION != 'I') {
          totalMarks = parseInt(data.DISSERTATION);
          percent = ( totalMarks / 400) * 100;
        }
        else if(data.BANKING_LAW == 'I' && data.CORPORATE_MANAGEMENT == 'I' && data.TRADE_LAW == 'I' && data.TAXATION == 'I' && data.INSURANCE == 'I' && data.DISSERTATION == 'I') {
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

  SecondyearBusiness.destroy({
    where: { SECOND_BUSINESSID: id }
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