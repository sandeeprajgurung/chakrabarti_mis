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
        const thirdyear = {
            INTERNATIONAL_HUMAN_RIGHT : req.body.InternationalHumanRight,
            INTERPRETATION : req.body.Interpretation,
            LAW_EVIDENCE : req.body.LawEvidence,
            INTERNATIONAL_LAW : req.body.InternationalLaw,
            CONSTITUTIONAL_LAW : req.body.ConstitutionalLaw,
            LEGAL_RESEARCH : req.body.LegalResearch,
            PROFESSIONAL_ETHICS : req.body.ProfessionalEthics,
            CLINICAL_LEGAL_EDUCATION : req.body.ClinicalLegalEducation,
            CLINICAL_WORK : req.body.ClinicalWork,
            SID : req.body.SId,
            PRGID : req.body.PrgId
        };

        Thirdyear.create(thirdyear)
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
        const fourthyear = {
            CLINICAL_EDUCATION : req.body.ClinicalEducation,
            ADVANCED_JURISPRUDENCE : req.body.AdvanceJurisprudence,
            CONTRACT_LAW : req.body.ContractLaw,
            COMPANY_LAW : req.body.CompanyLaw,
            ADMINISTATIVE_LAW : req.body.AdministativeLaw,
            CLINICAL_LEGAL_EDUCATION : req.body.ClinicalLegalEducation,
            INTERNATIONAL_DISPUTES : req.body.InternationDisputes,
            SID : req.body.SId,
            PRGID : req.body.PrgId
        };

        Fourthyear.create(fourthyear)
        .then(data => {
            if(req.body.Criminal == '' && req.body.Business == '' && req.body.Constitution == '' && req.body.Environment == ''){
                res.send(data);
            }
            else if(req.body.Criminal != ""){
                const fourthyearcriminal = {
                    FORENSIC : req.body.Criminal.Forensic,
                    CRIMINOLOGY : req.body.Criminal.Criminology,
                    FOURTHYEARID : req.body.Criminal.FourthYearId
                };
    
                FourthyearCriminal.create(fourthyearcriminal)
                .then(data1 => {
                  res.send(data1);
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                        err.message || "Some error occurred while entering marks."
                    });
                });
            }
            else if(req.body.Business != ''){
                const fourthyearbusiness = {
                    BANKING_INSURANCE : req.body.Business.BankingInsurance,
                    INTERNATIONAL_TRADE : req.body.Business.InternationalTrade,
                    FOURTHYEARID : req.body.Business.FourthYearId
                };
    
                FourthyearBusiness.create(fourthyearbusiness)
                .then(data2 => {
                  res.send(data2);
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                        err.message || "Some error occurred while entering marks."
                    });
                });
            }
            else if(req.body.Constitution != ''){
                const fourthyearconstitution = {
                    GOOD_GONERNANCE : req.body.Constitution.GoodGovernance,
                    ELECTORAL_LAW : req.body.Constitution.ElectroalLaw,
                    FOURTHYEARID : req.body.Constitution.FourthYearId
                };
    
                FourthyearConstitutional.create(fourthyearconstitution)
                .then(data3 => {
                  res.send(data3);
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                        err.message || "Some error occurred while entering marks."
                    });
                });
            }
            else if(req.body.Environment != ''){
                const fourthyearenvironment = {
                    WATER_RIVER : req.body.Environment.WaterRiver,
                    ENVIRONMENT_LAW : req.body.Environment.EnvironmentLaw,
                    FOURTHYEARID : req.body.Environment.FourthYearId
                };
    
                FourthyearEnvironment.create(fourthyearenvironment)
                .then(data4 => {
                  res.send(data4);
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
          
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while entering marks."
            });
        });

    }
}