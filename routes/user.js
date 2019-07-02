const router = require('express').Router();
const models = require('../models');
const User = models.User;

router.get("/", (req, res) => {
    User.findAll()
    .then(users => {
        const userList = users.map(user => user.dataValues)
        res.send(userList)
    });
});

router.get("/:id", (req, resp) => {
    User.findByPk(req.params.id)
    .then(users => {
        resp.send(users)
    })
});

router.post("/", (req, res) => {
    Users.create(req.body)
    .then(user => {
        res.status(201).send(user)
    });
});

router.put("/:id", (req, res) => {
    Users.update({... req.params.body}, {where: {id: req.params.id}})
    .then(() => {
        Users
        .findByPk(req.params.id)
        .then(user => res.send(user.dataValues))
    });
});

router.delete("/:id", (req, res) => {
    Users.destroy({where: {id: req.params.id}})
    .then(() => res.sendStatus(200));
});


module.exports = router;