const express = require('express');
const router = express.Router();

const { Sub } = require('../db').models;

router.get('/', (req, res, next) => {
  Sub.genPool()
    .then(pool => res.send(pool))
    .catch(error => next(error))
});

router.get('/winner', (req, res, next) => {
  return Sub.winner()
    .then(winner => res.send(winner))
    .catch(error => next(error))
})

router.post('/', (req, res, next) => {
  Sub.findOrCreate({
    where: {
      email: req.body.email
    }
  })
    .then(result => res.send(result))  // result is array where [0] = instance and [1] = wasCreated boolean
    .catch(error => next(error))
})




module.exports = router;
