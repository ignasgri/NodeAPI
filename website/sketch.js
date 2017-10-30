function setup(){
    createCanvas(400, 400);
    background(51);
    loadJSON('names', gotData);
    console.log('running');

    var button = select('#submit');
    button.mousePressed(submitName);
}
function submitName () {
    var name = select('#name').value();
    var age = select('#age').value();
    console.log(name, age);
}

function gotData(data){
    console.log(data);
    var keys = Object.keys(data);
    for (var i=0; i< keys.length; i++) {
        var name = keys[i];
        var age = data[name];
        var x = random(width);
        var y = random(height);
        fill(255);
        textSize(30);
        text(name, x, y);
    }
    console.log(keys);
}