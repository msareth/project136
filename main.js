status = "";

function setup() {
    canvas = createCanvas(480, 360)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "Status: detecting object"
    input = document.getElementById("input").value;
}

function modelLoaded() {
    console.log("Model has loaded")
    status = true;
}

function draw() {
    image(video, 0, 0, 480, 360)
}