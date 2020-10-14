const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const key = require('../AppConfig');

const db = require("../connect/Connect");
const User = db.USER;
const Op = db.Sequelize.Op;

exports.Create = (req, res) => {

    User.findAll({where: {
            username: req.body.username
         }})
        .then(user =>{
            if(user.length >= 1){
                return res.status(409).json({
                    message: "Username already exist"
                })
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if(err){
                        return res.send(500).json({
                            error: err
                        })
                    } else {
                        const user = {
                            username: req.body.username,
                            password: hash
                          };
            
                          User.create(user)
                            .then(data => {
                            res.send(data);
                            })
                            .catch(err => {
                            res.status(500).send({
                                message:
                                err.message || "Some error occurred while creating the User."
                            });
                            });
                    }
                })
            }
        })
};


exports.login = (req, res) => {

    User.findAll({where: {
        username: req.body.username
     }})
     .then(user => {
        if(user.length < 1){
            return res.status(401).json({
                message: "Auth failed"
            })
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            // if(err){
            //     return res.status(401).json({
            //         message: "Auth failed"
            //     })
            // }
            // if(result){
                const token = jwt.sign({
                    username: user[0].username,
                    id : user[0].id
                },
                'secret',
                {
                    expiresIn: "1h"
                }
                );
                return res.status(401).json({
                    message: "Auth Successfull",
                    token: "Bearer " + token
                })
            // }
            // return res.status(401).json({
            //     message: "Auth failed"
            // })
        })
     })
     .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the User."
        });
        });
}
