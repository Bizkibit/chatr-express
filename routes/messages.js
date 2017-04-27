var express = require('express');
var router = express.Router();
const {Message} = require('../models');

router.get('/', function(req, res, next) {
  Message
    .findAll({order: [['createdAt', 'DESC']]})
    .then(messages => res.json(messages))
    // function (messages) { return res.json(messages) }
});

router.post('/', function(req, res, next) {
  const {content} = req.body;

  Message
    .create({content})
    .then(() => res.status(201).end())
});

router.delete('/:id', function(req, res, next) {
  const {id} = req.params;

  Message
    .findById(id)
    .then(message => message.destroy())
    .then(() => res.status(200).end())
});

module.exports = router;
