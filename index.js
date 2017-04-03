var express = require('express');
var app = express();

// Create route for the root
app.get('/',function(req,res){
   res.send('Hello World');
});

app.listen(3000,function(req,res){
    console.log('Listening at port 3000');
})



