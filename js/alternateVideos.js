function alternateVideos() {
  //
  console.log("aV has loaded!");
  //
  let videosContainer = document.querySelector(".background__videoContainer");
  let videosNodes = document.querySelectorAll(".background__video");
  //
  let getVideoDuration = Number(
    document.querySelector(".background__video").duration
  )
    .toFixed(2)
    .toString();
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
  console.log(videoDuration);
  console.log(transitionDuration);
  //
  const initVideo = new Event("initVideo", { bubbles: true });
  //
  videosContainer.addEventListener("initVideo", function (event) {
    //
    setTimeout(function () {
      //  new background
      event.target.style.transitionTimingFunction = "ease-in";
      //
      event.target.style.transitionDuration = transitionDuration / 1000 + "s";
      event.target.classList.add("background__video--hidden");
      //
      //
      //
      videosNodes = document.querySelectorAll(".background__video");
      for (let element of videosNodes) {
        //  new foreground
        if (element != event.target) {
          //
          element.style.transitionProperty = "opacity";
          element.style.transitionDuration =
            transitionDuration / 1000 / 2 + "s";
          element.style.transitionTimingFunction = "ease-out";
          //
          //  fix for DOMstructure taking precedence in overlay with opacity
          //
          videosContainer.append(element);
          //
          //  workaround technical limitations of transitions on elements being manipulated in DOM
          //  use @keyframes instead
          //
          setTimeout(function () {
            element.classList.remove("background__video--hidden");
          }, 100);
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
      newTarget.currentTime = 0;
      newTarget.play();
      newTarget.dispatchEvent(initVideo);
      //
    }, videoDuration - transitionDuration);
    //
  });
  //
  videosNodes.forEach(function (currentValue) {
    //
    currentValue.style.transitionProperty = "opacity";
    currentValue.style.transitionTimingFunction = "ease-out";
    currentValue.style.transitionDuration = transitionDuration / 1000 + "s";
    //
    if (!currentValue.classList.contains("background__video--hidden")) {
      //
      currentValue.style.transitionTimingFunction = "ease-in";
      currentValue.style.transitionDuration =
        transitionDuration / 1000 / 2 + "s";
      currentValue.currentTime = 0;
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
