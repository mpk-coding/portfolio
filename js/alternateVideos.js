function alternateVideos() {
  //
  //
  //
  console.log("aV has loaded!");
  //
  let videosContainer = document.querySelector(".background__videoContainer");
  let videosNodes = document.querySelectorAll(".background__video");
  let video = document.querySelector(".background__video");
  let videoHidden = document.querySelector(".background__video--hidden");
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
  let transitionDuration = 2000;
  //
  const initVideo = new Event("initVideo", {bubbles: true});
  //
  videosContainer.addEventListener("initVideo", function (event) {
    //
    let timestamp = event.target.dataset.timeStart * 1000;
    //
    // delay != > videoDuration - timestamp - transitionDuration
    let delay = Math.floor(
      Math.random() *
        ([
          videoDuration -
            timestamp -
            transitionDuration -
            transitionDuration / 2,
        ] -
          transitionDuration +
          transitionDuration / 2) +
        transitionDuration +
        transitionDuration / 2
    );
    //
    let newCurrentTime =
      Math.floor(
        Math.random() *
          ([
            videoDuration - delay - transitionDuration - transitionDuration / 2,
          ] -
            0) +
          0
      ) / 1000;
    //
    setTimeout(function () {
      //  new background
      let oldTarget = event.target;
      //
      //
      //
      oldTarget.style.setProperty(
        "--transitionDuration",
        transitionDuration / 1000 + "s"
      );
      //
      setTimeout(function () {
        oldTarget.classList.add("background__video--hidden");
        //
      }, transitionDuration / 2);
      //
      setTimeout(function () {
        //
        oldTarget.pause();
        //
      }, transitionDuration);
      //
      //
      //
      videosNodes = document.querySelectorAll(".background__video");
      //
      for (let element of videosNodes) {
        //  new foreground
        if (element != event.target) {
          //
          //  fix for DOMstructure taking precedence in overlay with opacity
          //
          videosContainer.append(element);
          //
          //  workaround technical limitations of transitions on elements being manipulated in DOM
          //  use @keyframes instead
          //
          element.style.setProperty(
            "--transitionDuration",
            transitionDuration / 1000 / 2 + "s"
          );
          setTimeout(function () {
            element.classList.remove("background__video--hidden");
          }, 10);
          //
          //  save the !event.target
          //
          newTarget = element;
          //
        }
        //
      }
      //
      //  start new cycle
      //
      newTarget.currentTime = newCurrentTime;
      //
      newTarget.dataset.timeStart = newCurrentTime;
      //
      setTimeout(function () {
        newTarget.play();
        newTarget.dispatchEvent(initVideo);
      }, 20);
      //
    }, delay);
    //
  });
  //
  videosNodes.forEach(function (currentValue) {
    //
    if (!currentValue.classList.contains("background__video--hidden")) {
      //
      currentValue.currentTime = 0;
      //
      currentValue.dataset.timeStart = 0;
      //
      currentValue.play();
      currentValue.dispatchEvent(initVideo);
      //
    }
    //
  });
  //
}
//
