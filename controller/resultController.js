const db = require("../connect/Connect");

exports.getLLBFirst = async (req, res) => {
    try {
        const student = await db.sequelize.query(`SELECT LB.SNAME,LB.PERCENT,LB.ROLL_NO,LB.EXAM_NO,LB.BATCH,IFNULL(F.POLITICAL,0) AS POLITICAL,IFNULL(F.ECONOMIC,0) AS ECONOMIC,
        IFNULL(F.HISTORY_OF_NEPAL,0) AS HISTORY_OF_NEPAL,IFNULL(F.SOCOLOGY,0) AS SOCOLOGY,IFNULL(F.PRINCIPLE_OF_LAW,0) AS PRINCIPLE_OF_LAW,IFNULL(F.CONCEPT_OF_LAW,0) AS PRINCIPLE_OF_LAW,IFNULL(F.LOGIC_LEGAL_REASONING,0) AS LOGIC_LEGAL_REASONING,
        IFNULL(F.CLINICAL_WORK,0) AS CLINICAL_WORK
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
        IFNULL(SY.ENGLISH,0) AS ENGLISH,IFNULL(SY.NEPALI,0) AS NEPALI,IFNULL(SY.INTERNATIONAL_RELATION,0) AS INTERNATIONAL_RELATION,IFNULL(SY.LEGISLATIVE_PRINCIPLE,0) AS LEGISLATIVE_PRINCIPLE,
        IFNULL(SY.PROCEDURE_LAW,0) AS PROCEDURE_LAW,IFNULL(SY.SOCOLOGY,0) AS SOCOLOGY,IFNULL(SY.CRIMINAL_LAW,0) AS CRIMINAL_LAW,IFNULL(SY.CLINICAL_COURSE,0) AS CLINICAL_COURSE
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
        IFNULL(TY.INTERNATIONAL_HUMAN_RIGHT,0) AS INTERNATIONAL_HUMAN_RIGHT,IFNULL(TY.INTERPRETATION,0) AS INTERPRETATION,IFNULL(TY.LAW_EVIDENCE,0) AS LAW_EVIDENCE,IFNULL(TY.INTERNATIONAL_LAW,0) AS INTERNATIONAL_LAW,
        IFNULL(TY.CONSTITUTIONAL_LAW,0) AS CONSTITUTIONAL_LAW,IFNULL(TY.LEGAL_RESEARCH,0) AS LEGAL_RESEARCH,IFNULL(TY.PROFESSIONAL_ETHICS,0) AS PROFESSIONAL_ETHICS,IFNULL(TY.CLINICAL_LEGAL_EDUCATION,0) AS CLINICAL_LEGAL_EDUCATION,IFNULL(TY.CLINICAL_WORK,0) AS CLINICAL_WORK
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
        IFNULL(FY.CLINICAL_EDUCATION,0) AS CLINICAL_EDUCATION,IFNULL(FY.ADVANCED_JURISPRUDENCE,0) AS ADVANCED_JURISPRUDENCE,IFNULL(FY.CONTRACT_LAW,0) AS CONTRACT_LAW,IFNULL(FY.COMPANY_LAW,0) AS COMPANY_LAW,
        IFNULL(FY.ADMINISTATIVE_LAW,0) AS ADMINISTATIVE_LAW,IFNULL(FY.CLINICAL_LEGAL_EDUCATION,0) AS CLINICAL_LEGAL_EDUCATION,IFNULL(FY.INTERNATIONAL_DISPUTES,0) AS INTERNATIONAL_DISPUTES,
        IFNULL(FYC.FORENSIC,0) AS FORENSIC,IFNULL(FYC.CRIMINOLOGY,0) AS CRIMINOLOGY
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
        IFNULL(FY.CLINICAL_EDUCATION,0) AS CLINICAL_EDUCATION,IFNULL(FY.ADVANCED_JURISPRUDENCE,0) AS ADVANCED_JURISPRUDENCE,IFNULL(FY.CONTRACT_LAW,0) AS CONTRACT_LAW,IFNULL(FY.COMPANY_LAW,0) AS COMPANY_LAW,
        IFNULL(FY.ADMINISTATIVE_LAW,0) AS ADMINISTATIVE_LAW,IFNULL(FY.CLINICAL_LEGAL_EDUCATION,0) AS CLINICAL_LEGAL_EDUCATION,IFNULL(FY.INTERNATIONAL_DISPUTES,0) AS INTERNATIONAL_DISPUTES,
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
        IFNULL(FY.CLINICAL_EDUCATION,0) AS CLINICAL_EDUCATION,IFNULL(FY.ADVANCED_JURISPRUDENCE,0) AS ADVANCED_JURISPRUDENCE,IFNULL(FY.CONTRACT_LAW,0) AS CONTRACT_LAW,IFNULL(FY.COMPANY_LAW,0) AS COMPANY_LAW,
        IFNULL(FY.ADMINISTATIVE_LAW,0) AS ADMINISTATIVE_LAW,IFNULL(FY.CLINICAL_LEGAL_EDUCATION,0) AS CLINICAL_LEGAL_EDUCATION,IFNULL(FY.INTERNATIONAL_DISPUTES,0) AS INTERNATIONAL_DISPUTES,
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
        IFNULL(FY.CLINICAL_EDUCATION,0) AS CLINICAL_EDUCATION,IFNULL(FY.ADVANCED_JURISPRUDENCE,0) AS ADVANCED_JURISPRUDENCE,IFNULL(FY.CONTRACT_LAW,0) AS CONTRACT_LAW,IFNULL(FY.COMPANY_LAW,0) AS COMPANY_LAW,
        IFNULL(FY.ADMINISTATIVE_LAW,0) AS ADMINISTATIVE_LAW,IFNULL(FY.CLINICAL_LEGAL_EDUCATION,0) AS CLINICAL_LEGAL_EDUCATION,IFNULL(FY.INTERNATIONAL_DISPUTES,0) AS INTERNATIONAL_DISPUTES,
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
        IFNULL(FY.LEGAL_PHILOSOPHY,0) AS LEGAL_PHILOSOPHY,IFNULL(FY.AGRARIAN,0) AS AGRARIAN,IFNULL(FY.INTERNATIONAL_HUMANITARIAN,0) AS INTERNATIONAL_HUMANITARIAN,IFNULL(FY.CONSERVATION_LAW,0) AS CONSERVATION_LAW,
        IFNULL(FY.INTERNATIONAL_LAW,0) AS INTERNATIONAL_LAW,IFNULL(FY.PRE_TRIAL_PRESENTATION,0) AS PRE_TRIAL_PRESENTATION,IFNULL(FY.CLINICAL_EDUCATION,0) AS CLINICAL_EDUCATION,IFNULL(DISSERTATION,0) AS DISSERTATION,
        IFNULL(FYC.ORGANIZED_CRIME,0) AS ORGANIZED_CRIME,IFNULL(FYC.FISCAL_CRIME,0) AS FISCAL_CRIME
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
        IFNULL(FY.LEGAL_PHILOSOPHY,0) AS LEGAL_PHILOSOPHY,IFNULL(FY.AGRARIAN,0) AS AGRARIAN,IFNULL(FY.INTERNATIONAL_HUMANITARIAN,0) AS INTERNATIONAL_HUMANITARIAN,IFNULL(FY.CONSERVATION_LAW,0) AS CONSERVATION_LAW,
        IFNULL(FY.INTERNATIONAL_LAW,0) AS INTERNATIONAL_LAW,IFNULL(FY.PRE_TRIAL_PRESENTATION,0) AS PRE_TRIAL_PRESENTATION,IFNULL(FY.CLINICAL_EDUCATION,0) AS CLINICAL_EDUCATION,IFNULL(DISSERTATION,0) AS DISSERTATION,
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
        IFNULL(FY.LEGAL_PHILOSOPHY,0) AS LEGAL_PHILOSOPHY,IFNULL(FY.AGRARIAN,0) AS AGRARIAN,IFNULL(FY.INTERNATIONAL_HUMANITARIAN,0) AS INTERNATIONAL_HUMANITARIAN,IFNULL(FY.CONSERVATION_LAW,0) AS CONSERVATION_LAW,
        IFNULL(FY.INTERNATIONAL_LAW,0) AS INTERNATIONAL_LAW,IFNULL(FY.PRE_TRIAL_PRESENTATION,0) AS PRE_TRIAL_PRESENTATION,IFNULL(FY.CLINICAL_EDUCATION,0) AS CLINICAL_EDUCATION,IFNULL(DISSERTATION,0) AS DISSERTATION,
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
        IFNULL(FY.LEGAL_PHILOSOPHY,0) AS LEGAL_PHILOSOPHY,IFNULL(FY.AGRARIAN,0) AS AGRARIAN,IFNULL(FY.INTERNATIONAL_HUMANITARIAN,0) AS INTERNATIONAL_HUMANITARIAN,IFNULL(FY.CONSERVATION_LAW,0) AS CONSERVATION_LAW,
        IFNULL(FY.INTERNATIONAL_LAW,0) AS INTERNATIONAL_LAW,IFNULL(FY.PRE_TRIAL_PRESENTATION,0) AS PRE_TRIAL_PRESENTATION,IFNULL(FY.CLINICAL_EDUCATION,0) AS CLINICAL_EDUCATION,IFNULL(DISSERTATION,0) AS DISSERTATION,
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
        IFNULL(FYH.LEGAL_RESEARCH,0) AS LEGAL_RESEARCH,IFNULL(FYH.COMPARATIVE_STUDY,0) AS COMPARATIVE_STUDY,IFNULL(FYH.NEPALESE_STUDY,0) AS NEPALESE_STUDY,IFNULL(FYH.CIVIL_POLITICAL,0) AS CIVIL_POLITICAL
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
        IFNULL(FYB.LEGAL_RESEARCH,0) AS LEGAL_RESEARCH,IFNULL(FYB.COMPARATIVE_STUDY,0) AS COMPARATIVE_STUDY,IFNULL(FYB.CONTRACT_LAW,0) AS CONTRACT_LAW,IFNULL(FYB.INTELLECTUAL_PROPERTY,0) AS INTELLECTUAL_PROPERTY
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
        IFNULL(FYC.LEGAL_RESEARCH,0) AS LEGAL_RESEARCH,IFNULL(FYC.COMPARATIVE_STUDY,0) AS COMPARATIVE_STUDY,IFNULL(FYC.CRIMINAL_LAW,0) AS CRIMINAL_LAW,IFNULL(FYC.FORENSIC,0) AS FORENSIC,
        IFNULL(FYC.JUVINAL_JUSTICE,0) AS JUVINAL_JUSTICE
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
        IFNULL(SYH.FEMINIST_JURISPRUDENCE,0) AS FEMINIST_JURISPRUDENCE,IFNULL(SYH.WOMEN_HUMAN_RIGHT,0) AS WOMEN_HUMAN_RIGHT,IFNULL(SYH.ECONOMIC_SOCIAL_CULTURE,0) AS ECONOMIC_SOCIAL_CULTURE,IFNULL(SYH.DISSERTATION,0) AS DISSERTATION
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
        IFNULL(SYB.BANKING_LAW,0) AS BANKING_LAW,IFNULL(SYB.CORPORATE_MANAGEMENT,0) AS CORPORATE_MANAGEMENT,IFNULL(SYB.TRADE_LAW,0) AS TRADE_LAW,IFNULL(SYB.TAXATION,0) AS TAXATION,
        IFNULL(SYB.INSURANCE,0) AS INSURANCE,IFNULL(SYB.DISSERTATION,0) AS DISSERTATION
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
        IFNULL(SYC.CRIMINOLOGY,0) AS CRIMINOLOGY,IFNULL(SYC.FAIR_TRAIL,0) AS FAIR_TRAIL,IFNULL(SYC.WHITE_COLLAR,0) AS WHITE_COLLAR,IFNULL(SYC.DISSERTATION,0) AS DISSERTATION
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