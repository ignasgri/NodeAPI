//hard coded "database"
var fs = require('fs');
var data = fs.readFileSync('names.json');
var names = JSON.parse(data);
//console.log(names);

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

//get request (add information)
app.get('/add/:name/:age?', addName);
function addName(request, response) {
    var data = request.params;
    var name = data.name;
    var age = Number(data.age);
    var reply;
    if (!age) {
        var reply = {
            msg: "Age is required!"
        }
        response.send(reply);

    } else {
        names[name] = age;
        var data = JSON.stringify(names);
        fs.writeFile('names.json', data, finished);

        function finished(err) {
            console.log('all set.');
            reply = {
                name: name,
                age: age,
                status: "Success",
                msg: "Name and age was added, thanks you!"
            }
            response.send(reply);
        }
    }
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
