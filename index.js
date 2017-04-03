var express = require('express');
var app = express();
var path = require('path');
var cafeData = require('./data/cafes.json');


app.use(express.static('public'));
app.set('view engine','ejs');

// Create route for the root
app.get('/',function(req,res){
   res.render("index",{
       pageId:'home'
   });
});

// Create route for cafes page
app.get('/cafes',function(req,res){
   res.render("index",{
       pageId:'cafes',
       cafeData:cafeData});
});

app.listen(3000,function(req,res){
    console.log('Listening at port 3000');
})



