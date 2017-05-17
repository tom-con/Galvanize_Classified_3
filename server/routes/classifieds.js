'use strict';

const express = require('express');

const router = express.Router();
const knex = require('../knex.js')

// YOUR CODE HERE
router.get('/', function(req, res, next) {
  knex('classifieds')
    .then(classifieds => {
      res.status(200).send(classifieds)
    })
})

router.get('/:id', function(req, res, next) {
  knex('classifieds')
  .where('id', req.params.id)
    .select('id', 'title', 'description', 'price', 'item_image')
    .first()
    .then(classifieds => {
      res.status(200).send(classifieds)
    })
})

router.post('/', function(req, res, next) {
  knex('classifieds')
  .where('id', req.params.id)
    .insert(req.body)
    .returning(['id', 'title', 'description', 'price', 'item_image'])
    .then(classified => {
      res.status(200).send(classified[0])
    })
})

router.patch('/:id', function(req, res, next) {
  knex('classifieds')
  .where('id', req.params.id)
    .update(req.body)
    .returning(['id', 'title', 'description', 'price', 'item_image'])
    .then(classified => {
      res.status(200).send(classified[0])
    })
})

router.delete('/:id', function(req, res, next) {
  knex('classifieds')
  .where('id', req.params.id)
    .del()
    .returning(['id', 'title', 'description', 'price', 'item_image'])
    .then(classified => {
      res.status(200).send(classified[0])
    })
})

module.exports = router;
