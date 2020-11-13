const db = require("../connect/Connect");
const Llbstudent = db.LLBSTUDENT;
const Llmstudent = db.LLMSTUDENT;

const Op = db.Sequelize.Op;

exports.CreateLLB = (req, res) => {
    const student = {
        SNAME : req.body.SNAME,
        EXAM_NO : req.body.EXAM_NO,
        ROLL_NO : req.body.ROLL_NO,
        EMAIL : req.body.EMAIL,
        PHONE_NO : req.body.PHONE_NO,
        GENDER : req.body.GENDER,
        BATCH : req.body.BATCH,
        YEAR : req.body.YEAR,
        PROGRAMMEID : req.body.PRGID,
        LLBGROUPID : req.body.GRPID
    }; 

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

exports.CreateLLM = (req, res) => {
    const student = {
        SNAME : req.body.SNAME,
        EXAM_NO : req.body.EXAM_NO,
        ROLL_NO : req.body.ROLL_NO,
        EMAIL : req.body.EMAIL,
        PHONE_NO : req.body.PHONE_NO,
        GENDER : req.body.GENDER,
        BATCH : req.body.BATCH,
        YEAR : req.body.YEAR,
        PROGRAMMEID : req.body.PRGID,
        LLMGROUPID : req.body.GRPID
    }; 

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

exports.UpdateLLB = (req, res) => {
    const id = req.params.Id;

        Llbstudent.update(req.body, {
            where: { ID: id }
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

exports.UpdateLLM = (req, res) => {
    const id = req.params.Id;

        Llmstudent.update(req.body, {
            where: { ID: id }
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

exports.DeleteLLB = (req, res) => {
    const id = req.params.Id;
    
        Llbstudent.destroy({
            where: { ID: id }
        })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Student was deleted successfully!",
              status: true
            });
          } else {
            res.send({
              message: `Cannot delete Student with id=${id}. Maybe Student was not found!`,
              status: false
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete Student with id=" + id,
            status: false
          });
        });
}

exports.DeleteLLM = (req, res) => {
    const id = req.params.Id;
    
        Llmstudent.destroy({
            where: { ID: id }
        })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Student was deleted successfully!",
              status: true
            });
          } else {
            res.send({
              message: `Cannot delete Student with id=${id}. Maybe Student was not found!`,
              status: false
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete Student with id=" + id
          });
        });
}

exports.FindAllLLB = (req,res) => {
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

exports.FindAllLLM = (req,res) => {
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

// exports.FindById = (req,res) => {
//     const id = req.params.Id;

//     if(req.body.Programme == 'LLB'){
//         Llbstudent.findAll({where: {
//             SID: id
//          }})
//         .then(data =>{
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//               message:
//                 err.message || "Some error occurred while retrieving Student."
//             });
//         });
//     }
//     else if(req.body.Programme == 'LLM'){
//         Llmstudent.findAll({where: {
//             SID: id
//          }})
//         .then(data =>{
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//             message:
//                 err.message || "Some error occurred while retrieving Student."
//             });
//         });
//     }
//     else {
//         res.status(500).send({
//             message:
//             err.message || "Plese select programme."
//         });
//     }
    
// }

exports.FindAllStudent = async (req,res) => {
    
    try{
        const llbstudent = await db.sequelize.query('SELECT * from LLBSTUDENT', {
            type: db.sequelize.QueryTypes.SELECT
          });
          const llmstudent = await db.sequelize.query('SELECT * from LLMSTUDENT', {
            type: db.sequelize.QueryTypes.SELECT
          });
    
          res.send(llbstudent.concat(llmstudent));
    }
    catch(err){
        res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving Student."
          });
    }

}

exports.SearchLLBStudent = (req, res) => {

    Llbstudent.findAll({
        where: { 
            PROGRAMMEID: req.query.prgid,
            [Op.or]: [
                {
                    LLBGROUPID: req.query.grpid
                },
                {
                    LLBGROUPID: {
                        [Op.is]: null
                    }
                }
            ]
         }
    })
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

  exports.SearchLLMStudent = (req, res) => {

    Llmstudent.findAll({
        where: { 
            PROGRAMMEID: req.query.prgid,
            [Op.or]:[
                {
                    LLMGROUPID: req.query.grpid
                },
                {
                    LLMGROUPID:{
                        [Op.is]:null
                    }
                }
                ]
         }
    })
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