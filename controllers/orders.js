const router = require('express').Router();
const models = require('../models');
const Order = models.Order;

router.get("/", (req, res) => {
    Order.findAll()
    .then(users => {
        const userList = users.map(user => Order.dataValues)
        res.send(userList)
    });
});

router.get("/:id", (req, resp) => { Order.findOne({where: {id:req.params.id}})
    Order.findByPk(req.params.id)
    .then( user => {
        resp.send(user)
    })
});

router.post("/", (req, res) => {
    Order.create(req.body)
    .then(user => {
        res.status(201).send(user)
    });
});

router.put("/:id", (req, res) => {
    Order.update({... req.params.body}, {where: {id: req.params.id}})
    .then(() => {
        Order
        .findByPk(req.params.id)
        .then(user => res.send(user.dataValues))
    });
});

router.delete("/:id", (req, res) => {
    Order.destroy({where: {id: req.params.id}})
    .then(() => res.sendStatus(200));
});


module.exports = router;