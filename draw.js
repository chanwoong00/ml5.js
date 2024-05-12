function draw() {
  image(video, 0, 0, width, height);

  drawKeypoints();
  drawSkeleton();
}
