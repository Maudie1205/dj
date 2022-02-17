song = "";

function preload()
{
    song = loadSound("music.mp3")
}

function setup() {
    canvas = creatCanvas(600, 500);
    canvas.center();

    video = creatCapture(VIDEO);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}