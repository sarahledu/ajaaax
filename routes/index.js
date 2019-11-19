var express = require('express');
var router = express.Router();
var boxModel = require("../models/Box");

/* GET home page. */
router.get('/', function(req, res, next) {
  boxModel.find().then(dbRes => {

    const colors =  [...new Set(dbRes.map(b => b.color))];
    
    res.render("index", {boxes: dbRes, colors: colors, js:[""]})
  }).catch(err => console.log(err))
});


router.post("/filter-boxes", (req,res) => {
  console.log(req.body)
  const query = {};
  if(req.body.colors.length > 0){
    query.color = req.body.colors;
  }
  boxModel.find(query).then(dbRes => {
    res.send(dbRes)
  }).catch(err => console.log(err))
})

module.exports = router;
