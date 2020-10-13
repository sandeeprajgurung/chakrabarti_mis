const db = require("../connect/Connect");
const Llbstudent = db.LLBSTUDENT;
const Llmstudent = db.LLMSTUDENT;
const Op = db.Sequelize.Op;

exports.Create = (req, res) => {
    const student = {
        SNAME : req.body.Name,
        EXAM_NO : req.body.ExamNo,
        ROLL_NO : req.body.RollNo,
        EMAIL : req.body.Email,
        PHONE_NO : req.body.Phone,
        GENDER : req.body.Gender,
        BATCH : req.body.Batch,
        YEAR : req.body.Year,
        PRGID : req.body.PrgId,
        GRPID : req.body.GrpId
    };

    if(req.body.Programme == 'LLB'){
        Llbstudent.create(student)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the Student."
            });
        });
    }
    else if (req.body.Programme == 'LLM'){
        Llmstudent.create(student)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the Student."
            });
            });
    }
    else {
        res.status(500).send({
            message:
            err.message || "Plese select programme."
        });
    }
    
}

exports.Update = (req, res) => {
    const id = req.params.Id;

    if(req.body.Programme == 'LLB') {
        Llbstudent.update(req.body, {
            where: { SID: id }
        })
        .then(num => {
            if (num == 1) {
            res.send({
                message: "Student was updated successfully."
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
    }
    else if (req.body.Programme == 'LLM'){
        Llmstudent.update(req.body, {
            where: { SID: id }
        })
        .then(num => {
            if (num == 1) {
            res.send({
                message: "Student was updated successfully."
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
    }
    else {
        res.status(500).send({
            message:
            err.message || "Plese select programme."
        });
    }
    
}

exports.Delete = (req, res) => {
    const id = req.params.Id;
    
    if(req.body.Programme == 'LLB') {
        Llbstudent.destroy({
            where: { SID: id }
        })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Student was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete Student with id=${id}. Maybe Student was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete Student with id=" + id
          });
        });
    }
    else if(req.body.Programme =='LLM'){
        Llmstudent.destroy({
            where: { SID: id }
        })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Student was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete Student with id=${id}. Maybe Student was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete Student with id=" + id
          });
        });
    }
    else {
        res.status(500).send({
            message:
            err.message || "Plese select programme."
        });
    }
}

exports.FindAll = (req,res) => {
    if(req.body.Programme == 'LLB'){
        Llbstudent.findAll()
        .then(data =>{
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving Student."
            });
        });
    }
    else if(req.body.Programme == 'LLM'){
        Llmstudent.findAll()
        .then(data =>{
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving Student."
            });
        });
    }
    else {
        res.status(500).send({
            message:
            err.message || "Plese select programme."
        });
    }
    
}

exports.FindById = (req,res) => {
    const id = req.params.Id;

    if(req.body.Programme == 'LLB'){
        Llbstudent.findAll({where: {
            SID: id
         }})
        .then(data =>{
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving Student."
            });
        });
    }
    else if(req.body.Programme == 'LLM'){
        Llmstudent.findAll({where: {
            SID: id
         }})
        .then(data =>{
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving Student."
            });
        });
    }
    else {
        res.status(500).send({
            message:
            err.message || "Plese select programme."
        });
    }
    
}