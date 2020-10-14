const db = require("../connect/Connect");
const Secondyear = db.SECONDYEAR;
const Op = db.Sequelize.Op;

exports.FindAll=(req,res)=>{
    Secondyear.findAll()
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

// exports.Search=async (req,res)=>{
//     try{
//         const student = await db.sequelize.query('SELECT LS.SNAME,SY.ENGLISH,SY.NEPALI,SY.INTERNATIONAL_RELATION,SY.LEGISLATIVE_PRINCIPLE,SY.PROCEDURE_LAW,SY.SOCOLOGY,SY.CRIMINAL_LAW,SY.CLINICAL_COURSE FROM llbstudent AS LS join secondyear AS SY on LS.SID = SY.SID WHERE LS.PRGID = (:prgid)', {
//             replacements: {prgid: req.query.prgid},
//             type: db.sequelize.QueryTypes.SELECT
//           });
    
//           res.send(student);
//     }
//     catch(err){
//         res.status(500).send({
//             message:
//               err.message || "Some error occurred while retrieving Student."
//           });
//     }
   
// }

exports.Search = (req, res) => {

  Secondyear.findAll({
    where: { PRGID: req.query.prgid }
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

exports.Update = (req, res) => {
    const id = req.params.Id;

        Secondyear.update(req.body, {
            where: { SECONDYEARID: id }
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

exports.Delete = (req, res) => {
    const id = req.params.Id;
    
        Secondyear.destroy({
            where: { SECONDYEARID: id }
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