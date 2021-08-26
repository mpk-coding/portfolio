//
//  2 steps
//  rng currentTime on rng setTimeout with varying transform: scale();
//  blur phase - reset timer
//
function randomizeVideos() {
  //
  console.log("aV has loaded!");
  //
  let videosContainer = document.querySelector(".background__videoContainer");
  let videosNodes = document.querySelectorAll(".background__video");
  let vide = document.querySelector(".background__video");
  //
  let getVideoDuration = Number(video.duration).toFixed(2).toString();
  let videoDuration = "";
  //
  for (let z = 0; z < getVideoDuration.length; z++) {
    if (getVideoDuration[z] != ".") {
      videoDuration += getVideoDuration[z];
      //
    }
    //
  }
  //
  //  in ms
  //
  videoDuration = Number(videoDuration * 10);
  //
  let transitionDuration = videoDuration / 2;
  //
  console.log(videoDuration);
  console.log(transitionDuration);
  //
  const initVideo = new Event("initVideo", {bubbles: true});
  //
  videosContainer.addEventListener("initVideo", function (event) {
    //
    setTimeout(function () {
      //  new background
    }, videoDuration - transitionDuration);
    //
  });
  //
}
//
