function setup(){
    createCanvas(1000, 750);
    drawData();
    console.log('running');

    var button = select('#submit');
    button.mousePressed(submitName);
}
function drawData(){
    loadJSON('names', gotData);
}
function submitName () {
    var name = select('#name').value();
    var age = select('#age').value();
    console.log(name, age);

    loadJSON('add/' + name + '/' + age, finished);

    function finished(data) {
        console.log(data);
        // drawData();
    }
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
        textSize(15);
        text(name, x, y);
        fill(224, 22, 22)
        ellipse(x-10, y-10, 15, 15);
    }
    console.log(keys);
}
