console.log("testing ");

//importing express function to node
var express = require('express');
//web application
var app = express();
//server port 3000
var server = app.listen(3000, listening);

function listening(){
    console.log("listening...");
}
//letting use static files images, html etc.
app.use(express.static("website"));