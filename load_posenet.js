let video;
let poseNet;
let poses = [];

function setup() {
  const canvas = createCanvas(640, 480);
  canvas.parent('videoContainer');


  video = createCapture(VIDEO);
  video.size(width, height);


  poseNet = ml5.poseNet(video, modelReady);

  poseNet.on('pose', function(results) {
    poses = results;
  });
  
  function modelReady(){
  select('#status').html('model Loaded')}
}
