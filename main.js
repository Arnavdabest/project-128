leftwristx = 0;
leftwristy = 0;
rightwristx = 0;
rightwristy = 0;

function setup(){
    canvas = createCanvas(600,450);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotposes);
}

function modelloaded(){
    console.log("modelloaded");
}

function gotposes(result){
    console.log(result);
    if(result.length > 0){
        leftwristx = result[0].pose.leftWrist.x;
        leftwristy = result[0].pose.leftWrist.y;
        rightwristx = result[0].pose.rightWrist.x;
        rightwristy = result[0].pose.rightWrist.y;
    }
}

function draw(){
    image(video, 0, 0, 600, 450);
}