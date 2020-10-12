const db = require("../connect/Connect");
const fourthyear_criminal = require("../model/fourthyear_criminal");
const Firstyear = db.FIRSTYEAR;
const Secondyear = db.SECONDYEAR;
const Thirdyear = db.THIRDYEAR; 
const Fourthyear = db.FOURTHYEAR;
const FourthyearCriminal = db.FOURTHYEAR_CRIMINAL
const FourthyearBusiness = db.FOURTHYEAR_BUSINESS
const FourthyearConstitutional = db.FOURTHYEAR_CONSTITUTIONAL
const FourthyearEnvironment = db.FOURTHYEAR_ENVIRONMENT
const Op = db.Sequelize.Op;

exports.Create = (req, res) => {
    

    if(req.body.Year == 'FirstYear'){
        const firstyear = {
            POLITICAL : req.body.Political,
            ECONOMIC : req.body.Economic,
            HISTORY_OF_NEPAL : req.body.HistoryOfNepal,
            SOCOLOGY : req.body.Socology,
            PRINCIPLE_OF_LAW : req.body.PrincipleOfLaw,
            CONCEPT_OF_LAW : req.body.ConceptOfLaw,
            LOGIC_LEGAL_REASONING : req.body.LogicLegalReasoning,
            CLINICAL_WORK : req.body.ClinicalWork,
            SID : req.body.SId,
            PRGID : req.body.PrgId
        };

        Firstyear.create(firstyear)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while entering marks."
            });
        });
    }
    else if(req.body.Year == 'SecondYear'){
        const secondyear = {
            ENGLISH : req.body.English,
            NEPALI : req.body.Nepali,
            INTERNATIONAL_RELATION : req.body.InternationalRelation,
            LEGISLATIVE_PRINCIPLE : req.body.LegislativePrinciple,
            PROCEDURE_LAW : req.body.ProcedureLaw,
            SOCOLOGY : req.body.Socology,
            CRIMINAL_LAW : req.body.CriminalLaw,
            CLINICAL_COURSE : req.body.ClinicalCourse,
            SID : req.body.SId,
            PRGID : req.body.PrgId
        };

        Secondyear.create(secondyear)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while entering marks."
            });
        });
    }
    else if(req.body.Year == 'Thirdyear'){
        Thirdyear.create(marks)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while entering marks."
            });
        });
    }
    else if(req.body.Year == 'Fourthyear'){
        Fourthyear.create(marks)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while entering marks."
            });
        });

        if(req.body.body == 'Criminal'){
            const fourthyearcriminal = {
                FORENSIC : req.body.Group.Forensic,
                CRIMINOLOGY : req.body.Group.Criminology,
                FOURTHYEARID : req.body.Group.FourthYearId
            };

            FourthyearCriminal.create(fourthyearcriminal)
            .then(data => {
              res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                    err.message || "Some error occurred while entering marks."
                });
            });
        }
        else if(req.body.body == 'Business'){
            const fourthyearbusiness = {
                BANKING_INSURANCE : req.body.BankingInsurance,
                INTERNATIONAL_TRADE : req.body.InternationalTrade,
                FOURTHYEARID : req.body.FourthYearId
            };

            FourthyearBusiness.create(fourthyearbusiness)
            .then(data => {
              res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                    err.message || "Some error occurred while entering marks."
                });
            });
        }
        else if(req.body.body == 'Constitution'){
            const fourthyearconstitution = {
                GOOD_GONERNANCE : req.body.GoodGovernance,
                ELECTORAL_LAW : req.body.ElectroalLaw,
                FOURTHYEARID : req.body.FourthYearId
            };

            FourthyearConstitutional.create(fourthyearconstitution)
            .then(data => {
              res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                    err.message || "Some error occurred while entering marks."
                });
            });
        }
        else if(req.body.body == 'Environment'){
            const fourthyearenvironment = {
                WATER_RIVER : req.body.WaterRiver,
                ENVIRONMENT_LAW : req.body.EnvironmentLaw,
                FOURTHYEARID : req.body.FourthYearId
            };

            FourthyearEnvironment.create(fourthyearenvironment)
            .then(data => {
              res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                    err.message || "Some error occurred while entering marks."
                });
            });
        }
        else {
            res.status(500).send({
                message:
                err.message || "Some error occurred while entering marks for group student."
            });
        }
    }
}