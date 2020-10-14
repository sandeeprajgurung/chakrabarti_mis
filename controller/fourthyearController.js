const db = require("../connect/Connect");
const fourthyear = require("../model/fourthyear");
const Fourthyear = db.FOURTHYEAR;
const FourthyearCriminal = db.FOURTHYEAR_CRIMINAL;
const FourthyearBusiness = db.FOURTHYEAR_BUSINESS;
const FourthyearConstitutional = db.FOURTHYEAR_CONSTITUTIONAL;
const FourthyearEnvironment = db.FOURTHYEAR_ENVIRONMENT;
const Op = db.Sequelize.Op;

exports.FindAll= async (req,res)=>{
    try{
        const student = await db.sequelize.query('SELECT LS.SNAME,FY.CLINICAL_EDUCATION,FY.ADVANCED_JURISPRUDENCE,FY.CONTRACT_LAW,FY.COMPANY_LAW,FY.ADMINISTATIVE_LAW,FY.CLINICAL_LEGAL_EDUCATION,FY.INTERNATIONAL_DISPUTES,IFNULL(FYC.FORENSIC,0),IFNULL(FYC.CRIMINOLOGY,0),IFNULL(FYB.BANKING_INSURANCE,0),IFNULL(FYB.INTERNATIONAL_TRADE,0),IFNULL(FYCN.GOOD_GONERNANCE,0),IFNULL(FYCN.ELECTORAL_LAW,0),IFNULL(FYE.ENVIRONMENT_LAW,0),IFNULL(FYE.WATER_RIVER,0) FROM llbstudent AS LS join fourthyear AS FY on LS.SID = FY.SID left join FOURTHYEAR_CRIMINAL FYC on FYC.FOURTHYEARID = FY.FOURTHYEARID left join FOURTHYEAR_BUSINESS FYB ON FYB.FOURTHYEARID = FY.FOURTHYEARID left join FOURTHYEAR_CONSTITUTIONAL FYCN ON FYCN.FOURTHYEARID = FY.FOURTHYEARID left join FOURTHYEAR_ENVIRONMENT FYE ON FYE.FOURTHYEARID = FY.FOURTHYEARID', {
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

exports.Search=async (req,res)=>{
    try{
        const student = await db.sequelize.query('SELECT LS.SNAME,FY.CLINICAL_EDUCATION,FY.ADVANCED_JURISPRUDENCE,FY.CONTRACT_LAW,FY.COMPANY_LAW,FY.ADMINISTATIVE_LAW,FY.CLINICAL_LEGAL_EDUCATION,FY.INTERNATIONAL_DISPUTES,IFNULL(FYC.FORENSIC,0),IFNULL(FYC.CRIMINOLOGY,0),IFNULL(FYB.BANKING_INSURANCE,0),IFNULL(FYB.INTERNATIONAL_TRADE,0),IFNULL(FYCN.GOOD_GONERNANCE,0),IFNULL(FYCN.ELECTORAL_LAW,0),IFNULL(FYE.ENVIRONMENT_LAW,0),IFNULL(FYE.WATER_RIVER,0) FROM llbstudent AS LS join fourthyear AS FY on LS.SID = FY.SID left join FOURTHYEAR_CRIMINAL FYC on FYC.FOURTHYEARID = FY.FOURTHYEARID left join FOURTHYEAR_BUSINESS FYB ON FYB.FOURTHYEARID = FY.FOURTHYEARID left join FOURTHYEAR_CONSTITUTIONAL FYCN ON FYCN.FOURTHYEARID = FY.FOURTHYEARID left join FOURTHYEAR_ENVIRONMENT FYE ON FYE.FOURTHYEARID = FY.FOURTHYEARID WHERE LS.sname = (:name)', {
            replacements: {name: req.query.name},
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

exports.UpdateCriminal = (req, res) => {
    const id = req.params.Id;
    const cid = req.params.CId;

    Fourthyear.update(req.body, {
            where: { FOURTHYEARID: id }
        })
        .then(num => {
            if (num == 1) {
                const criminal = {
                    FORENSIC : req.body.Criminal.Forensic,
                    CRIMINOLOGY : req.body.Criminal.Criminology
                };

                FourthyearCriminal.update(criminal)({
                    where: { CRIMINALID : cid }
                })
                .then(num1 => {
                    res.send({
                        message: "Student Result was updated successfully."
                })
            
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

exports.UpdateBusiness = (req, res) => {
    const id = req.params.Id;
    const bid = req.params.BId;

    Fourthyear.update(req.body, {
            where: { FOURTHYEARID: id }
        })
        .then(num => {
            if (num == 1) {
                const business = {
                    BANKING_INSURANCE : req.body.Business.BankingInsurance,
                    INTERNATIONAL_TRADE : req.body.Business.InternationalTrade
                };

                FourthyearBusiness.update(business)({
                    where: { BUSINESSID : bid }
                })
                .then(num1 => {
                    res.send({
                        message: "Student Result was updated successfully."
                })
            
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

exports.UpdateConstitutional = (req, res) => {
    const id = req.params.Id;
    const cuid = req.params.CUId;

    Fourthyear.update(req.body, {
            where: { FOURTHYEARID: id }
        })
        .then(num => {
            if (num == 1) {
                const constitutional = {
                    GOOD_GONERNANCE : req.body.Constitutional.GoodGonernance,
                    ELECTORAL_LAW : req.body.Constitutional.ElectoralLaw
                };

                FourthyearConstitutional.update(constitutional)({
                    where: { CONSTITUTIONALID : cuid }
                })
                .then(num1 => {
                    res.send({
                        message: "Student Result was updated successfully."
                })
            
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

exports.UpdateEnvironment = (req, res) => {
    const id = req.params.Id;
    const eid = req.params.EId;

    fourthyear.update(req.body, {
            where: { FOURTHYEARID: id }
        })
        .then(num => {
            if (num == 1) {
                const environment = {
                    ENVIRONMENT_LAW : req.body.Constitutional.EnvironmentLaw,
                    WATER_RIVER : req.body.Constitutional.WaterRiver
                };

                FourthyearEnvironment.update(environment)({
                    where: { ENVIRONMENTID : eid }
                })
                .then(num1 => {
                    res.send({
                        message: "Student Result was updated successfully."
                })
            
            });
            } else {
            res.send({
                message: `Cannot update Student Result with id=${id}. Maybe Student was not found or req.body is empty!`
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
    
        Fourthyear.destroy({
            where: { FOURTHYEARID: id }
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