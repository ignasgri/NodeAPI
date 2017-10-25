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

//get request
app.get('/search/:flower/:num', sendFlower);
function sendFlower(request, response) {
    var data = request.params;
    var num = data.num;
    var reply = "";
    for (var i=0; i< num; i++) {
        reply += "I love " + data.flower +" too";
    }
    response.send(reply);
}