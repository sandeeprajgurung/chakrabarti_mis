const db = require("../connect/Connect");

exports.getLLBFirst = async (req, res) => {
    try {
        const student = await db.sequelize.query(`SELECT LB.SNAME,LB.PERCENT,LB.ROLL_NO,LB.EXAM_NO,LB.BATCH,IFNULL(F.POLITICAL,0),IFNULL(F.ECONOMIC,0),
        IFNULL(F.HISTORY_OF_NEPAL,0),IFNULL(F.SOCOLOGY,0),IFNULL(F.PRINCIPLE_OF_LAW,0),IFNULL(F.CONCEPT_OF_LAW,0),IFNULL(F.LOGIC_LEGAL_REASONING,0),
        IFNULL(F.CLINICAL_WORK,0)
        FROM LLBSTUDENT AS LB join FIRSTYEAR AS F on LB.SID = F.SID 
        WHERE LB.PRGID = (:prgid) AND LB.EXAM_NO = (:examno)`, {
            replacements: {
                prgid: req.query.prgid,
                examno: req.query.examno
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

exports.getLLBSecond = async (req, res) => {
    try {
        const student = await db.sequelize.query(`SELECT LB.SNAME,LB.PERCENT,LB.ROLL_NO,LB.EXAM_NO,LB.BATCH,
        IFNULL(SY.ENGLISH,0),IFNULL(SY.NEPALI,0),IFNULL(SY.INTERNATIONAL_RELATION,0),IFNULL(SY.LEGISLATIVE_PRINCIPLE,0),
        IFNULL(SY.PROCEDURE_LAW,0),IFNULL(SY.SOCOLOGY,0),IFNULL(SY.CRIMINAL_LAW,0),IFNULL(SY.CLINICAL_COURSE,0)
        FROM LLBSTUDENT AS LB join SECONDYEAR AS SY on LB.SID = SY.SID 
        WHERE LB.PRGID = (:prgid) AND LB.EXAM_NO = (:examno)`, {
            replacements: {
                prgid: req.query.prgid,
                examno: req.query.examno
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

exports.getLLBThird = async (req, res) => {
    try {
        const student = await db.sequelize.query(`SELECT LB.SNAME,LB.PERCENT,LB.ROLL_NO,LB.EXAM_NO,LB.BATCH,
        IFNULL(TY.INTERNATIONAL_HUMAN_RIGHT,0),IFNULL(TY.INTERPRETATION,0),IFNULL(TY.LAW_EVIDENCE,0),IFNULL(TY.INTERNATIONAL_LAW,0),
        IFNULL(TY.CONSTITUTIONAL_LAW,0),IFNULL(TY.LEGAL_RESEARCH,0),IFNULL(TY.PROFESSIONAL_ETHICS,0),IFNULL(TY.CLINICAL_LEGAL_EDUCATION,0),IFNULL(TY.CLINICAL_WORK,0)
        FROM LLBSTUDENT AS LB join THIRDYEAR AS TY on LB.SID = TY.SID 
        WHERE LB.PRGID = (:prgid) AND LB.EXAM_NO = (:examno)`, {
            replacements: {
                prgid: req.query.prgid,
                examno: req.query.examno
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

exports.getLLBFourthCriminal = async (req, res) => {
    try {
        const student = await db.sequelize.query(`SELECT LB.SNAME,LB.PERCENT,LB.ROLL_NO,LB.EXAM_NO,LB.BATCH,
        IFNULL(FY.CLINICAL_EDUCATION,0),IFNULL(FY.ADVANCED_JURISPRUDENCE,0),IFNULL(FY.CONTRACT_LAW,0),IFNULL(FY.COMPANY_LAW,0),
        IFNULL(FY.ADMINISTATIVE_LAW,0),IFNULL(FY.CLINICAL_LEGAL_EDUCATION,0),IFNULL(FY.INTERNATIONAL_DISPUTES,0),
        IFNULL(FYC.FORENSIC,0),IFNULL(FYC.CRIMINOLOGY,0)
        FROM LLBSTUDENT AS LB join FOURTHYEAR AS FY on LB.SID = FY.SID JOIN FOURTHYEAR_CRIMINAL AS FYC on FYC.FOURTHYEARID = FY.FOURTHYEARID
        WHERE LB.PRGID = (:prgid) AND LB.EXAM_NO = (:examno) AND LB.GRPID = (:grpid)`, {
            replacements: {
                prgid: req.query.prgid,
                examno: req.query.examno,
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

exports.getLLBFourthBusiness = async (req, res) => {
    try {
        const student = await db.sequelize.query(`SELECT LB.SNAME,LB.PERCENT,LB.ROLL_NO,LB.EXAM_NO,LB.BATCH,
        IFNULL(FY.CLINICAL_EDUCATION,0),IFNULL(FY.ADVANCED_JURISPRUDENCE,0),IFNULL(FY.CONTRACT_LAW,0),IFNULL(FY.COMPANY_LAW,0),
        IFNULL(FY.ADMINISTATIVE_LAW,0),IFNULL(FY.CLINICAL_LEGAL_EDUCATION,0),IFNULL(FY.INTERNATIONAL_DISPUTES,0),
        IFNULL(FYB.BANKING_INSURANCE,0),IFNULL(FYB.INTERNATIONAL_TRADE,0)
        FROM LLBSTUDENT AS LB join FOURTHYEAR AS FY on LB.SID = FY.SID JOIN FOURTHYEAR_BUSINESS AS FYB on FYB.FOURTHYEARID = FY.FOURTHYEARID
        WHERE LB.PRGID = (:prgid) AND LB.EXAM_NO = (:examno) AND LB.GRPID = (:grpid)`, {
            replacements: {
                prgid: req.query.prgid,
                examno: req.query.examno,
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

exports.getLLBFourthConstitutional = async (req, res) => {
    try {
        const student = await db.sequelize.query(`SELECT LB.SNAME,LB.PERCENT,LB.ROLL_NO,LB.EXAM_NO,LB.BATCH,
        IFNULL(FY.CLINICAL_EDUCATION,0),IFNULL(FY.ADVANCED_JURISPRUDENCE,0),IFNULL(FY.CONTRACT_LAW,0),IFNULL(FY.COMPANY_LAW,0),
        IFNULL(FY.ADMINISTATIVE_LAW,0),IFNULL(FY.CLINICAL_LEGAL_EDUCATION,0),IFNULL(FY.INTERNATIONAL_DISPUTES,0),
        IFNULL(FYC.GOOD_GONERNANCE,0),IFNULL(FYC.ELECTORAL_LAW,0)
        FROM LLBSTUDENT AS LB join FOURTHYEAR AS FY on LB.SID = FY.SID JOIN FOURTHYEAR_CONSTITUTIONAL AS FYC on FYC.FOURTHYEARID = FY.FOURTHYEARID
        WHERE LB.PRGID = (:prgid) AND LB.EXAM_NO = (:examno) AND LB.GRPID = (:grpid)`, {
            replacements: {
                prgid: req.query.prgid,
                examno: req.query.examno,
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

exports.getLLBFourthEnvironment = async (req, res) => {
    try {
        const student = await db.sequelize.query(`SELECT LB.SNAME,LB.PERCENT,LB.ROLL_NO,LB.EXAM_NO,LB.BATCH,
        IFNULL(FY.CLINICAL_EDUCATION,0),IFNULL(FY.ADVANCED_JURISPRUDENCE,0),IFNULL(FY.CONTRACT_LAW,0),IFNULL(FY.COMPANY_LAW,0),
        IFNULL(FY.ADMINISTATIVE_LAW,0),IFNULL(FY.CLINICAL_LEGAL_EDUCATION,0),IFNULL(FY.INTERNATIONAL_DISPUTES,0),
        IFNULL(FYE.ENVIRONMENT_LAW,0),IFNULL(FYE.WATER_RIVER,0)
        FROM LLBSTUDENT AS LB join FOURTHYEAR AS FY on LB.SID = FY.SID JOIN FOURTHYEAR_ENVIRONMENT AS FYE on FYE.FOURTHYEARID = FY.FOURTHYEARID
        WHERE LB.PRGID = (:prgid) AND LB.EXAM_NO = (:examno) AND LB.GRPID = (:grpid)`, {
            replacements: {
                prgid: req.query.prgid,
                examno: req.query.examno,
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

exports.getLLBFifthCriminal = async (req, res) => {
    try {
        const student = await db.sequelize.query(`SELECT LB.SNAME,LB.PERCENT,LB.ROLL_NO,LB.EXAM_NO,LB.BATCH,
        IFNULL(FY.LEGAL_PHILOSOPHY,0),IFNULL(FY.AGRARIAN,0),IFNULL(FY.INTERNATIONAL_HUMANITARIAN,0),IFNULL(FY.CONSERVATION_LAW,0),
        IFNULL(FY.INTERNATIONAL_LAW,0),IFNULL(FY.PRE_TRIAL_PRESENTATION,0),IFNULL(FY.CLINICAL_EDUCATION,0),IFNULL(DISSERTATION,0),
        IFNULL(FYC.ORGANIZED_CRIME,0),IFNULL(FYC.FISCAL_CRIME,0)
        FROM LLBSTUDENT AS LB join FIFTHYEAR AS FY on LB.SID = FY.SID JOIN FIFTHYEAR_CRIMINAL AS FYC on FYC.FIFTHYEARID = FY.FIFTHYEARID
        WHERE LB.PRGID = (:prgid) AND LB.EXAM_NO = (:examno) AND LB.GRPID = (:grpid)`, {
            replacements: {
                prgid: req.query.prgid,
                examno: req.query.examno,
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

exports.getLLBFifthBusiness = async (req, res) => {
    try {
        const student = await db.sequelize.query(`SELECT LB.SNAME,LB.PERCENT,LB.ROLL_NO,LB.EXAM_NO,LB.BATCH,
        IFNULL(FY.LEGAL_PHILOSOPHY,0),IFNULL(FY.AGRARIAN,0),IFNULL(FY.INTERNATIONAL_HUMANITARIAN,0),IFNULL(FY.CONSERVATION_LAW,0),
        IFNULL(FY.INTERNATIONAL_LAW,0),IFNULL(FY.PRE_TRIAL_PRESENTATION,0),IFNULL(FY.CLINICAL_EDUCATION,0),IFNULL(DISSERTATION,0),
        IFNULL(FYB.INTELLECTUAL_PROPERTY,0),IFNULL(FYB.TAXATION,0)
        FROM LLBSTUDENT AS LB join FIFTHYEAR AS FY on LB.SID = FY.SID JOIN FIFTHYEAR_BUSINESS AS FYB on FYB.FIFTHYEARID = FY.FIFTHYEARID
        WHERE LB.PRGID = (:prgid) AND LB.EXAM_NO = (:examno) AND LB.GRPID = (:grpid)`, {
            replacements: {
                prgid: req.query.prgid,
                examno: req.query.examno,
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

exports.getLLBFifthConstitutional = async (req, res) => {
    try {
        const student = await db.sequelize.query(`SELECT LB.SNAME,LB.PERCENT,LB.ROLL_NO,LB.EXAM_NO,LB.BATCH,
        IFNULL(FY.LEGAL_PHILOSOPHY,0),IFNULL(FY.AGRARIAN,0),IFNULL(FY.INTERNATIONAL_HUMANITARIAN,0),IFNULL(FY.CONSERVATION_LAW,0),
        IFNULL(FY.INTERNATIONAL_LAW,0),IFNULL(FY.PRE_TRIAL_PRESENTATION,0),IFNULL(FY.CLINICAL_EDUCATION,0),IFNULL(DISSERTATION,0),
        IFNULL(FYC.LAW_OF_EQUITY,0),IFNULL(FYC.LAW_ON_GENDER,0)
        FROM LLBSTUDENT AS LB join FIFTHYEAR AS FY on LB.SID = FY.SID JOIN FIFTHYEAR_CONSTITUTIONAL AS FYC on FYC.FIFTHYEARID = FY.FIFTHYEARID
        WHERE LB.PRGID = (:prgid) AND LB.EXAM_NO = (:examno) AND LB.GRPID = (:grpid)`, {
            replacements: {
                prgid: req.query.prgid,
                examno: req.query.examno,
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

exports.getLLBFifthEnvironment = async (req, res) => {
    try {
        const student = await db.sequelize.query(`SELECT LB.SNAME,LB.PERCENT,LB.ROLL_NO,LB.EXAM_NO,LB.BATCH,
        IFNULL(FY.LEGAL_PHILOSOPHY,0),IFNULL(FY.AGRARIAN,0),IFNULL(FY.INTERNATIONAL_HUMANITARIAN,0),IFNULL(FY.CONSERVATION_LAW,0),
        IFNULL(FY.INTERNATIONAL_LAW,0),IFNULL(FY.PRE_TRIAL_PRESENTATION,0),IFNULL(FY.CLINICAL_EDUCATION,0),IFNULL(DISSERTATION,0),
        IFNULL(FYE.ENERGY_LAW,0),IFNULL(FYE.CIVIL_AVIATION,0)
        FROM LLBSTUDENT AS LB join FIFTHYEAR AS FY on LB.SID = FY.SID JOIN FIFTHYEAR_ENVIRONMENT AS FYE on FYE.FIFTHYEARID = FY.FIFTHYEARID
        WHERE LB.PRGID = (:prgid) AND LB.EXAM_NO = (:examno) AND LB.GRPID = (:grpid)`, {
            replacements: {
                prgid: req.query.prgid,
                examno: req.query.examno,
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

exports.getLLMFirstHumanRights = async (req, res) => {
    try {
        const student = await db.sequelize.query(`SELECT LM.SNAME,LM.PERCENT,LM.ROLL_NO,LM.EXAM_NO,LM.BATCH,
        IFNULL(FYH.LEGAL_RESEARCH,0),IFNULL(FYH.COMPARATIVE_STUDY,0),IFNULL(FYH.NEPALESE_STUDY,0),IFNULL(FYH.CIVIL_POLITICAL,0)
        FROM LLMSTUDENT AS LM join FIRSTYEAR_HUMANRIGHTS AS FYH on LM.SID = FYH.SID
        WHERE LM.PRGID = (:prgid) AND LM.EXAM_NO = (:examno)`, {
            replacements: {
                prgid: req.query.prgid,
                examno: req.query.examno
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

exports.getLLMFirstBusiness = async (req, res) => {
    try {
        const student = await db.sequelize.query(`SELECT LM.SNAME,LM.PERCENT,LM.ROLL_NO,LM.EXAM_NO,LM.BATCH,
        IFNULL(FYB.LEGAL_RESEARCH,0),IFNULL(FYB.COMPARATIVE_STUDY,0),IFNULL(FYB.CONTRACT_LAW,0),IFNULL(FYB.INTELLECTUAL_PROPERTY,0)
        FROM LLMSTUDENT AS LM join FIRSTYEAR_BUSINESS AS FYB on LM.SID = FYB.SID
        WHERE LM.PRGID = (:prgid) AND LM.EXAM_NO = (:examno)`, {
            replacements: {
                prgid: req.query.prgid,
                examno: req.query.examno
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

exports.getLLMFirstCriminalLaw = async (req, res) => {
    try {
        const student = await db.sequelize.query(`SELECT LM.SNAME,LM.PERCENT,LM.ROLL_NO,LM.EXAM_NO,LM.BATCH,
        IFNULL(FYC.LEGAL_RESEARCH,0),IFNULL(FYC.COMPARATIVE_STUDY,0),IFNULL(FYC.CRIMINAL_LAW,0),IFNULL(FYC.FORENSIC,0),
        IFNULL(FYC.JUVINAL_JUSTICE,0)
        FROM LLMSTUDENT AS LM join FIRSTYEAR_CRIMINALLAW AS FYC on LM.SID = FYC.SID
        WHERE LM.PRGID = (:prgid) AND LM.EXAM_NO = (:examno)`, {
            replacements: {
                prgid: req.query.prgid,
                examno: req.query.examno
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

exports.getLLMSecondHumanRights = async (req, res) => {
    try {
        const student = await db.sequelize.query(`SELECT LM.SNAME,LM.PERCENT,LM.ROLL_NO,LM.EXAM_NO,LM.BATCH,
        IFNULL(SYH.FEMINIST_JURISPRUDENCE,0),IFNULL(SYH.WOMEN_HUMAN_RIGHT,0),IFNULL(SYH.ECONOMIC_SOCIAL_CULTURE,0),IFNULL(SYH.DISSERTATION,0)
        FROM LLMSTUDENT AS LM join SECONDYEAR_HUMANRIGHTS AS SYH on LM.SID = SYH.SID
        WHERE LM.PRGID = (:prgid) AND LM.EXAM_NO = (:examno)`, {
            replacements: {
                prgid: req.query.prgid,
                examno: req.query.examno
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

exports.getLLMSecondBusiness = async (req, res) => {
    try {
        const student = await db.sequelize.query(`SELECT LM.SNAME,LM.PERCENT,LM.ROLL_NO,LM.EXAM_NO,LM.BATCH,
        IFNULL(SYB.BANKING_LAW,0),IFNULL(SYB.CORPORATE_MANAGEMENT,0),IFNULL(SYB.TRADE_LAW,0),IFNULL(SYB.TAXATION,0),
        IFNULL(SYB.INSURANCE,0),IFNULL(SYB.DISSERTATION,0)
        FROM LLMSTUDENT AS LM join SECONDYEAR_BUSINESS AS SYB on LM.SID = SYB.SID
        WHERE LM.PRGID = (:prgid) AND LM.EXAM_NO = (:examno)`, {
            replacements: {
                prgid: req.query.prgid,
                examno: req.query.examno
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

exports.getLLMSecondCriminal = async (req, res) => {
    try {
        const student = await db.sequelize.query(`SELECT LM.SNAME,LM.PERCENT,LM.ROLL_NO,LM.EXAM_NO,LM.BATCH,
        IFNULL(SYC.CRIMINOLOGY,0),IFNULL(SYC.FAIR_TRAIL,0),IFNULL(SYC.WHITE_COLLAR,0),IFNULL(SYC.DISSERTATION,0)
        FROM LLMSTUDENT AS LM join SECONDYEAR_CRIMINALLAW AS SYC on LM.SID = SYC.SID
        WHERE LM.PRGID = (:prgid) AND LM.EXAM_NO = (:examno)`, {
            replacements: {
                prgid: req.query.prgid,
                examno: req.query.examno
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