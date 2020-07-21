const express = require('express');
const router = express.Router();

// Import the model to use its database functions.
const burger = require('../models/burger');
const orm = require('../config/orm')

// get route 
router.get('/', function(req, res){
  // setting the select orm method to a variable 
  const selectAllBurgers = orm.selectAll()

  // render index page and send the data to the burgers table 
  selectAllBurgers
    .then(function(data){ 
      res.render('index', { burgers: data })
    })
})

router.post('/', function(req, res){
  // setting the insert orm method to a variable 
  const postBurger = orm.insertOne(req.body.burger_name);

  // sending the data of the id of the new burger 
  postBurger 
    .then(function(data){
      res.json({ 
        id: data,
      })
    })
})

router.put('/:id', function(req, res){
  // setting the update orm method to a variable 
  const eat = orm.updateOne(true, req.params.id)

  // if update was successful - send a 200 response
  eat
    .then(function(){
      res.status(200).end()
    })
})

module.exports = router;