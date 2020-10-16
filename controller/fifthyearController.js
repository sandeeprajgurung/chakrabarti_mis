const db = require("../connect/Connect");
const Fifthyear = db.FIFTHYEAR;
const FifthyearCriminal = db.FIFTHYEAR_CRIMINAL;
const FifthyearBusiness = db.FIFTHYEAR_BUSINESS;
const FifthyearConstitutional = db.FIFTHYEAR_CONSTITUTIONAL;
const FifthyearEnvironment = db.FIFTHYEAR_ENVIRONMENT;
const Op = db.Sequelize.Op;

exports.FindAll= async (req,res)=>{
    try{
        const student = await db.sequelize.query('SELECT LS.SNAME,FY.LEGAL_PHILOSOPHY,FY.AGRARIAN,FY.INTERNATIONAL_HUMANITARIAN,FY.CONSERVATION_LAW,FY.INTERNATIONAL_LAW,FY.PRE_TRIAL_PRESENTATION,FY.CLINICAL_EDUCATION,FY.DISSERTATION,IFNULL(FYC.ORGANIZED_CRIME,0),IFNULL(FYC.FISCAL_CRIME,0),IFNULL(FYB.INTELLECTUAL_PROPERTY,0),IFNULL(FYB.TAXATION,0),IFNULL(FYCN.LAW_OF_EQUITY,0),IFNULL(FYCN.LAW_ON_GENDER,0),IFNULL(FYE.ENERGY_LAW,0),IFNULL(FYE.CIVIL_AVIATION,0) FROM llbstudent AS LS join fifthyear AS FY on LS.SID = FY.SID left join FIFTHYEAR_CRIMINAL FYC on FYC.FIFTHYEARID = FY.FIFTHYEARID left join FIFTHYEAR_BUSINESS FYB ON FYB.FIFTHYEARID = FY.FIFTHYEARID left join FIFTHYEAR_CONSTITUTIONAL FYCN ON FYCN.FIFTHYEARID = FY.FIFTHYEARID left join FIFTHYEAR_ENVIRONMENT FYE ON FYE.FIFTHYEARID = FY.FIFTHYEARID', {
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

exports.CreateCriminal = (req, res) => {
    const fifthyear = {
        LEGAL_PHILOSOPHY : req.body.LegalPhilosophy,
        AGRARIAN : req.body.Agrarian,
        INTERNATIONAL_HUMANITARIAN : req.body.InternationalHumanitarian,
        CONSERVATION_LAW : req.body.ConservationLaw,
        INTERNATIONAL_LAW : req.body.InternationalLaw,
        PRE_TRIAL_PRESENTATION : req.body.PreTrialPresentation,
        CLINICAL_EDUCATION : req.body.ClinicalEducation,
        DISSERTATION : req.body.Dissertation,
        SID : req.body.SId
    };

    Fifthyear.create(fifthyear)
        .then(data =>  {
            
                const fifthyearcriminal = {
                    ORGANIZED_CRIME : req.body.OrganizedCrime,
                    FISCAL_CRIME : req.body.FiscalCrime,
                    FIFTHYEARID : data.FIFTHYEARID
                };
    
                FifthyearCriminal.create(fifthyearcriminal)
                .then(data1 => {
                  res.send(data1);
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                        err.message || "Some error occurred while entering marks."
                    });
                })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while entering marks."
            });
        });

    })
}

exports.CreateBusiness = (req, res) => {
    const fifthyear = {
        LEGAL_PHILOSOPHY : req.body.LegalPhilosophy,
        AGRARIAN : req.body.Agrarian,
        INTERNATIONAL_HUMANITARIAN : req.body.InternationalHumanitarian,
        CONSERVATION_LAW : req.body.ConservationLaw,
        INTERNATIONAL_LAW : req.body.InternationalLaw,
        PRE_TRIAL_PRESENTATION : req.body.PreTrialPresentation,
        CLINICAL_EDUCATION : req.body.ClinicalEducation,
        DISSERTATION : req.body.Dissertation,
        SID : req.body.SId
    };

        Fifthyear.create(fifthyear)
        .then(data => {
                const fifthyearbusiness = {
                    INTELLECTUAL_PROPERTY : req.body.IntellectualProperty,
                    TAXATION : req.body.Taxation,
                    FIFTHYEARID : data.FIFTHYEARID
                };
    
                FifthyearBusiness.create(fifthyearbusiness)
                .then(data2 => {
                  res.send(data2);
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

exports.CreateConstitution = (req, res) => {
    const fifthyear = {
        LEGAL_PHILOSOPHY : req.body.LegalPhilosophy,
        AGRARIAN : req.body.Agrarian,
        INTERNATIONAL_HUMANITARIAN : req.body.InternationalHumanitarian,
        CONSERVATION_LAW : req.body.ConservationLaw,
        INTERNATIONAL_LAW : req.body.InternationalLaw,
        PRE_TRIAL_PRESENTATION : req.body.PreTrialPresentation,
        CLINICAL_EDUCATION : req.body.ClinicalEducation,
        DISSERTATION : req.body.Dissertation,
        SID : req.body.SId
    };

    Fifthyear.create(fifthyear)
        .then(data => {
            const fifthyearconstitution = {
                LAW_OF_EQUITY : req.body.LawOfEquity,
                LAW_ON_GENDER : req.body.LawOfGender,
                FIFTHYEARID : data.FIFTHYEARID
            };

            FifthyearConstitutional.create(fifthyearconstitution)
            .then(data3 => {
              res.send(data3);
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

exports.CreateEnvironment = (req, res) => {
    const fifthyear = {
        LEGAL_PHILOSOPHY : req.body.LegalPhilosophy,
        AGRARIAN : req.body.Agrarian,
        INTERNATIONAL_HUMANITARIAN : req.body.InternationalHumanitarian,
        CONSERVATION_LAW : req.body.ConservationLaw,
        INTERNATIONAL_LAW : req.body.InternationalLaw,
        PRE_TRIAL_PRESENTATION : req.body.PreTrialPresentation,
        CLINICAL_EDUCATION : req.body.ClinicalEducation,
        DISSERTATION : req.body.Dissertation,
        SID : req.body.SId
    };

    Fifthyear.create(fifthyear)
        .then(data => {
            const fifthyearenvironment = {
                ENERGY_LAW : req.body.EnergyLaw,
                CIVIL_AVIATION : req.body.CivilAviation,
                FIFTHYEARID : data.FIFTHYEARID
            };

            FifthyearEnvironment.create(fifthyearenvironment)
            .then(data3 => {
              res.send(data3);
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

exports.Search=async (req,res)=>{
    try{
        const student = await db.sequelize.query('SELECT LS.SNAME,FY.LEGAL_PHILOSOPHY,FY.AGRARIAN,FY.INTERNATIONAL_HUMANITARIAN,FY.CONSERVATION_LAW,FY.INTERNATIONAL_LAW,FY.PRE_TRIAL_PRESENTATION,FY.CLINICAL_EDUCATION,FY.DISSERTATION,IFNULL(FYC.ORGANIZED_CRIME,0),IFNULL(FYC.FISCAL_CRIME,0),IFNULL(FYB.INTELLECTUAL_PROPERTY,0),IFNULL(FYB.TAXATION,0),IFNULL(FYCN.LAW_OF_EQUITY,0),IFNULL(FYCN.LAW_ON_GENDER,0),IFNULL(FYE.ENERGY_LAW,0),IFNULL(FYE.CIVIL_AVIATION,0) FROM llbstudent AS LS join fifthyear AS FY on LS.SID = FY.SID left join FIFTHYEAR_CRIMINAL FYC on FYC.FIFTHYEARID = FY.FIFTHYEARID left join FIFTHYEAR_BUSINESS FYB ON FYB.FIFTHYEARID = FY.FIFTHYEARID left join FIFTHYEAR_CONSTITUTIONAL FYCN ON FYCN.FIFTHYEARID = FY.FIFTHYEARID left join FIFTHYEAR_ENVIRONMENT FYE ON FYE.FIFTHYEARID = FY.FIFTHYEARID WHERE LS.PRGID = (:prgid) AND LS.GRPID = (:grpid)', {
            replacements: {
                prgid: req.query.prgid,
                grpid : req.query.grpid
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

exports.UpdateCriminal = (req, res) => {
    const id = req.params.Id;
    const cid = req.params.CId;

    Fifthyear.update(req.body, {
            where: { FIFTHYEARID: id }
        })
        .then(num => {
            if (num == 1) {
                const criminal = {
                    ORGANIZED_CRIME : req.body.Criminal.OrganizedCrime,
                    FISCAL_CRIME : req.body.Criminal.FiscalCrime
                };

                FifthyearCriminal.update(criminal)({
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

    Fifthyear.update(req.body, {
            where: { FIFTHYEARID: id }
        })
        .then(num => {
            if (num == 1) {
                const business = {
                    INTELLECTUAL_PROPERTY : req.body.Business.IntellectualProperty,
                    TAXATION : req.body.Business.Taxation
                };

                FifthyearBusiness.update(business)({
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

    Fifthyear.update(req.body, {
            where: { FIFTHYEARID: id }
        })
        .then(num => {
            if (num == 1) {
                const constitutional = {
                    LAW_OF_EQUITY : req.body.Constitutional.LawOfEquity,
                    LAW_ON_GENDER : req.body.Constitutional.LawOfGender
                };

                FifthyearConstitutional.update(constitutional)({
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

    Fifthyear.update(req.body, {
            where: { FIFTHYEARID: id }
        })
        .then(num => {
            if (num == 1) {
                const environment = {
                    ENERGY_LAW : req.body.Constitutional.EnergyLaw,
                    CIVIL_AVIATION : req.body.Constitutional.CivilAviation
                };

                FifthyearEnvironment.update(environment)({
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
    
        Fifthyear.destroy({
            where: { FIFTHYEARID: id }
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