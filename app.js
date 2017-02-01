var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");
var dict = require("./dictionary.json");
var port = process.env.PORT || 8080;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extented:false}));

app.use(function(req,res,next){
  console.log(`${req.method} request to ${req.url} - ${JSON.stringify(req.body)}`);
  next();
});
app.use(express.static("./public"));

var recentSearch = [];
app.post('/',function(req,res,next){
  if(recentSearch.length == 5){
    recentSearch.splice((recentSearch.length-1),1);
  }
  var temp = req.body.word.toUpperCase();
  var temp1 = dict[temp];
  console.log('temp : '+ temp);
  console.log('temp1 : '+ temp1);
  var obj = `{${req.body.word}:${temp1}}`;
  recentSearch.unshift(obj);
  res.json(recentSearch);
  console.log(obj);
});

app.get('/recentSearch',function(req,res){
  res.json(recentSearch);
});
app.listen(port);
console.log("'Listening to port 8080 '");
module.export = app;
