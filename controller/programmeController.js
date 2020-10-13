const db = require("../connect/Connect");
const Programme = db.PROGRAMME;
const Op = db.Sequelize.Op;

exports.FindAll = (req, res) => {
    Programme.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Programme."
        });
    });
}