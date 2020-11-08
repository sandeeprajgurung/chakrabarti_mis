const db = require("../connect/Connect");
const LLBStudent = db.LLBSTUDENT;
const LLMStudent = db.LLMSTUDENT;
const Firstyear = db.FIRSTYEAR;
const Secondyear = db.SECONDYEAR;
const Thirdyear = db.THIRDYEAR;
const Fourthyear = db.FOURTHYEAR;
const FourthyearCriminal = db.FOURTHYEAR_CRIMINAL;
const FourthyearBusiness = db.FOURTHYEAR_BUSINESS;
const FourthyearConstitutional = db.FOURTHYEAR_CONSTITUTIONAL;
const FourthyearEnvironment = db.FOURTHYEAR_ENVIRONMENT;
const Fifthyear = db.FIFTHYEAR;
const FifthyearCriminal = db.FIFTHYEAR_CRIMINAL;
const FifthyearBusiness = db.FIFTHYEAR_BUSINESS;
const FifthyearConstitutional = db.FIFTHYEAR_CONSTITUTIONAL;
const FifthyearEnvironment = db.FIFTHYEAR_ENVIRONMENT;
const FirstyearHumanRights = db.FIRSTYEAR_HUMANRIGHTS;
const FirstyearCriminal = db.FIRSTYEAR_CRIMINALLAW;
const FirstyearBusiness = db.FIRSTYEAR_BUSINESS;
const SecondyearHumanRights = db.SECONDYEAR_HUMANRIGHTS;
const SecondyearCriminal = db.SECONDYEAR_CRIMINALLAW;
const SecondyearBusiness = db.SECONDYEAR_BUSINESS;


exports.getLLBFirst = async (req, res) => {
    // try {
    //     const student = await db.sequelize.query(`SELECT LB.SNAME,LB.PERCENT,LB.ROLL_NO,LB.EXAM_NO,LB.BATCH,IFNULL(F.POLITICAL,0) AS POLITICAL,IFNULL(F.ECONOMIC,0) AS ECONOMIC,
    //     IFNULL(F.HISTORY_OF_NEPAL,0) AS HISTORY_OF_NEPAL,IFNULL(F.SOCOLOGY,0) AS SOCOLOGY,IFNULL(F.PRINCIPLE_OF_LAW,0) AS PRINCIPLE_OF_LAW,IFNULL(F.CONCEPT_OF_LAW,0) AS PRINCIPLE_OF_LAW,IFNULL(F.LOGIC_LEGAL_REASONING,0) AS LOGIC_LEGAL_REASONING,
    //     IFNULL(F.CLINICAL_WORK,0) AS CLINICAL_WORK
    //     FROM LLBSTUDENT AS LB join FIRSTYEAR AS F on LB.SID = F.SID 
    //     WHERE LB.PRGID = (:prgid) AND LB.EXAM_NO = (:examno)`, {
    //         replacements: {
    //             prgid: req.query.prgid,
    //             examno: req.query.examno
    //         },
    //         type: db.sequelize.QueryTypes.SELECT
    //     });

    //     res.send(student);
    // }
    // catch (err) {
    //     res.status(500).send({
    //         message:
    //             err.message || "Some error occurred while retrieving Student Result."
    //     });
    // }
    LLBStudent.findAll({
        raw: true,
        where: {
            PROGRAMMEID: req.query.prgid,
            EXAM_NO: req.query.examno
        }
    })
        .then(data => {
            Firstyear.findAll({
                where: {
                    LLBSTUDENTID: data[0].ID
                },
                attributes: ['POLITICAL', 'ECONOMIC', 'HISTORY_OF_NEPAL', 'SOCOLOGY', 'PRINCIPLE_OF_LAW', 'CONCEPT_OF_LAW', 'LOGIC_LEGAL_REASONING', 'CLINICAL_WORK']
            })
                .then(data1 => {
                    res.send(data.concat(data1));
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while retrieving Student."
                    });
                });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Student."
            });
        });
}

exports.getLLBSecond = async (req, res) => {
    // try {
    //     const student = await db.sequelize.query(`SELECT LB.SNAME,LB.PERCENT,LB.ROLL_NO,LB.EXAM_NO,LB.BATCH,
    //     IFNULL(SY.ENGLISH,0) AS ENGLISH,IFNULL(SY.NEPALI,0) AS NEPALI,IFNULL(SY.INTERNATIONAL_RELATION,0) AS INTERNATIONAL_RELATION,IFNULL(SY.LEGISLATIVE_PRINCIPLE,0) AS LEGISLATIVE_PRINCIPLE,
    //     IFNULL(SY.PROCEDURE_LAW,0) AS PROCEDURE_LAW,IFNULL(SY.SOCOLOGY,0) AS SOCOLOGY,IFNULL(SY.CRIMINAL_LAW,0) AS CRIMINAL_LAW,IFNULL(SY.CLINICAL_COURSE,0) AS CLINICAL_COURSE
    //     FROM LLBSTUDENT AS LB join SECONDYEAR AS SY on LB.SID = SY.SID 
    //     WHERE LB.PRGID = (:prgid) AND LB.EXAM_NO = (:examno)`, {
    //         replacements: {
    //             prgid: req.query.prgid,
    //             examno: req.query.examno
    //         },
    //         type: db.sequelize.QueryTypes.SELECT
    //     });

    //     res.send(student);
    // }
    // catch (err) {
    //     res.status(500).send({
    //         message:
    //             err.message || "Some error occurred while retrieving Student Result."
    //     });
    // }
    LLBStudent.findAll({
        raw: true,
        where: {
            PROGRAMMEID: req.query.prgid,
            EXAM_NO: req.query.examno
        }
    })
        .then(data => {
            Secondyear.findAll({
                where: {
                    LLBSTUDENTID: data[0].ID
                },
                attributes: ['ENGLISH', 'NEPALI', 'INTERNATIONAL_RELATION', 'LEGISLATIVE_PRINCIPLE', 'PROCEDURE_LAW', 'SOCOLOGY', 'CRIMINAL_LAW', 'CLINICAL_COURSE']
            })
                .then(data1 => {
                    res.send(data.concat(data1));
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while retrieving Student."
                    });
                });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Student."
            });
        });
}

exports.getLLBThird = async (req, res) => {
    // try {
    //     const student = await db.sequelize.query(`SELECT LB.SNAME,LB.PERCENT,LB.ROLL_NO,LB.EXAM_NO,LB.BATCH,
    //     IFNULL(TY.INTERNATIONAL_HUMAN_RIGHT,0) AS INTERNATIONAL_HUMAN_RIGHT,IFNULL(TY.INTERPRETATION,0) AS INTERPRETATION,IFNULL(TY.LAW_EVIDENCE,0) AS LAW_EVIDENCE,IFNULL(TY.INTERNATIONAL_LAW,0) AS INTERNATIONAL_LAW,
    //     IFNULL(TY.CONSTITUTIONAL_LAW,0) AS CONSTITUTIONAL_LAW,IFNULL(TY.LEGAL_RESEARCH,0) AS LEGAL_RESEARCH,IFNULL(TY.PROFESSIONAL_ETHICS,0) AS PROFESSIONAL_ETHICS,IFNULL(TY.CLINICAL_LEGAL_EDUCATION,0) AS CLINICAL_LEGAL_EDUCATION,IFNULL(TY.CLINICAL_WORK,0) AS CLINICAL_WORK
    //     FROM LLBSTUDENT AS LB join THIRDYEAR AS TY on LB.SID = TY.SID 
    //     WHERE LB.PRGID = (:prgid) AND LB.EXAM_NO = (:examno)`, {
    //         replacements: {
    //             prgid: req.query.prgid,
    //             examno: req.query.examno
    //         },
    //         type: db.sequelize.QueryTypes.SELECT
    //     });

    //     res.send(student);
    // }
    // catch (err) {
    //     res.status(500).send({
    //         message:
    //             err.message || "Some error occurred while retrieving Student Result."
    //     });
    // }
    LLBStudent.findAll({
        raw: true,
        where: {
            PROGRAMMEID: req.query.prgid,
            EXAM_NO: req.query.examno
        }
    })
        .then(data => {
            Thirdyear.findAll({
                where: {
                    LLBSTUDENTID: data[0].ID
                },
                attributes: ['INTERNATIONAL_HUMAN_RIGHT', 'INTERPRETATION', 'LAW_EVIDENCE', 'INTERNATIONAL_LAW', 'CONSTITUTIONAL_LAW', 'LEGAL_RESEARCH', 'PROFESSIONAL_ETHICS', 'CLINICAL_LEGAL_EDUCATION', 'CLINICAL_WORK']
            })
                .then(data1 => {
                    res.send(data.concat(data1));
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while retrieving Student."
                    });
                });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Student."
            });
        });
}

exports.getLLBFourthCriminal = async (req, res) => {
    // try {
    //     const student = await db.sequelize.query(`SELECT LB.SNAME,LB.PERCENT,LB.ROLL_NO,LB.EXAM_NO,LB.BATCH,
    //     IFNULL(FY.CLINICAL_EDUCATION,0) AS CLINICAL_EDUCATION,IFNULL(FY.ADVANCED_JURISPRUDENCE,0) AS ADVANCED_JURISPRUDENCE,IFNULL(FY.CONTRACT_LAW,0) AS CONTRACT_LAW,IFNULL(FY.COMPANY_LAW,0) AS COMPANY_LAW,
    //     IFNULL(FY.ADMINISTATIVE_LAW,0) AS ADMINISTATIVE_LAW,IFNULL(FY.CLINICAL_LEGAL_EDUCATION,0) AS CLINICAL_LEGAL_EDUCATION,IFNULL(FY.INTERNATIONAL_DISPUTES,0) AS INTERNATIONAL_DISPUTES,
    //     IFNULL(FYC.FORENSIC,0) AS FORENSIC,IFNULL(FYC.CRIMINOLOGY,0) AS CRIMINOLOGY
    //     FROM LLBSTUDENT AS LB join FOURTHYEAR AS FY on LB.SID = FY.SID JOIN FOURTHYEAR_CRIMINAL AS FYC on FYC.FOURTHYEARID = FY.FOURTHYEARID
    //     WHERE LB.PRGID = (:prgid) AND LB.EXAM_NO = (:examno) AND LB.GRPID = (:grpid)`, {
    //         replacements: {
    //             prgid: req.query.prgid,
    //             examno: req.query.examno,
    //             grpid: req.query.grpid
    //         },
    //         type: db.sequelize.QueryTypes.SELECT
    //     });

    //     res.send(student);
    // }
    // catch (err) {
    //     res.status(500).send({
    //         message:
    //             err.message || "Some error occurred while retrieving Student Result."
    //     });
    // }
    LLBStudent.findAll({
        raw: true,
        where: {
            PROGRAMMEID: req.query.prgid,
            EXAM_NO: req.query.examno
        }
    })
        .then(data => {
            Fourthyear.findAll({
                include: [{
                    model: FourthyearCriminal,
                    attributes: ['FORENSIC', 'CRIMINOLOGY']
                }],
                raw: true,
                where: {
                    LLBSTUDENTID: data[0].ID
                },
                attributes: ['CLINICAL_EDUCATION', 'ADVANCED_JURISPRUDENCE', 'CONTRACT_LAW', 'COMPANY_LAW', 'ADMINISTATIVE_LAW', 'CLINICAL_LEGAL_EDUCATION', 'INTERNATIONAL_DISPUTES']
            })
                .then(data1 => {
                    res.send(data.concat(data1));
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while retrieving Student."
                    });
                });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Student."
            });
        });
}

exports.getLLBFourthBusiness = async (req, res) => {
    // try {
    //     const student = await db.sequelize.query(`SELECT LB.SNAME,LB.PERCENT,LB.ROLL_NO,LB.EXAM_NO,LB.BATCH,
    //     IFNULL(FY.CLINICAL_EDUCATION,0) AS CLINICAL_EDUCATION,IFNULL(FY.ADVANCED_JURISPRUDENCE,0) AS ADVANCED_JURISPRUDENCE,IFNULL(FY.CONTRACT_LAW,0) AS CONTRACT_LAW,IFNULL(FY.COMPANY_LAW,0) AS COMPANY_LAW,
    //     IFNULL(FY.ADMINISTATIVE_LAW,0) AS ADMINISTATIVE_LAW,IFNULL(FY.CLINICAL_LEGAL_EDUCATION,0) AS CLINICAL_LEGAL_EDUCATION,IFNULL(FY.INTERNATIONAL_DISPUTES,0) AS INTERNATIONAL_DISPUTES,
    //     IFNULL(FYB.BANKING_INSURANCE,0),IFNULL(FYB.INTERNATIONAL_TRADE,0)
    //     FROM LLBSTUDENT AS LB join FOURTHYEAR AS FY on LB.SID = FY.SID JOIN FOURTHYEAR_BUSINESS AS FYB on FYB.FOURTHYEARID = FY.FOURTHYEARID
    //     WHERE LB.PRGID = (:prgid) AND LB.EXAM_NO = (:examno) AND LB.GRPID = (:grpid)`, {
    //         replacements: {
    //             prgid: req.query.prgid,
    //             examno: req.query.examno,
    //             grpid: req.query.grpid
    //         },
    //         type: db.sequelize.QueryTypes.SELECT
    //     });

    //     res.send(student);
    // }
    // catch (err) {
    //     res.status(500).send({
    //         message:
    //             err.message || "Some error occurred while retrieving Student Result."
    //     });
    // }
    LLBStudent.findAll({
        raw: true,
        where: {
            PROGRAMMEID: req.query.prgid,
            EXAM_NO: req.query.examno
        }
    })
        .then(data => {
            Fourthyear.findAll({
                include: [{
                    model: FourthyearBusiness,
                    attributes: ['BANKING_INSURANCE', 'INTERNATIONAL_TRADE']
                }],
                raw: true,
                where: {
                    LLBSTUDENTID: data[0].ID
                },
                attributes: ['CLINICAL_EDUCATION', 'ADVANCED_JURISPRUDENCE', 'CONTRACT_LAW', 'COMPANY_LAW', 'ADMINISTATIVE_LAW', 'CLINICAL_LEGAL_EDUCATION', 'INTERNATIONAL_DISPUTES']
            })
                .then(data1 => {
                    res.send(data.concat(data1));
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while retrieving Student."
                    });
                });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Student."
            });
        });
}

exports.getLLBFourthConstitutional = async (req, res) => {
    // try {
    //     const student = await db.sequelize.query(`SELECT LB.SNAME,LB.PERCENT,LB.ROLL_NO,LB.EXAM_NO,LB.BATCH,
    //     IFNULL(FY.CLINICAL_EDUCATION,0) AS CLINICAL_EDUCATION,IFNULL(FY.ADVANCED_JURISPRUDENCE,0) AS ADVANCED_JURISPRUDENCE,IFNULL(FY.CONTRACT_LAW,0) AS CONTRACT_LAW,IFNULL(FY.COMPANY_LAW,0) AS COMPANY_LAW,
    //     IFNULL(FY.ADMINISTATIVE_LAW,0) AS ADMINISTATIVE_LAW,IFNULL(FY.CLINICAL_LEGAL_EDUCATION,0) AS CLINICAL_LEGAL_EDUCATION,IFNULL(FY.INTERNATIONAL_DISPUTES,0) AS INTERNATIONAL_DISPUTES,
    //     IFNULL(FYC.GOOD_GONERNANCE,0),IFNULL(FYC.ELECTORAL_LAW,0)
    //     FROM LLBSTUDENT AS LB join FOURTHYEAR AS FY on LB.SID = FY.SID JOIN FOURTHYEAR_CONSTITUTIONAL AS FYC on FYC.FOURTHYEARID = FY.FOURTHYEARID
    //     WHERE LB.PRGID = (:prgid) AND LB.EXAM_NO = (:examno) AND LB.GRPID = (:grpid)`, {
    //         replacements: {
    //             prgid: req.query.prgid,
    //             examno: req.query.examno,
    //             grpid: req.query.grpid
    //         },
    //         type: db.sequelize.QueryTypes.SELECT
    //     });

    //     res.send(student);
    // }
    // catch (err) {
    //     res.status(500).send({
    //         message:
    //             err.message || "Some error occurred while retrieving Student Result."
    //     });
    // }
    LLBStudent.findAll({
        raw: true,
        where: {
            PROGRAMMEID: req.query.prgid,
            EXAM_NO: req.query.examno
        }
    })
        .then(data => {
            Fourthyear.findAll({
                include: [{
                    model: FourthyearConstitutional,
                    attributes: ['GOOD_GONERNANCE', 'ELECTORAL_LAW']
                }],
                raw: true,
                where: {
                    LLBSTUDENTID: data[0].ID
                },
                attributes: ['CLINICAL_EDUCATION', 'ADVANCED_JURISPRUDENCE', 'CONTRACT_LAW', 'COMPANY_LAW', 'ADMINISTATIVE_LAW', 'CLINICAL_LEGAL_EDUCATION', 'INTERNATIONAL_DISPUTES']
            })
                .then(data1 => {
                    res.send(data.concat(data1));
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while retrieving Student."
                    });
                });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Student."
            });
        });
}

exports.getLLBFourthEnvironment = async (req, res) => {
    // try {
    //     const student = await db.sequelize.query(`SELECT LB.SNAME,LB.PERCENT,LB.ROLL_NO,LB.EXAM_NO,LB.BATCH,
    //     IFNULL(FY.CLINICAL_EDUCATION,0) AS CLINICAL_EDUCATION,IFNULL(FY.ADVANCED_JURISPRUDENCE,0) AS ADVANCED_JURISPRUDENCE,IFNULL(FY.CONTRACT_LAW,0) AS CONTRACT_LAW,IFNULL(FY.COMPANY_LAW,0) AS COMPANY_LAW,
    //     IFNULL(FY.ADMINISTATIVE_LAW,0) AS ADMINISTATIVE_LAW,IFNULL(FY.CLINICAL_LEGAL_EDUCATION,0) AS CLINICAL_LEGAL_EDUCATION,IFNULL(FY.INTERNATIONAL_DISPUTES,0) AS INTERNATIONAL_DISPUTES,
    //     IFNULL(FYE.ENVIRONMENT_LAW,0),IFNULL(FYE.WATER_RIVER,0)
    //     FROM LLBSTUDENT AS LB join FOURTHYEAR AS FY on LB.SID = FY.SID JOIN FOURTHYEAR_ENVIRONMENT AS FYE on FYE.FOURTHYEARID = FY.FOURTHYEARID
    //     WHERE LB.PRGID = (:prgid) AND LB.EXAM_NO = (:examno) AND LB.GRPID = (:grpid)`, {
    //         replacements: {
    //             prgid: req.query.prgid,
    //             examno: req.query.examno,
    //             grpid: req.query.grpid
    //         },
    //         type: db.sequelize.QueryTypes.SELECT
    //     });

    //     res.send(student);
    // }
    // catch (err) {
    //     res.status(500).send({
    //         message:
    //             err.message || "Some error occurred while retrieving Student Result."
    //     });
    // }
    LLBStudent.findAll({
        raw: true,
        where: {
            PROGRAMMEID: req.query.prgid,
            EXAM_NO: req.query.examno
        }
    })
        .then(data => {
            Fourthyear.findAll({
                include: [{
                    model: FourthyearEnvironment,
                    attributes: ['ENVIRONMENT_LAW', 'WATER_RIVER']
                }],
                raw: true,
                where: {
                    LLBSTUDENTID: data[0].ID
                },
                attributes: ['CLINICAL_EDUCATION', 'ADVANCED_JURISPRUDENCE', 'CONTRACT_LAW', 'COMPANY_LAW', 'ADMINISTATIVE_LAW', 'CLINICAL_LEGAL_EDUCATION', 'INTERNATIONAL_DISPUTES']
            })
                .then(data1 => {
                    res.send(data.concat(data1));
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while retrieving Student."
                    });
                });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Student."
            });
        });
}

exports.getLLBFifthCriminal = async (req, res) => {
    // try {
    //     const student = await db.sequelize.query(`SELECT LB.SNAME,LB.PERCENT,LB.ROLL_NO,LB.EXAM_NO,LB.BATCH,
    //     IFNULL(FY.LEGAL_PHILOSOPHY,0) AS LEGAL_PHILOSOPHY,IFNULL(FY.AGRARIAN,0) AS AGRARIAN,IFNULL(FY.INTERNATIONAL_HUMANITARIAN,0) AS INTERNATIONAL_HUMANITARIAN,IFNULL(FY.CONSERVATION_LAW,0) AS CONSERVATION_LAW,
    //     IFNULL(FY.INTERNATIONAL_LAW,0) AS INTERNATIONAL_LAW,IFNULL(FY.PRE_TRIAL_PRESENTATION,0) AS PRE_TRIAL_PRESENTATION,IFNULL(FY.CLINICAL_EDUCATION,0) AS CLINICAL_EDUCATION,IFNULL(DISSERTATION,0) AS DISSERTATION,
    //     IFNULL(FYC.ORGANIZED_CRIME,0) AS ORGANIZED_CRIME,IFNULL(FYC.FISCAL_CRIME,0) AS FISCAL_CRIME
    //     FROM LLBSTUDENT AS LB join FIFTHYEAR AS FY on LB.SID = FY.SID JOIN FIFTHYEAR_CRIMINAL AS FYC on FYC.FIFTHYEARID = FY.FIFTHYEARID
    //     WHERE LB.PRGID = (:prgid) AND LB.EXAM_NO = (:examno) AND LB.GRPID = (:grpid)`, {
    //         replacements: {
    //             prgid: req.query.prgid,
    //             examno: req.query.examno,
    //             grpid: req.query.grpid
    //         },
    //         type: db.sequelize.QueryTypes.SELECT
    //     });

    //     res.send(student);
    // }
    // catch (err) {
    //     res.status(500).send({
    //         message:
    //             err.message || "Some error occurred while retrieving Student Result."
    //     });
    // }
    LLBStudent.findAll({
        raw: true,
        where: {
            PROGRAMMEID: req.query.prgid,
            EXAM_NO: req.query.examno
        }
    })
        .then(data => {
            Fifthyear.findAll({
                include: [{
                    model: FifthyearCriminal,
                    attributes: ['ORGANIZED_CRIME', 'FISCAL_CRIME']
                }],
                raw: true,
                where: {
                    LLBSTUDENTID: data[0].ID
                },
                attributes: ['LEGAL_PHILOSOPHY', 'AGRARIAN', 'INTERNATIONAL_HUMANITARIAN', 'CONSERVATION_LAW', 'INTERNATIONAL_LAW', 'PRE_TRIAL_PRESENTATION', 'CLINICAL_EDUCATION', 'DISSERTATION', 'LABOUR_LAW']
            })
                .then(data1 => {
                    res.send(data.concat(data1));
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while retrieving Student."
                    });
                });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Student."
            });
        });
}

exports.getLLBFifthBusiness = async (req, res) => {
    // try {
    //     const student = await db.sequelize.query(`SELECT LB.SNAME,LB.PERCENT,LB.ROLL_NO,LB.EXAM_NO,LB.BATCH,
    //     IFNULL(FY.LEGAL_PHILOSOPHY,0) AS LEGAL_PHILOSOPHY,IFNULL(FY.AGRARIAN,0) AS AGRARIAN,IFNULL(FY.INTERNATIONAL_HUMANITARIAN,0) AS INTERNATIONAL_HUMANITARIAN,IFNULL(FY.CONSERVATION_LAW,0) AS CONSERVATION_LAW,
    //     IFNULL(FY.INTERNATIONAL_LAW,0) AS INTERNATIONAL_LAW,IFNULL(FY.PRE_TRIAL_PRESENTATION,0) AS PRE_TRIAL_PRESENTATION,IFNULL(FY.CLINICAL_EDUCATION,0) AS CLINICAL_EDUCATION,IFNULL(DISSERTATION,0) AS DISSERTATION,
    //     IFNULL(FYB.INTELLECTUAL_PROPERTY,0),IFNULL(FYB.TAXATION,0)
    //     FROM LLBSTUDENT AS LB join FIFTHYEAR AS FY on LB.SID = FY.SID JOIN FIFTHYEAR_BUSINESS AS FYB on FYB.FIFTHYEARID = FY.FIFTHYEARID
    //     WHERE LB.PRGID = (:prgid) AND LB.EXAM_NO = (:examno) AND LB.GRPID = (:grpid)`, {
    //         replacements: {
    //             prgid: req.query.prgid,
    //             examno: req.query.examno,
    //             grpid: req.query.grpid
    //         },
    //         type: db.sequelize.QueryTypes.SELECT
    //     });

    //     res.send(student);
    // }
    // catch (err) {
    //     res.status(500).send({
    //         message:
    //             err.message || "Some error occurred while retrieving Student Result."
    //     });
    // }
    LLBStudent.findAll({
        raw: true,
        where: {
            PROGRAMMEID: req.query.prgid,
            EXAM_NO: req.query.examno
        }
    })
        .then(data => {
            Fifthyear.findAll({
                include: [{
                    model: FifthyearBusiness,
                    attributes: ['INTELLECTUAL_PROPERTY', 'TAXATION']
                }],
                raw: true,
                where: {
                    LLBSTUDENTID: data[0].ID
                },
                attributes: ['LEGAL_PHILOSOPHY', 'AGRARIAN', 'INTERNATIONAL_HUMANITARIAN', 'CONSERVATION_LAW', 'INTERNATIONAL_LAW', 'PRE_TRIAL_PRESENTATION', 'CLINICAL_EDUCATION', 'DISSERTATION', 'LABOUR_LAW']
            })
                .then(data1 => {
                    res.send(data.concat(data1));
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while retrieving Student."
                    });
                });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Student."
            });
        });
}

exports.getLLBFifthConstitutional = async (req, res) => {
    // try {
    //     const student = await db.sequelize.query(`SELECT LB.SNAME,LB.PERCENT,LB.ROLL_NO,LB.EXAM_NO,LB.BATCH,
    //     IFNULL(FY.LEGAL_PHILOSOPHY,0) AS LEGAL_PHILOSOPHY,IFNULL(FY.AGRARIAN,0) AS AGRARIAN,IFNULL(FY.INTERNATIONAL_HUMANITARIAN,0) AS INTERNATIONAL_HUMANITARIAN,IFNULL(FY.CONSERVATION_LAW,0) AS CONSERVATION_LAW,
    //     IFNULL(FY.INTERNATIONAL_LAW,0) AS INTERNATIONAL_LAW,IFNULL(FY.PRE_TRIAL_PRESENTATION,0) AS PRE_TRIAL_PRESENTATION,IFNULL(FY.CLINICAL_EDUCATION,0) AS CLINICAL_EDUCATION,IFNULL(DISSERTATION,0) AS DISSERTATION,
    //     IFNULL(FYC.LAW_OF_EQUITY,0),IFNULL(FYC.LAW_ON_GENDER,0)
    //     FROM LLBSTUDENT AS LB join FIFTHYEAR AS FY on LB.SID = FY.SID JOIN FIFTHYEAR_CONSTITUTIONAL AS FYC on FYC.FIFTHYEARID = FY.FIFTHYEARID
    //     WHERE LB.PRGID = (:prgid) AND LB.EXAM_NO = (:examno) AND LB.GRPID = (:grpid)`, {
    //         replacements: {
    //             prgid: req.query.prgid,
    //             examno: req.query.examno,
    //             grpid: req.query.grpid
    //         },
    //         type: db.sequelize.QueryTypes.SELECT
    //     });

    //     res.send(student);
    // }
    // catch (err) {
    //     res.status(500).send({
    //         message:
    //             err.message || "Some error occurred while retrieving Student Result."
    //     });
    // }
    LLBStudent.findAll({
        raw: true,
        where: {
            PROGRAMMEID: req.query.prgid,
            EXAM_NO: req.query.examno
        }
    })
        .then(data => {
            Fifthyear.findAll({
                include: [{
                    model: FifthyearConstitutional,
                    attributes: ['LAW_OF_EQUITY', 'LAW_ON_GENDER']
                }],
                raw: true,
                where: {
                    LLBSTUDENTID: data[0].ID
                },
                attributes: ['LEGAL_PHILOSOPHY', 'AGRARIAN', 'INTERNATIONAL_HUMANITARIAN', 'CONSERVATION_LAW', 'INTERNATIONAL_LAW', 'PRE_TRIAL_PRESENTATION', 'CLINICAL_EDUCATION', 'DISSERTATION', 'LABOUR_LAW']
            })
                .then(data1 => {
                    res.send(data.concat(data1));
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while retrieving Student."
                    });
                });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Student."
            });
        });
}

exports.getLLBFifthEnvironment = async (req, res) => {
    // try {
    //     const student = await db.sequelize.query(`SELECT LB.SNAME,LB.PERCENT,LB.ROLL_NO,LB.EXAM_NO,LB.BATCH,
    //     IFNULL(FY.LEGAL_PHILOSOPHY,0) AS LEGAL_PHILOSOPHY,IFNULL(FY.AGRARIAN,0) AS AGRARIAN,IFNULL(FY.INTERNATIONAL_HUMANITARIAN,0) AS INTERNATIONAL_HUMANITARIAN,IFNULL(FY.CONSERVATION_LAW,0) AS CONSERVATION_LAW,
    //     IFNULL(FY.INTERNATIONAL_LAW,0) AS INTERNATIONAL_LAW,IFNULL(FY.PRE_TRIAL_PRESENTATION,0) AS PRE_TRIAL_PRESENTATION,IFNULL(FY.CLINICAL_EDUCATION,0) AS CLINICAL_EDUCATION,IFNULL(DISSERTATION,0) AS DISSERTATION,
    //     IFNULL(FYE.ENERGY_LAW,0),IFNULL(FYE.CIVIL_AVIATION,0)
    //     FROM LLBSTUDENT AS LB join FIFTHYEAR AS FY on LB.SID = FY.SID JOIN FIFTHYEAR_ENVIRONMENT AS FYE on FYE.FIFTHYEARID = FY.FIFTHYEARID
    //     WHERE LB.PRGID = (:prgid) AND LB.EXAM_NO = (:examno) AND LB.GRPID = (:grpid)`, {
    //         replacements: {
    //             prgid: req.query.prgid,
    //             examno: req.query.examno,
    //             grpid: req.query.grpid
    //         },
    //         type: db.sequelize.QueryTypes.SELECT
    //     });

    //     res.send(student);
    // }
    // catch (err) {
    //     res.status(500).send({
    //         message:
    //             err.message || "Some error occurred while retrieving Student Result."
    //     });
    // }
    LLBStudent.findAll({
        raw: true,
        where: {
            PROGRAMMEID: req.query.prgid,
            EXAM_NO: req.query.examno
        }
    })
        .then(data => {
            Fifthyear.findAll({
                include: [{
                    model: FifthyearEnvironment,
                    attributes: ['ENERGY_LAW', 'CIVIL_AVIATION']
                }],
                raw: true,
                where: {
                    LLBSTUDENTID: data[0].ID
                },
                attributes: ['LEGAL_PHILOSOPHY', 'AGRARIAN', 'INTERNATIONAL_HUMANITARIAN', 'CONSERVATION_LAW', 'INTERNATIONAL_LAW', 'PRE_TRIAL_PRESENTATION', 'CLINICAL_EDUCATION', 'DISSERTATION', 'LABOUR_LAW']
            })
                .then(data1 => {
                    res.send(data.concat(data1));
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while retrieving Student."
                    });
                });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Student."
            });
        });
}

exports.getLLMFirstHumanRights = async (req, res) => {
    // try {
    //     const student = await db.sequelize.query(`SELECT LM.SNAME,LM.PERCENT,LM.ROLL_NO,LM.EXAM_NO,LM.BATCH,
    //     IFNULL(FYH.LEGAL_RESEARCH,0) AS LEGAL_RESEARCH,IFNULL(FYH.COMPARATIVE_STUDY,0) AS COMPARATIVE_STUDY,IFNULL(FYH.NEPALESE_STUDY,0) AS NEPALESE_STUDY,IFNULL(FYH.CIVIL_POLITICAL,0) AS CIVIL_POLITICAL
    //     FROM LLMSTUDENT AS LM join FIRSTYEAR_HUMANRIGHTS AS FYH on LM.SID = FYH.SID
    //     WHERE LM.PRGID = (:prgid) AND LM.EXAM_NO = (:examno)`, {
    //         replacements: {
    //             prgid: req.query.prgid,
    //             examno: req.query.examno
    //         },
    //         type: db.sequelize.QueryTypes.SELECT
    //     });

    //     res.send(student);
    // }
    // catch (err) {
    //     res.status(500).send({
    //         message:
    //             err.message || "Some error occurred while retrieving Student Result."
    //     });
    // }
    LLMStudent.findAll({
        raw: true,
        where: {
            PROGRAMMEID: req.query.prgid,
            EXAM_NO: req.query.examno
        }
    })
        .then(data => {
            FirstyearHumanRights.findAll({
                raw: true,
                where: {
                    LLMSTUDENTID: data[0].ID
                },
                attributes: ['LEGAL_RESEARCH', 'COMPARATIVE_STUDY', 'NEPALESE_STUDY', 'CIVIL_POLITICAL']
            })
                .then(data1 => {
                    res.send(data.concat(data1));
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while retrieving Student."
                    });
                });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Student."
            });
        });
}

exports.getLLMFirstBusiness = async (req, res) => {
    // try {
    //     const student = await db.sequelize.query(`SELECT LM.SNAME,LM.PERCENT,LM.ROLL_NO,LM.EXAM_NO,LM.BATCH,
    //     IFNULL(FYB.LEGAL_RESEARCH,0) AS LEGAL_RESEARCH,IFNULL(FYB.COMPARATIVE_STUDY,0) AS COMPARATIVE_STUDY,IFNULL(FYB.CONTRACT_LAW,0) AS CONTRACT_LAW,IFNULL(FYB.INTELLECTUAL_PROPERTY,0) AS INTELLECTUAL_PROPERTY
    //     FROM LLMSTUDENT AS LM join FIRSTYEAR_BUSINESS AS FYB on LM.SID = FYB.SID
    //     WHERE LM.PRGID = (:prgid) AND LM.EXAM_NO = (:examno)`, {
    //         replacements: {
    //             prgid: req.query.prgid,
    //             examno: req.query.examno
    //         },
    //         type: db.sequelize.QueryTypes.SELECT
    //     });

    //     res.send(student);
    // }
    // catch (err) {
    //     res.status(500).send({
    //         message:
    //             err.message || "Some error occurred while retrieving Student Result."
    //     });
    // }
    LLMStudent.findAll({
        raw: true,
        where: {
            PROGRAMMEID: req.query.prgid,
            EXAM_NO: req.query.examno
        }
    })
        .then(data => {
            FirstyearBusiness.findAll({
                raw: true,
                where: {
                    LLMSTUDENTID: data[0].ID
                },
                attributes: ['LEGAL_RESEARCH', 'COMPARATIVE_STUDY', 'CONTRACT_LAW', 'INTELLECTUAL_PROPERTY']
            })
                .then(data1 => {
                    res.send(data.concat(data1));
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while retrieving Student."
                    });
                });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Student."
            });
        });
}

exports.getLLMFirstCriminalLaw = async (req, res) => {
    // try {
    //     const student = await db.sequelize.query(`SELECT LM.SNAME,LM.PERCENT,LM.ROLL_NO,LM.EXAM_NO,LM.BATCH,
    //     IFNULL(FYC.LEGAL_RESEARCH,0) AS LEGAL_RESEARCH,IFNULL(FYC.COMPARATIVE_STUDY,0) AS COMPARATIVE_STUDY,IFNULL(FYC.CRIMINAL_LAW,0) AS CRIMINAL_LAW,IFNULL(FYC.FORENSIC,0) AS FORENSIC,
    //     IFNULL(FYC.JUVINAL_JUSTICE,0) AS JUVINAL_JUSTICE
    //     FROM LLMSTUDENT AS LM join FIRSTYEAR_CRIMINALLAW AS FYC on LM.SID = FYC.SID
    //     WHERE LM.PRGID = (:prgid) AND LM.EXAM_NO = (:examno)`, {
    //         replacements: {
    //             prgid: req.query.prgid,
    //             examno: req.query.examno
    //         },
    //         type: db.sequelize.QueryTypes.SELECT
    //     });

    //     res.send(student);
    // }
    // catch (err) {
    //     res.status(500).send({
    //         message:
    //             err.message || "Some error occurred while retrieving Student Result."
    //     });
    // }
    LLMStudent.findAll({
        raw: true,
        where: {
            PROGRAMMEID: req.query.prgid,
            EXAM_NO: req.query.examno
        }
    })
        .then(data => {
            FirstyearCriminal.findAll({
                raw: true,
                where: {
                    LLMSTUDENTID: data[0].ID
                },
                attributes: ['LEGAL_RESEARCH', 'COMPARATIVE_STUDY', 'CRIMINAL_LAW', 'FORENSIC', 'JUVINAL_JUSTICE']
            })
                .then(data1 => {
                    res.send(data.concat(data1));
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while retrieving Student."
                    });
                });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Student."
            });
        });
}

exports.getLLMSecondHumanRights = async (req, res) => {
    // try {
    //     const student = await db.sequelize.query(`SELECT LM.SNAME,LM.PERCENT,LM.ROLL_NO,LM.EXAM_NO,LM.BATCH,
    //     IFNULL(SYH.FEMINIST_JURISPRUDENCE,0) AS FEMINIST_JURISPRUDENCE,IFNULL(SYH.WOMEN_HUMAN_RIGHT,0) AS WOMEN_HUMAN_RIGHT,IFNULL(SYH.ECONOMIC_SOCIAL_CULTURE,0) AS ECONOMIC_SOCIAL_CULTURE,IFNULL(SYH.DISSERTATION,0) AS DISSERTATION
    //     FROM LLMSTUDENT AS LM join SECONDYEAR_HUMANRIGHTS AS SYH on LM.SID = SYH.SID
    //     WHERE LM.PRGID = (:prgid) AND LM.EXAM_NO = (:examno)`, {
    //         replacements: {
    //             prgid: req.query.prgid,
    //             examno: req.query.examno
    //         },
    //         type: db.sequelize.QueryTypes.SELECT
    //     });

    //     res.send(student);
    // }
    // catch (err) {
    //     res.status(500).send({
    //         message:
    //             err.message || "Some error occurred while retrieving Student Result."
    //     });
    // }
    LLMStudent.findAll({
        raw: true,
        where: {
            PROGRAMMEID: req.query.prgid,
            EXAM_NO: req.query.examno
        }
    })
        .then(data => {
            SecondyearHumanRights.findAll({
                raw: true,
                where: {
                    LLMSTUDENTID: data[0].ID
                },
                attributes: ['FEMINIST_JURISPRUDENCE', 'WOMEN_HUMAN_RIGHT', 'ECONOMIC_SOCIAL_CULTURE', 'DISSERTATION']
            })
                .then(data1 => {
                    res.send(data.concat(data1));
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while retrieving Student."
                    });
                });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Student."
            });
        });
}

exports.getLLMSecondBusiness = async (req, res) => {
    // try {
    //     const student = await db.sequelize.query(`SELECT LM.SNAME,LM.PERCENT,LM.ROLL_NO,LM.EXAM_NO,LM.BATCH,
    //     IFNULL(SYB.BANKING_LAW,0) AS BANKING_LAW,IFNULL(SYB.CORPORATE_MANAGEMENT,0) AS CORPORATE_MANAGEMENT,IFNULL(SYB.TRADE_LAW,0) AS TRADE_LAW,IFNULL(SYB.TAXATION,0) AS TAXATION,
    //     IFNULL(SYB.INSURANCE,0) AS INSURANCE,IFNULL(SYB.DISSERTATION,0) AS DISSERTATION
    //     FROM LLMSTUDENT AS LM join SECONDYEAR_BUSINESS AS SYB on LM.SID = SYB.SID
    //     WHERE LM.PRGID = (:prgid) AND LM.EXAM_NO = (:examno)`, {
    //         replacements: {
    //             prgid: req.query.prgid,
    //             examno: req.query.examno
    //         },
    //         type: db.sequelize.QueryTypes.SELECT
    //     });

    //     res.send(student);
    // }
    // catch (err) {
    //     res.status(500).send({
    //         message:
    //             err.message || "Some error occurred while retrieving Student Result."
    //     });
    // }
    LLMStudent.findAll({
        raw: true,
        where: {
            PROGRAMMEID: req.query.prgid,
            EXAM_NO: req.query.examno
        }
    })
        .then(data => {
            SecondyearBusiness.findAll({
                raw: true,
                where: {
                    LLMSTUDENTID: data[0].ID
                },
                attributes: ['BANKING_LAW', 'CORPORATE_MANAGEMENT', 'TRADE_LAW', 'TAXATION', 'INSURANCE', 'DISSERTATION']
            })
                .then(data1 => {
                    res.send(data.concat(data1));
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while retrieving Student."
                    });
                });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Student."
            });
        });
}

exports.getLLMSecondCriminal = async (req, res) => {
    // try {
    //     const student = await db.sequelize.query(`SELECT LM.SNAME,LM.PERCENT,LM.ROLL_NO,LM.EXAM_NO,LM.BATCH,
    //     IFNULL(SYC.CRIMINOLOGY,0) AS CRIMINOLOGY,IFNULL(SYC.FAIR_TRAIL,0) AS FAIR_TRAIL,IFNULL(SYC.WHITE_COLLAR,0) AS WHITE_COLLAR,IFNULL(SYC.DISSERTATION,0) AS DISSERTATION
    //     FROM LLMSTUDENT AS LM join SECONDYEAR_CRIMINALLAW AS SYC on LM.SID = SYC.SID
    //     WHERE LM.PRGID = (:prgid) AND LM.EXAM_NO = (:examno)`, {
    //         replacements: {
    //             prgid: req.query.prgid,
    //             examno: req.query.examno
    //         },
    //         type: db.sequelize.QueryTypes.SELECT
    //     });

    //     res.send(student);
    // }
    // catch (err) {
    //     res.status(500).send({
    //         message:
    //             err.message || "Some error occurred while retrieving Student Result."
    //     });
    // }
    LLMStudent.findAll({
        raw: true,
        where: {
            PROGRAMMEID: req.query.prgid,
            EXAM_NO: req.query.examno
        }
    })
        .then(data => {
            SecondyearCriminal.findAll({
                raw: true,
                where: {
                    LLMSTUDENTID: data[0].ID
                },
                attributes: ['CRIMINOLOGY', 'FAIR_TRAIL', 'WHITE_COLLAR', 'DISSERTATION']
            })
                .then(data1 => {
                    res.send(data.concat(data1));
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while retrieving Student."
                    });
                });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Student."
            });
        });
}