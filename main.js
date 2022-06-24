status_ = "";
value = "";

function setup()
{
    video = createCapture(VIDEO);
    video.size(480, 350);
    video.hide();
    canvas = createCanvas(480, 350);
    canvas.center();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    value = document.getElementById("text_box").value;
}

function draw()
{
    image(video, 0, 0, 480, 350);
}

function modelLoaded()
{
    console.log("Model Loaded");
    status_ = true;
}