const { useColors } = require('debug/src/browser');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Auto = require('../modelos/autos');

/* GET users listing. */
router.get('/', function(req, res, next) {
  useColors.find({},(err,data)=>{
    res.status(200).json(data);
  });
});

module.exports = router;
