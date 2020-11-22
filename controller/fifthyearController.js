const db = require("../connect/Connect");
const Fifthyear = db.FIFTHYEAR;
const FifthyearCriminal = db.FIFTHYEAR_CRIMINAL;
const FifthyearBusiness = db.FIFTHYEAR_BUSINESS;
const FifthyearConstitutional = db.FIFTHYEAR_CONSTITUTIONAL;
const FifthyearEnvironment = db.FIFTHYEAR_ENVIRONMENT;
const Llbstudent = db.LLBSTUDENT;
const Op = db.Sequelize.Op;

exports.FindAllCriminal = async (req, res) => {

    Llbstudent.findAll({
        include: [{
            model: Fifthyear,
            required: true,
            include: [{
                model: FifthyearCriminal,
                required: true
            }]
        }],
        raw: true
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Student."
            });
        });
}

exports.FindAllBusiness = async (req, res) => {

    Llbstudent.findAll({
        include: [{
            model: Fifthyear,
            required: true,
            include: [{
                model: FifthyearBusiness,
                required: true
            }]
        }],
        raw: true
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Student."
            });
        });
}

exports.FindAllConstitutional = async (req, res) => {

    Llbstudent.findAll({
        include: [{
            model: Fifthyear,
            required: true,
            include: [{
                model: FifthyearConstitutional,
                required: true
            }]
        }],
        raw: true
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Student."
            });
        });
}

exports.FindAllEnvironment = async (req, res) => {

    Llbstudent.findAll({
        include: [{
            model: Fifthyear,
            required: true,
            include: [{
                model: FifthyearEnvironment,
                required: true
            }]
        }],
        raw: true
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Student."
            });
        });
}

exports.CreateCriminal = (req, res) => {
    const fifthyear = {
        LEGAL_PHILOSOPHY: req.body.LegalPhilosophy,
        AGRARIAN: req.body.Agrarian,
        LABOUR: req.body.Labour, 
        INTERNATIONAL_HUMANITARIAN: req.body.InternationalHumanitarian,
        CONSERVATION_LAW: req.body.ConservationLaw,
        INTERNATIONAL_LAW: req.body.InternationalLaw,
        PRE_TRIAL_PRESENTATION: req.body.PreTrialPresentation,
        CLINICAL_EDUCATION: req.body.ClinicalEducation,
        DISSERTATION: req.body.Dissertation,
        LLBSTUDENTID: req.body.SId
    };

    Fifthyear.create(fifthyear)
        .then(data => {

            const fifthyearcriminal = {
                ORGANIZED_CRIME: req.body.OrganizedCrime,
                FISCAL_CRIME: req.body.FiscalCrime,
                FIFTHYEARID: data.ID
            };

            FifthyearCriminal.create(fifthyearcriminal)
                .then(data1 => {

                    var totalMarks = 0;
                    var percent = 0;

                    if (data.LEGAL_PHILOSOPHY != 'I' && data.AGRARIAN != 'I' && data.LABOUR != 'I' && data.INTERNATIONAL_HUMANITARIAN != 'I' && data.CONSERVATION_LAW != 'I'
                        && data.INTERNATIONAL_LAW != 'I' && data.PRE_TRIAL_PRESENTATION != 'I' && data.CLINICAL_EDUCATION != 'I' && data.DISSERTATION != 'I'
                        && data1.ORGANIZED_CRIME != 'I' && data1.FISCAL_CRIME != 'I') {
                        totalMarks = parseInt(data.LEGAL_PHILOSOPHY) + parseInt(data.AGRARIAN) + parseInt(data.LABOUR) + parseInt(data.INTERNATIONAL_HUMANITARIAN) + parseInt(data.CONSERVATION_LAW)
                            + parseInt(data.INTERNATIONAL_LAW) + parseInt(data.PRE_TRIAL_PRESENTATION) + parseInt(data.CLINICAL_EDUCATION)
                            + parseInt(data.DISSERTATION) + parseInt(data1.ORGANIZED_CRIME) + parseInt(data1.FISCAL_CRIME);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN != 'I' && data.LABOUR != 'I' && data.INTERNATIONAL_HUMANITARIAN != 'I' && data.CONSERVATION_LAW != 'I'
                        && data.INTERNATIONAL_LAW != 'I' && data.PRE_TRIAL_PRESENTATION != 'I' && data.CLINICAL_EDUCATION != 'I' && data.DISSERTATION != 'I'
                        && data1.ORGANIZED_CRIME != 'I' && data1.FISCAL_CRIME != 'I') {
                        totalMarks = parseInt(data.AGRARIAN) + parseInt(data.LABOUR) + parseInt(data.INTERNATIONAL_HUMANITARIAN) + parseInt(data.CONSERVATION_LAW)
                            + parseInt(data.INTERNATIONAL_LAW) + parseInt(data.PRE_TRIAL_PRESENTATION) + parseInt(data.CLINICAL_EDUCATION)
                            + parseInt(data.DISSERTATION) + parseInt(data1.ORGANIZED_CRIME) + parseInt(data1.FISCAL_CRIME);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR != 'I' && data.INTERNATIONAL_HUMANITARIAN != 'I' && data.CONSERVATION_LAW != 'I'
                        && data.INTERNATIONAL_LAW != 'I' && data.PRE_TRIAL_PRESENTATION != 'I' && data.CLINICAL_EDUCATION != 'I' && data.DISSERTATION != 'I'
                        && data1.ORGANIZED_CRIME != 'I' && data1.FISCAL_CRIME != 'I') {
                        totalMarks =  parseInt(data.LABOUR) + parseInt(data.INTERNATIONAL_HUMANITARIAN) + parseInt(data.CONSERVATION_LAW)
                            + parseInt(data.INTERNATIONAL_LAW) + parseInt(data.PRE_TRIAL_PRESENTATION) + parseInt(data.CLINICAL_EDUCATION)
                            + parseInt(data.DISSERTATION) + parseInt(data1.ORGANIZED_CRIME) + parseInt(data1.FISCAL_CRIME);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR == 'I' && data.INTERNATIONAL_HUMANITARIAN != 'I' && data.CONSERVATION_LAW != 'I'
                        && data.INTERNATIONAL_LAW != 'I' && data.PRE_TRIAL_PRESENTATION != 'I' && data.CLINICAL_EDUCATION != 'I' && data.DISSERTATION != 'I'
                        && data1.ORGANIZED_CRIME != 'I' && data1.FISCAL_CRIME != 'I') {
                        totalMarks =  parseInt(data.INTERNATIONAL_HUMANITARIAN) + parseInt(data.CONSERVATION_LAW)
                            + parseInt(data.INTERNATIONAL_LAW) + parseInt(data.PRE_TRIAL_PRESENTATION) + parseInt(data.CLINICAL_EDUCATION)
                            + parseInt(data.DISSERTATION) + parseInt(data1.ORGANIZED_CRIME) + parseInt(data1.FISCAL_CRIME);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR == 'I' && data.INTERNATIONAL_HUMANITARIAN == 'I' && data.CONSERVATION_LAW != 'I'
                        && data.INTERNATIONAL_LAW != 'I' && data.PRE_TRIAL_PRESENTATION != 'I' && data.CLINICAL_EDUCATION != 'I' && data.DISSERTATION != 'I'
                        && data1.ORGANIZED_CRIME != 'I' && data1.FISCAL_CRIME != 'I') {
                        totalMarks = parseInt(data.CONSERVATION_LAW) + parseInt(data.INTERNATIONAL_LAW) + parseInt(data.PRE_TRIAL_PRESENTATION) + parseInt(data.CLINICAL_EDUCATION)
                            + parseInt(data.DISSERTATION) + parseInt(data1.ORGANIZED_CRIME) + parseInt(data1.FISCAL_CRIME);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR == 'I' && data.INTERNATIONAL_HUMANITARIAN == 'I' && data.CONSERVATION_LAW == 'I'
                        && data.INTERNATIONAL_LAW != 'I' && data.PRE_TRIAL_PRESENTATION != 'I' && data.CLINICAL_EDUCATION != 'I' && data.DISSERTATION != 'I'
                        && data1.ORGANIZED_CRIME != 'I' && data1.FISCAL_CRIME != 'I') {
                        totalMarks = parseInt(data.INTERNATIONAL_LAW) + parseInt(data.PRE_TRIAL_PRESENTATION) + parseInt(data.CLINICAL_EDUCATION)
                            + parseInt(data.DISSERTATION) + parseInt(data1.ORGANIZED_CRIME) + parseInt(data1.FISCAL_CRIME);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR == 'I' && data.INTERNATIONAL_HUMANITARIAN == 'I' && data.CONSERVATION_LAW == 'I'
                        && data.INTERNATIONAL_LAW == 'I' && data.PRE_TRIAL_PRESENTATION != 'I' && data.CLINICAL_EDUCATION != 'I' && data.DISSERTATION != 'I'
                        && data1.ORGANIZED_CRIME != 'I' && data1.FISCAL_CRIME != 'I') {
                        totalMarks = parseInt(data.PRE_TRIAL_PRESENTATION) + parseInt(data.CLINICAL_EDUCATION)
                            + parseInt(data.DISSERTATION) + parseInt(data1.ORGANIZED_CRIME) + parseInt(data1.FISCAL_CRIME);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR == 'I' && data.INTERNATIONAL_HUMANITARIAN == 'I' && data.CONSERVATION_LAW == 'I'
                        && data.INTERNATIONAL_LAW == 'I' && data.PRE_TRIAL_PRESENTATION == 'I' && data.CLINICAL_EDUCATION != 'I' && data.DISSERTATION != 'I'
                        && data1.ORGANIZED_CRIME != 'I' && data1.FISCAL_CRIME != 'I') {
                        totalMarks = parseInt(data.CLINICAL_EDUCATION) + parseInt(data.DISSERTATION) + parseInt(data1.ORGANIZED_CRIME) + parseInt(data1.FISCAL_CRIME);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR == 'I' && data.INTERNATIONAL_HUMANITARIAN == 'I' && data.CONSERVATION_LAW == 'I'
                        && data.INTERNATIONAL_LAW == 'I' && data.PRE_TRIAL_PRESENTATION == 'I' && data.CLINICAL_EDUCATION == 'I' && data.DISSERTATION != 'I'
                        && data1.ORGANIZED_CRIME != 'I' && data1.FISCAL_CRIME != 'I') {
                        totalMarks = parseInt(data.DISSERTATION) + parseInt(data1.ORGANIZED_CRIME) + parseInt(data1.FISCAL_CRIME);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR == 'I' && data.INTERNATIONAL_HUMANITARIAN == 'I' && data.CONSERVATION_LAW == 'I'
                        && data.INTERNATIONAL_LAW == 'I' && data.PRE_TRIAL_PRESENTATION == 'I' && data.CLINICAL_EDUCATION == 'I' && data.DISSERTATION == 'I'
                        && data1.ORGANIZED_CRIME != 'I' && data1.FISCAL_CRIME != 'I') {
                        totalMarks = parseInt(data1.ORGANIZED_CRIME) + parseInt(data1.FISCAL_CRIME);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR == 'I' && data.INTERNATIONAL_HUMANITARIAN == 'I' && data.CONSERVATION_LAW == 'I'
                        && data.INTERNATIONAL_LAW == 'I' && data.PRE_TRIAL_PRESENTATION == 'I' && data.CLINICAL_EDUCATION == 'I' && data.DISSERTATION == 'I'
                        && data1.ORGANIZED_CRIME == 'I' && data1.FISCAL_CRIME != 'I') {
                        totalMarks = parseInt(data1.FISCAL_CRIME);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR == 'I' && data.INTERNATIONAL_HUMANITARIAN == 'I' && data.CONSERVATION_LAW == 'I'
                        && data.INTERNATIONAL_LAW == 'I' && data.PRE_TRIAL_PRESENTATION == 'I' && data.CLINICAL_EDUCATION == 'I' && data.DISSERTATION == 'I'
                        && data1.ORGANIZED_CRIME == 'I' && data1.FISCAL_CRIME == 'I') {
                        percent = 0;
                    }

                    Llbstudent.update(
                        { PERCENT: percent },
                        { where: { SID: req.body.SId } }
                    )
                        .then(data1 => {
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
        LEGAL_PHILOSOPHY: req.body.LegalPhilosophy,
        AGRARIAN: req.body.Agrarian,
        LABOUR: req.body.Labour,
        INTERNATIONAL_HUMANITARIAN: req.body.InternationalHumanitarian,
        CONSERVATION_LAW: req.body.ConservationLaw,
        INTERNATIONAL_LAW: req.body.InternationalLaw,
        PRE_TRIAL_PRESENTATION: req.body.PreTrialPresentation,
        CLINICAL_EDUCATION: req.body.ClinicalEducation,
        DISSERTATION: req.body.Dissertation,
        LLBSTUDENTID: req.body.SId
    };

    Fifthyear.create(fifthyear)
        .then(data => {
            const fifthyearbusiness = {
                INTELLECTUAL_PROPERTY: req.body.IntellectualProperty,
                TAXATION: req.body.Taxation,
                FIFTHYEARID: data.ID
            };

            FifthyearBusiness.create(fifthyearbusiness)
                .then(data1 => {

                    var totalMarks = 0;
                    var percent = 0;

                    if (data.LEGAL_PHILOSOPHY != 'I' && data.AGRARIAN != 'I' && data.LABOUR != 'I' && data.INTERNATIONAL_HUMANITARIAN != 'I' && data.CONSERVATION_LAW != 'I'
                        && data.INTERNATIONAL_LAW != 'I' && data.PRE_TRIAL_PRESENTATION != 'I' && data.CLINICAL_EDUCATION != 'I' && data.DISSERTATION != 'I'
                        && data1.INTELLECTUAL_PROPERTY != 'I' && data1.TAXATION != 'I') {
                        totalMarks = parseInt(data.LEGAL_PHILOSOPHY) + parseInt(data.AGRARIAN) + parseInt(data.LABOUR) + parseInt(data.INTERNATIONAL_HUMANITARIAN) + parseInt(data.CONSERVATION_LAW)
                            + parseInt(data.INTERNATIONAL_LAW) + parseInt(data.PRE_TRIAL_PRESENTATION) + parseInt(data.CLINICAL_EDUCATION)
                            + parseInt(data.DISSERTATION) + parseInt(data1.INTELLECTUAL_PROPERTY) + parseInt(data1.TAXATION);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN != 'I' && data.LABOUR != 'I' && data.INTERNATIONAL_HUMANITARIAN != 'I' && data.CONSERVATION_LAW != 'I'
                        && data.INTERNATIONAL_LAW != 'I' && data.PRE_TRIAL_PRESENTATION != 'I' && data.CLINICAL_EDUCATION != 'I' && data.DISSERTATION != 'I'
                        && data1.INTELLECTUAL_PROPERTY != 'I' && data1.TAXATION != 'I') {
                        totalMarks = parseInt(data.AGRARIAN) + parseInt(data.LABOUR) + parseInt(data.INTERNATIONAL_HUMANITARIAN) + parseInt(data.CONSERVATION_LAW)
                            + parseInt(data.INTERNATIONAL_LAW) + parseInt(data.PRE_TRIAL_PRESENTATION) + parseInt(data.CLINICAL_EDUCATION)
                            + parseInt(data.DISSERTATION) + parseInt(data1.INTELLECTUAL_PROPERTY) + parseInt(data1.TAXATION);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR != 'I' && data.INTERNATIONAL_HUMANITARIAN != 'I' && data.CONSERVATION_LAW != 'I'
                        && data.INTERNATIONAL_LAW != 'I' && data.PRE_TRIAL_PRESENTATION != 'I' && data.CLINICAL_EDUCATION != 'I' && data.DISSERTATION != 'I'
                        && data1.INTELLECTUAL_PROPERTY != 'I' && data1.TAXATION != 'I') {
                        totalMarks = parseInt(data.LABOUR) + parseInt(data.INTERNATIONAL_HUMANITARIAN) + parseInt(data.CONSERVATION_LAW)
                            + parseInt(data.INTERNATIONAL_LAW) + parseInt(data.PRE_TRIAL_PRESENTATION) + parseInt(data.CLINICAL_EDUCATION)
                            + parseInt(data.DISSERTATION) + parseInt(data1.INTELLECTUAL_PROPERTY) + parseInt(data1.TAXATION);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR == 'I' && data.INTERNATIONAL_HUMANITARIAN != 'I' && data.CONSERVATION_LAW != 'I'
                        && data.INTERNATIONAL_LAW != 'I' && data.PRE_TRIAL_PRESENTATION != 'I' && data.CLINICAL_EDUCATION != 'I' && data.DISSERTATION != 'I'
                        && data1.INTELLECTUAL_PROPERTY != 'I' && data1.TAXATION != 'I') {
                        totalMarks = parseInt(data.INTERNATIONAL_HUMANITARIAN) + parseInt(data.CONSERVATION_LAW)
                            + parseInt(data.INTERNATIONAL_LAW) + parseInt(data.PRE_TRIAL_PRESENTATION) + parseInt(data.CLINICAL_EDUCATION)
                            + parseInt(data.DISSERTATION) + parseInt(data1.INTELLECTUAL_PROPERTY) + parseInt(data1.TAXATION);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR == 'I' && data.INTERNATIONAL_HUMANITARIAN == 'I' && data.CONSERVATION_LAW != 'I'
                        && data.INTERNATIONAL_LAW != 'I' && data.PRE_TRIAL_PRESENTATION != 'I' && data.CLINICAL_EDUCATION != 'I' && data.DISSERTATION != 'I'
                        && data1.INTELLECTUAL_PROPERTY != 'I' && data1.TAXATION != 'I') {
                        totalMarks = parseInt(data.CONSERVATION_LAW) + parseInt(data.INTERNATIONAL_LAW) + parseInt(data.PRE_TRIAL_PRESENTATION) + parseInt(data.CLINICAL_EDUCATION)
                            + parseInt(data.DISSERTATION) + parseInt(data1.INTELLECTUAL_PROPERTY) + parseInt(data1.TAXATION);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR == 'I' && data.INTERNATIONAL_HUMANITARIAN == 'I' && data.CONSERVATION_LAW == 'I'
                        && data.INTERNATIONAL_LAW != 'I' && data.PRE_TRIAL_PRESENTATION != 'I' && data.CLINICAL_EDUCATION != 'I' && data.DISSERTATION != 'I'
                        && data1.INTELLECTUAL_PROPERTY != 'I' && data1.TAXATION != 'I') {
                        totalMarks = parseInt(data.INTERNATIONAL_LAW) + parseInt(data.PRE_TRIAL_PRESENTATION) + parseInt(data.CLINICAL_EDUCATION)
                            + parseInt(data.DISSERTATION) + parseInt(data1.INTELLECTUAL_PROPERTY) + parseInt(data1.TAXATION);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR == 'I' && data.INTERNATIONAL_HUMANITARIAN == 'I' && data.CONSERVATION_LAW == 'I'
                        && data.INTERNATIONAL_LAW == 'I' && data.PRE_TRIAL_PRESENTATION != 'I' && data.CLINICAL_EDUCATION != 'I' && data.DISSERTATION != 'I'
                        && data1.INTELLECTUAL_PROPERTY != 'I' && data1.TAXATION != 'I') {
                        totalMarks = parseInt(data.PRE_TRIAL_PRESENTATION) + parseInt(data.CLINICAL_EDUCATION)
                            + parseInt(data.DISSERTATION) + parseInt(data1.INTELLECTUAL_PROPERTY) + parseInt(data1.TAXATION);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR == 'I' && data.INTERNATIONAL_HUMANITARIAN == 'I' && data.CONSERVATION_LAW == 'I'
                        && data.INTERNATIONAL_LAW == 'I' && data.PRE_TRIAL_PRESENTATION == 'I' && data.CLINICAL_EDUCATION != 'I' && data.DISSERTATION != 'I'
                        && data1.INTELLECTUAL_PROPERTY != 'I' && data1.TAXATION != 'I') {
                        totalMarks = parseInt(data.CLINICAL_EDUCATION) + parseInt(data.DISSERTATION) + parseInt(data1.INTELLECTUAL_PROPERTY) + parseInt(data1.TAXATION);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR == 'I' && data.INTERNATIONAL_HUMANITARIAN == 'I' && data.CONSERVATION_LAW == 'I'
                        && data.INTERNATIONAL_LAW == 'I' && data.PRE_TRIAL_PRESENTATION == 'I' && data.CLINICAL_EDUCATION == 'I' && data.DISSERTATION != 'I'
                        && data1.INTELLECTUAL_PROPERTY != 'I' && data1.TAXATION != 'I') {
                        totalMarks = parseInt(data.DISSERTATION) + parseInt(data1.INTELLECTUAL_PROPERTY) + parseInt(data1.TAXATION);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR == 'I' && data.INTERNATIONAL_HUMANITARIAN == 'I' && data.CONSERVATION_LAW == 'I'
                        && data.INTERNATIONAL_LAW == 'I' && data.PRE_TRIAL_PRESENTATION == 'I' && data.CLINICAL_EDUCATION == 'I' && data.DISSERTATION == 'I'
                        && data1.INTELLECTUAL_PROPERTY != 'I' && data1.TAXATION != 'I') {
                        totalMarks = parseInt(data1.INTELLECTUAL_PROPERTY) + parseInt(data1.TAXATION);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR == 'I' && data.INTERNATIONAL_HUMANITARIAN == 'I' && data.CONSERVATION_LAW == 'I'
                        && data.INTERNATIONAL_LAW == 'I' && data.PRE_TRIAL_PRESENTATION == 'I' && data.CLINICAL_EDUCATION == 'I' && data.DISSERTATION == 'I'
                        && data1.INTELLECTUAL_PROPERTY == 'I' && data1.TAXATION != 'I') {
                        totalMarks = parseInt(data1.TAXATION);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR == 'I' && data.INTERNATIONAL_HUMANITARIAN == 'I' && data.CONSERVATION_LAW == 'I'
                        && data.INTERNATIONAL_LAW == 'I' && data.PRE_TRIAL_PRESENTATION == 'I' && data.CLINICAL_EDUCATION == 'I' && data.DISSERTATION == 'I'
                        && data1.INTELLECTUAL_PROPERTY == 'I' && data1.TAXATION == 'I') {
                        percent = 0;
                    }

                    Llbstudent.update(
                        { PERCENT: percent },
                        { where: { SID: req.body.SId } }
                    )
                        .then(data1 => {
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
        LEGAL_PHILOSOPHY: req.body.LegalPhilosophy,
        AGRARIAN: req.body.Agrarian,
        LABOUR: req.body.Labour,
        INTERNATIONAL_HUMANITARIAN: req.body.InternationalHumanitarian,
        CONSERVATION_LAW: req.body.ConservationLaw,
        INTERNATIONAL_LAW: req.body.InternationalLaw,
        PRE_TRIAL_PRESENTATION: req.body.PreTrialPresentation,
        CLINICAL_EDUCATION: req.body.ClinicalEducation,
        DISSERTATION: req.body.Dissertation,
        LLBSTUDENTID: req.body.SId
    };

    Fifthyear.create(fifthyear)
        .then(data => {
            const fifthyearconstitution = {
                LAW_OF_EQUITY: req.body.LawOfEquity,
                LAW_ON_GENDER: req.body.LawOfGender,
                FIFTHYEARID: data.ID
            };

            FifthyearConstitutional.create(fifthyearconstitution)
                .then(data1 => {

                    var totalMarks = 0;
                    var percent = 0;

                    if (data.LEGAL_PHILOSOPHY != 'I' && data.AGRARIAN != 'I' && data.LABOUR != 'I' && data.INTERNATIONAL_HUMANITARIAN != 'I' && data.CONSERVATION_LAW != 'I'
                        && data.INTERNATIONAL_LAW != 'I' && data.PRE_TRIAL_PRESENTATION != 'I' && data.CLINICAL_EDUCATION != 'I' && data.DISSERTATION != 'I'
                        && data1.LAW_OF_EQUITY != 'I' && data1.LAW_ON_GENDER != 'I') {
                        totalMarks = parseInt(data.LEGAL_PHILOSOPHY) + parseInt(data.AGRARIAN) + parseInt(data.LABOUR) + parseInt(data.INTERNATIONAL_HUMANITARIAN) + parseInt(data.CONSERVATION_LAW)
                            + parseInt(data.INTERNATIONAL_LAW) + parseInt(data.PRE_TRIAL_PRESENTATION) + parseInt(data.CLINICAL_EDUCATION)
                            + parseInt(data.DISSERTATION) + parseInt(data1.LAW_OF_EQUITY) + parseInt(data1.LAW_ON_GENDER);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN != 'I' && data.LABOUR != 'I' && data.INTERNATIONAL_HUMANITARIAN != 'I' && data.CONSERVATION_LAW != 'I'
                        && data.INTERNATIONAL_LAW != 'I' && data.PRE_TRIAL_PRESENTATION != 'I' && data.CLINICAL_EDUCATION != 'I' && data.DISSERTATION != 'I'
                        && data1.LAW_OF_EQUITY != 'I' && data1.LAW_ON_GENDER != 'I') {
                        totalMarks = parseInt(data.AGRARIAN) + parseInt(data.LABOUR) + parseInt(data.INTERNATIONAL_HUMANITARIAN) + parseInt(data.CONSERVATION_LAW)
                            + parseInt(data.INTERNATIONAL_LAW) + parseInt(data.PRE_TRIAL_PRESENTATION) + parseInt(data.CLINICAL_EDUCATION)
                            + parseInt(data.DISSERTATION) + parseInt(data1.LAW_OF_EQUITY) + parseInt(data1.LAW_ON_GENDER);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR != 'I' && data.INTERNATIONAL_HUMANITARIAN != 'I' && data.CONSERVATION_LAW != 'I'
                        && data.INTERNATIONAL_LAW != 'I' && data.PRE_TRIAL_PRESENTATION != 'I' && data.CLINICAL_EDUCATION != 'I' && data.DISSERTATION != 'I'
                        && data1.LAW_OF_EQUITY != 'I' && data1.LAW_ON_GENDER != 'I') {
                        totalMarks =  parseInt(data.LABOUR) + parseInt(data.INTERNATIONAL_HUMANITARIAN) + parseInt(data.CONSERVATION_LAW)
                            + parseInt(data.INTERNATIONAL_LAW) + parseInt(data.PRE_TRIAL_PRESENTATION) + parseInt(data.CLINICAL_EDUCATION)
                            + parseInt(data.DISSERTATION) + parseInt(data1.LAW_OF_EQUITY) + parseInt(data1.LAW_ON_GENDER);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR == 'I' && data.INTERNATIONAL_HUMANITARIAN != 'I' && data.CONSERVATION_LAW != 'I'
                        && data.INTERNATIONAL_LAW != 'I' && data.PRE_TRIAL_PRESENTATION != 'I' && data.CLINICAL_EDUCATION != 'I' && data.DISSERTATION != 'I'
                        && data1.LAW_OF_EQUITY != 'I' && data1.LAW_ON_GENDER != 'I') {
                        totalMarks = parseInt(data.INTERNATIONAL_HUMANITARIAN) + parseInt(data.CONSERVATION_LAW)
                            + parseInt(data.INTERNATIONAL_LAW) + parseInt(data.PRE_TRIAL_PRESENTATION) + parseInt(data.CLINICAL_EDUCATION)
                            + parseInt(data.DISSERTATION) + parseInt(data1.LAW_OF_EQUITY) + parseInt(data1.LAW_ON_GENDER);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR == 'I' && data.INTERNATIONAL_HUMANITARIAN == 'I' && data.CONSERVATION_LAW != 'I'
                        && data.INTERNATIONAL_LAW != 'I' && data.PRE_TRIAL_PRESENTATION != 'I' && data.CLINICAL_EDUCATION != 'I' && data.DISSERTATION != 'I'
                        && data1.LAW_OF_EQUITY != 'I' && data1.LAW_ON_GENDER != 'I') {
                        totalMarks = parseInt(data.CONSERVATION_LAW) + parseInt(data.INTERNATIONAL_LAW) + parseInt(data.PRE_TRIAL_PRESENTATION) + parseInt(data.CLINICAL_EDUCATION)
                            + parseInt(data.DISSERTATION) + parseInt(data1.LAW_OF_EQUITY) + parseInt(data1.LAW_ON_GENDER);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR == 'I' && data.INTERNATIONAL_HUMANITARIAN == 'I' && data.CONSERVATION_LAW == 'I'
                        && data.INTERNATIONAL_LAW != 'I' && data.PRE_TRIAL_PRESENTATION != 'I' && data.CLINICAL_EDUCATION != 'I' && data.DISSERTATION != 'I'
                        && data1.LAW_OF_EQUITY != 'I' && data1.LAW_ON_GENDER != 'I') {
                        totalMarks = parseInt(data.INTERNATIONAL_LAW) + parseInt(data.PRE_TRIAL_PRESENTATION) + parseInt(data.CLINICAL_EDUCATION)
                            + parseInt(data.DISSERTATION) + parseInt(data1.LAW_OF_EQUITY) + parseInt(data1.LAW_ON_GENDER);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR == 'I' && data.INTERNATIONAL_HUMANITARIAN == 'I' && data.CONSERVATION_LAW == 'I'
                        && data.INTERNATIONAL_LAW == 'I' && data.PRE_TRIAL_PRESENTATION != 'I' && data.CLINICAL_EDUCATION != 'I' && data.DISSERTATION != 'I'
                        && data1.LAW_OF_EQUITY != 'I' && data1.LAW_ON_GENDER != 'I') {
                        totalMarks = parseInt(data.PRE_TRIAL_PRESENTATION) + parseInt(data.CLINICAL_EDUCATION)
                            + parseInt(data.DISSERTATION) + parseInt(data1.LAW_OF_EQUITY) + parseInt(data1.LAW_ON_GENDER);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR == 'I' && data.INTERNATIONAL_HUMANITARIAN == 'I' && data.CONSERVATION_LAW == 'I'
                        && data.INTERNATIONAL_LAW == 'I' && data.PRE_TRIAL_PRESENTATION == 'I' && data.CLINICAL_EDUCATION != 'I' && data.DISSERTATION != 'I'
                        && data1.LAW_OF_EQUITY != 'I' && data1.LAW_ON_GENDER != 'I') {
                        totalMarks = parseInt(data.CLINICAL_EDUCATION) + parseInt(data.DISSERTATION) + parseInt(data1.LAW_OF_EQUITY) + parseInt(data1.LAW_ON_GENDER);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR == 'I' && data.INTERNATIONAL_HUMANITARIAN == 'I' && data.CONSERVATION_LAW == 'I'
                        && data.INTERNATIONAL_LAW == 'I' && data.PRE_TRIAL_PRESENTATION == 'I' && data.CLINICAL_EDUCATION == 'I' && data.DISSERTATION != 'I'
                        && data1.LAW_OF_EQUITY != 'I' && data1.LAW_ON_GENDER != 'I') {
                        totalMarks = parseInt(data.DISSERTATION) + parseInt(data1.LAW_OF_EQUITY) + parseInt(data1.LAW_ON_GENDER);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR == 'I' && data.INTERNATIONAL_HUMANITARIAN == 'I' && data.CONSERVATION_LAW == 'I'
                        && data.INTERNATIONAL_LAW == 'I' && data.PRE_TRIAL_PRESENTATION == 'I' && data.CLINICAL_EDUCATION == 'I' && data.DISSERTATION == 'I'
                        && data1.LAW_OF_EQUITY != 'I' && data1.LAW_ON_GENDER != 'I') {
                        totalMarks = parseInt(data1.LAW_OF_EQUITY) + parseInt(data1.LAW_ON_GENDER);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR == 'I' && data.INTERNATIONAL_HUMANITARIAN == 'I' && data.CONSERVATION_LAW == 'I'
                        && data.INTERNATIONAL_LAW == 'I' && data.PRE_TRIAL_PRESENTATION == 'I' && data.CLINICAL_EDUCATION == 'I' && data.DISSERTATION == 'I'
                        && data1.LAW_OF_EQUITY == 'I' && data1.LAW_ON_GENDER != 'I') {
                        totalMarks = parseInt(data1.LAW_ON_GENDER);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR == 'I' && data.INTERNATIONAL_HUMANITARIAN == 'I' && data.CONSERVATION_LAW == 'I'
                        && data.INTERNATIONAL_LAW == 'I' && data.PRE_TRIAL_PRESENTATION == 'I' && data.CLINICAL_EDUCATION == 'I' && data.DISSERTATION == 'I'
                        && data1.LAW_OF_EQUITY == 'I' && data1.LAW_ON_GENDER == 'I') {
                        percent = 0;
                    }

                    Llbstudent.update(
                        { PERCENT: percent },
                        { where: { SID: req.body.SId } }
                    )
                        .then(data1 => {
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
        LEGAL_PHILOSOPHY: req.body.LegalPhilosophy,
        AGRARIAN: req.body.Agrarian,
        LABOUR: req.body.Labour,
        INTERNATIONAL_HUMANITARIAN: req.body.InternationalHumanitarian,
        CONSERVATION_LAW: req.body.ConservationLaw,
        INTERNATIONAL_LAW: req.body.InternationalLaw,
        PRE_TRIAL_PRESENTATION: req.body.PreTrialPresentation,
        CLINICAL_EDUCATION: req.body.ClinicalEducation,
        DISSERTATION: req.body.Dissertation,
        LLBSTUDENTID: req.body.SId
    };

    Fifthyear.create(fifthyear)
        .then(data => {
            const fifthyearenvironment = {
                ENERGY_LAW: req.body.EnergyLaw,
                CIVIL_AVIATION: req.body.CivilAviation,
                FIFTHYEARID: data.ID
            };

            FifthyearEnvironment.create(fifthyearenvironment)
                .then(data1 => {

                    var totalMarks = 0;
                    var percent = 0;

                    if (data.LEGAL_PHILOSOPHY != 'I' && data.AGRARIAN != 'I' && data.LABOUR != 'I' && data.INTERNATIONAL_HUMANITARIAN != 'I' && data.CONSERVATION_LAW != 'I'
                        && data.INTERNATIONAL_LAW != 'I' && data.PRE_TRIAL_PRESENTATION != 'I' && data.CLINICAL_EDUCATION != 'I' && data.DISSERTATION != 'I'
                        && data1.ENERGY_LAW != 'I' && data1.CIVIL_AVIATION != 'I') {
                        totalMarks = parseInt(data.LEGAL_PHILOSOPHY) + parseInt(data.AGRARIAN) + parseInt(data.INTERNATIONAL_HUMANITARIAN) + parseInt(data.CONSERVATION_LAW)
                            + parseInt(data.INTERNATIONAL_LAW) + parseInt(data.PRE_TRIAL_PRESENTATION) + parseInt(data.CLINICAL_EDUCATION)
                            + parseInt(data.DISSERTATION) + parseInt(data1.ENERGY_LAW) + parseInt(data1.CIVIL_AVIATION);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN != 'I' && data.LABOUR != 'I' && data.INTERNATIONAL_HUMANITARIAN != 'I' && data.CONSERVATION_LAW != 'I'
                        && data.INTERNATIONAL_LAW != 'I' && data.PRE_TRIAL_PRESENTATION != 'I' && data.CLINICAL_EDUCATION != 'I' && data.DISSERTATION != 'I'
                        && data1.ENERGY_LAW != 'I' && data1.CIVIL_AVIATION != 'I') {
                        totalMarks = parseInt(data.AGRARIAN) + parseInt(data.INTERNATIONAL_HUMANITARIAN) + parseInt(data.CONSERVATION_LAW)
                            + parseInt(data.INTERNATIONAL_LAW) + parseInt(data.PRE_TRIAL_PRESENTATION) + parseInt(data.CLINICAL_EDUCATION)
                            + parseInt(data.DISSERTATION) + parseInt(data1.ENERGY_LAW) + parseInt(data1.CIVIL_AVIATION);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR != 'I' && data.INTERNATIONAL_HUMANITARIAN != 'I' && data.CONSERVATION_LAW != 'I'
                        && data.INTERNATIONAL_LAW != 'I' && data.PRE_TRIAL_PRESENTATION != 'I' && data.CLINICAL_EDUCATION != 'I' && data.DISSERTATION != 'I'
                        && data1.ENERGY_LAW != 'I' && data1.CIVIL_AVIATION != 'I') {
                        totalMarks = parseInt(data.LABOUR) + parseInt(data.INTERNATIONAL_HUMANITARIAN) + parseInt(data.CONSERVATION_LAW)
                            + parseInt(data.INTERNATIONAL_LAW) + parseInt(data.PRE_TRIAL_PRESENTATION) + parseInt(data.CLINICAL_EDUCATION)
                            + parseInt(data.DISSERTATION) + parseInt(data1.ENERGY_LAW) + parseInt(data1.CIVIL_AVIATION);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR == 'I' && data.INTERNATIONAL_HUMANITARIAN != 'I' && data.CONSERVATION_LAW != 'I'
                        && data.INTERNATIONAL_LAW != 'I' && data.PRE_TRIAL_PRESENTATION != 'I' && data.CLINICAL_EDUCATION != 'I' && data.DISSERTATION != 'I'
                        && data1.ENERGY_LAW != 'I' && data1.CIVIL_AVIATION != 'I') {
                        totalMarks = parseInt(data.INTERNATIONAL_HUMANITARIAN) + parseInt(data.CONSERVATION_LAW)
                            + parseInt(data.INTERNATIONAL_LAW) + parseInt(data.PRE_TRIAL_PRESENTATION) + parseInt(data.CLINICAL_EDUCATION)
                            + parseInt(data.DISSERTATION) + parseInt(data1.ENERGY_LAW) + parseInt(data1.CIVIL_AVIATION);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR == 'I' && data.INTERNATIONAL_HUMANITARIAN == 'I' && data.CONSERVATION_LAW != 'I'
                        && data.INTERNATIONAL_LAW != 'I' && data.PRE_TRIAL_PRESENTATION != 'I' && data.CLINICAL_EDUCATION != 'I' && data.DISSERTATION != 'I'
                        && data1.ENERGY_LAW != 'I' && data1.CIVIL_AVIATION != 'I') {
                        totalMarks = parseInt(data.CONSERVATION_LAW) + parseInt(data.INTERNATIONAL_LAW) + parseInt(data.PRE_TRIAL_PRESENTATION) + parseInt(data.CLINICAL_EDUCATION)
                            + parseInt(data.DISSERTATION) + parseInt(data1.ENERGY_LAW) + parseInt(data1.CIVIL_AVIATION);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR == 'I' && data.INTERNATIONAL_HUMANITARIAN == 'I' && data.CONSERVATION_LAW == 'I'
                        && data.INTERNATIONAL_LAW != 'I' && data.PRE_TRIAL_PRESENTATION != 'I' && data.CLINICAL_EDUCATION != 'I' && data.DISSERTATION != 'I'
                        && data1.ENERGY_LAW != 'I' && data1.CIVIL_AVIATION != 'I') {
                        totalMarks = parseInt(data.INTERNATIONAL_LAW) + parseInt(data.PRE_TRIAL_PRESENTATION) + parseInt(data.CLINICAL_EDUCATION)
                            + parseInt(data.DISSERTATION) + parseInt(data1.ENERGY_LAW) + parseInt(data1.CIVIL_AVIATION);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR == 'I' && data.INTERNATIONAL_HUMANITARIAN == 'I' && data.CONSERVATION_LAW == 'I'
                        && data.INTERNATIONAL_LAW == 'I' && data.PRE_TRIAL_PRESENTATION != 'I' && data.CLINICAL_EDUCATION != 'I' && data.DISSERTATION != 'I'
                        && data1.ENERGY_LAW != 'I' && data1.CIVIL_AVIATION != 'I') {
                        totalMarks = parseInt(data.PRE_TRIAL_PRESENTATION) + parseInt(data.CLINICAL_EDUCATION)
                            + parseInt(data.DISSERTATION) + parseInt(data1.ENERGY_LAW) + parseInt(data1.CIVIL_AVIATION);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR == 'I' && data.INTERNATIONAL_HUMANITARIAN == 'I' && data.CONSERVATION_LAW == 'I'
                        && data.INTERNATIONAL_LAW == 'I' && data.PRE_TRIAL_PRESENTATION == 'I' && data.CLINICAL_EDUCATION != 'I' && data.DISSERTATION != 'I'
                        && data1.ENERGY_LAW != 'I' && data1.CIVIL_AVIATION != 'I') {
                        totalMarks = parseInt(data.CLINICAL_EDUCATION) + parseInt(data.DISSERTATION) + parseInt(data1.ENERGY_LAW) + parseInt(data1.CIVIL_AVIATION);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR == 'I' && data.INTERNATIONAL_HUMANITARIAN == 'I' && data.CONSERVATION_LAW == 'I'
                        && data.INTERNATIONAL_LAW == 'I' && data.PRE_TRIAL_PRESENTATION == 'I' && data.CLINICAL_EDUCATION == 'I' && data.DISSERTATION != 'I'
                        && data1.ENERGY_LAW != 'I' && data1.CIVIL_AVIATION != 'I') {
                        totalMarks = parseInt(data.DISSERTATION) + parseInt(data1.ENERGY_LAW) + parseInt(data1.CIVIL_AVIATION);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR == 'I' && data.INTERNATIONAL_HUMANITARIAN == 'I' && data.CONSERVATION_LAW == 'I'
                        && data.INTERNATIONAL_LAW == 'I' && data.PRE_TRIAL_PRESENTATION == 'I' && data.CLINICAL_EDUCATION == 'I' && data.DISSERTATION == 'I'
                        && data1.ENERGY_LAW != 'I' && data1.CIVIL_AVIATION != 'I') {
                        totalMarks = parseInt(data1.ENERGY_LAW) + parseInt(data1.CIVIL_AVIATION);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR == 'I' && data.INTERNATIONAL_HUMANITARIAN == 'I' && data.CONSERVATION_LAW == 'I'
                        && data.INTERNATIONAL_LAW == 'I' && data.PRE_TRIAL_PRESENTATION == 'I' && data.CLINICAL_EDUCATION == 'I' && data.DISSERTATION == 'I'
                        && data1.ENERGY_LAW == 'I' && data1.CIVIL_AVIATION != 'I') {
                        totalMarks = parseInt(data1.CIVIL_AVIATION);
                        percent = (totalMarks / 800) * 100;
                    }
                    else if (data.LEGAL_PHILOSOPHY == 'I' && data.AGRARIAN == 'I' && data.LABOUR == 'I' && data.INTERNATIONAL_HUMANITARIAN == 'I' && data.CONSERVATION_LAW == 'I'
                        && data.INTERNATIONAL_LAW == 'I' && data.PRE_TRIAL_PRESENTATION == 'I' && data.CLINICAL_EDUCATION == 'I' && data.DISSERTATION == 'I'
                        && data1.ENERGY_LAW == 'I' && data1.CIVIL_AVIATION == 'I') {
                        percent = 0;
                    }

                    Llbstudent.update(
                        { PERCENT: percent },
                        { where: { SID: req.body.SId } }
                    )
                        .then(data1 => {
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
                });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while entering marks."
            });
        });
}

exports.Search = async (req, res) => {
    try {
        const student = await db.sequelize.query('SELECT LS.SNAME,FY.LEGAL_PHILOSOPHY,FY.AGRARIAN,FY.LABOUR,FY.INTERNATIONAL_HUMANITARIAN,FY.CONSERVATION_LAW,FY.INTERNATIONAL_LAW,FY.PRE_TRIAL_PRESENTATION,FY.CLINICAL_EDUCATION,FY.DISSERTATION,IFNULL(FYC.ORGANIZED_CRIME,0),IFNULL(FYC.FISCAL_CRIME,0),IFNULL(FYB.INTELLECTUAL_PROPERTY,0),IFNULL(FYB.TAXATION,0),IFNULL(FYCN.LAW_OF_EQUITY,0),IFNULL(FYCN.LAW_ON_GENDER,0),IFNULL(FYE.ENERGY_LAW,0),IFNULL(FYE.CIVIL_AVIATION,0) FROM llbstudent AS LS join fifthyear AS FY on LS.SID = FY.SID left join FIFTHYEAR_CRIMINAL FYC on FYC.FIFTHYEARID = FY.FIFTHYEARID left join FIFTHYEAR_BUSINESS FYB ON FYB.FIFTHYEARID = FY.FIFTHYEARID left join FIFTHYEAR_CONSTITUTIONAL FYCN ON FYCN.FIFTHYEARID = FY.FIFTHYEARID left join FIFTHYEAR_ENVIRONMENT FYE ON FYE.FIFTHYEARID = FY.FIFTHYEARID WHERE LS.PRGID = (:prgid) AND LS.GRPID = (:grpid)', {
            replacements: {
                prgid: req.query.prgid,
                grpid: req.query.grpid
            },
            type: db.sequelize.QueryTypes.SELECT
        });

        res.send(student);
    }
    catch (err) {
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
        where: { ID: id }
    })
        .then(num => {
            if (num == 1) {
                const criminal = {
                    ORGANIZED_CRIME: req.body.Criminal.OrganizedCrime,
                    FISCAL_CRIME: req.body.Criminal.FiscalCrime
                };

                FifthyearCriminal.update(criminal)({
                    where: { ID: cid }
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
        where: { ID: id }
    })
        .then(num => {
            if (num == 1) {
                const business = {
                    INTELLECTUAL_PROPERTY: req.body.Business.IntellectualProperty,
                    TAXATION: req.body.Business.Taxation
                };

                FifthyearBusiness.update(business)({
                    where: { ID: bid }
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
        where: { ID: id }
    })
        .then(num => {
            if (num == 1) {
                const constitutional = {
                    LAW_OF_EQUITY: req.body.Constitutional.LawOfEquity,
                    LAW_ON_GENDER: req.body.Constitutional.LawOfGender
                };

                FifthyearConstitutional.update(constitutional)({
                    where: { ID: cuid }
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
        where: { ID: id }
    })
        .then(num => {
            if (num == 1) {
                const environment = {
                    ENERGY_LAW: req.body.Constitutional.EnergyLaw,
                    CIVIL_AVIATION: req.body.Constitutional.CivilAviation
                };

                FifthyearEnvironment.update(environment)({
                    where: { ID: eid }
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

    Fifthyear.findAll({ where: { ID: id }, raw: true })
        .then(data => {
            Llbstudent.update(
                { PERCENT: null },
                { where: { ID: data[0].LLBSTUDENTID } },
            )
                .then(num => {
                    if (num == 1) {
                        Fifthyear.destroy({
                            where: { ID: id }
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
                    } else {
                        res.send({
                            message: `Cannot update Student with id=${id}. Maybe Student was not found or req.body is empty!`
                        });
                    }
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Error updating Student with id=" + id
                    });
                });
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Student with id=" + id
            });
        });

            
}