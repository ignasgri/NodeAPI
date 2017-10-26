//hard coded "database"
var names = {
    "Mike": 25,
    "Thomas": 13,
    "Molly": 17,
}
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
app.get('/add/:name/:age?', addName);
function addName(request, response) {
    var data = request.params;
    var name = data.name;
    var age = Number(data.age);
    var reply;
    if (!age) {
        reply = {
            msg: "Age is required!"
        }
    } else {
        names[name] = age;
        reply = {
            msg: "Name and age was added, thanks you!"
        }
    }
    response.send(reply);
}

//expose data (words) in json format
app.get('/names', sendAll);
function sendAll(request, response){
    response.send(names);
}

app.get('/search/:name/', searchName);
function searchName(request, response) {
    var name = request.params.name;
    var reply;
    if (names[name]) {
        reply = {
            status: "Name is in database!",
            name: name,
            score: names[name]
        }   
    } else {
        reply = {
            status: "Name dose not exist in database!",
            name: name
        }
    }
    response.send(reply);
}
