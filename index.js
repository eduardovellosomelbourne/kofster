var express = require('express');
var app = express();
var path = require('path');
var cafeData = require('./data/cafes.json');


app.use(express.static('public'));

// Create route for the root
app.get('/',function(req,res){
   res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(3000,function(req,res){
    console.log('Listening at port 3000');
    console.log(cafeData);
})



