const Users = require('../models/users.model.js');

// Create and Save a new Note
exports.create = (req, res) => {

    if(!req.body.tou) {
        return res.status(400).send({
            message: "Note TOU can not be empty"
        });
    }

    // Create a Note
    const users = new Users({
        tou: req.body.tou,
        email: req.body.email,
        password: req.body.password,
        capd: req.body.capd,
        capm: req.body.capm,
        mat: req.body.mat,
        loc: req.body.loc,
        tod: req.body.tod,
        train: req.body.train,

    });

    // Save Note in the database
    users.save()
    .then(data => {
        res.send(data);
        console.log(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};