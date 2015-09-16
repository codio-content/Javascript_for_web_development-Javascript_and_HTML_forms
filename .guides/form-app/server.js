var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser')

app.set('view engine', 'ejs');  

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json()); // Body parser use JSON data

app.get('/', function(req, res){
  //console.log(req.body)
  res.render('index', { 'postdata' : JSON.stringify(req.query) })
});

app.post('/', function(req, res){
  //console.log(req.body)
  res.render('index', { 'postdata' : JSON.stringify(req.body) })
});

http.listen(9500, function(){
  console.log('listening on *:9500');
});