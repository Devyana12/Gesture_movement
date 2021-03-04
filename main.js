nose_x=""
nose_y = ""
right_wrist_x=""
right_wrist_y = ""
left_wrist_x = ""
left_wrist_y = ""
difference = ""
function preload(){
    
}
function setup(){
canvas = createCanvas(500, 500)
canvas.position(700 , 100)
video=createCapture(VIDEO)
video.size(500,500)

 poseNet = ml5.poseNet(video , modelLoaded);
 poseNet.on("pose" , gotPoses)
}

function draw(){
background("pink");
fill("purple")
square(nose_x  , nose_y , difference);

}
function modelLoaded() {
    console.log('PoseNet is initialized')
}
function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = "+results[0].pose.nose.x);
        console.log("nose y = "+results[0].pose.nose.y);
        nose_y = results[0].pose.nose.y;
        nose_x = results[0].pose.nose.x;
        right_wrist_x = results[0].pose.rightWrist.x
        left_wrist_x =results[0].pose.leftWrist.x
        left_wrist_y = results[0].pose.leftWrist.y
        right_wrist_y = results[0].pose.rightWrist.y
        difference = right_wrist_x - left_wrist_x
    }
}
