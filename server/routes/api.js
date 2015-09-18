var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Beer = require('../models/beer');

// Post/CREATE a beer
router.post('/beer',function(req,res,next){
  newBeer = new Beer({
    name:req.body.name,
    hoppy:req.body.hoppy
  });
  newBeer.save(function(err,data){
    if(err){
      res.json({'message':err});
    } else{
      res.json(data);
    }
  });
});
// GET ALL BEERS
router.get('/beer',function(req,res,next){
  Beer.find(function(err,data){
    if(err){
      res.json({'message':err});
    } else{
      res.json(data);
    }
  });
});
// GET SINGLE BEER
router.get('/beer/:id',function(req,res,next){
  Beer.findyById(req.params.id,function(err,data){
    if(err){
      res.json({'message':err});
    } else{
      res.json(data);
    }
  });
});
// PUT/UPDATE SINGLE beer
router.put('/beer/:id',function(req,res,nect){
  var update = {
    name:req.body.name,
    hoppy:req.body.hoppy
  };
  Beer.findByIdAndUpdate(req.params.id,update,function(err,data){
    if(err){
      res.json({'message':err});
    } else{
        res.json(data);
    }
  });
});
// DELETE SINGLE USER
router.delete('/beer/:id',function(req,res,next){
  Beer.findByIdAndRemove(req.params.id,function(err,data){
    if(err){
      res.json({'message':err});
    }else{
      res.json(data);
    }
  });
});



module.exports = router;
