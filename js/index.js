window.onload = function (event) {
  //
  console.log("index.js - Document loaded");
  //
  let bgVideo = document.querySelector(".background__video");
  //
  let events = [
    "loadstart",
    "loadeddata",
    "loadedmetadata",
    "canplay",
    "canplaythrough",
  ];
  //
  const bgVideoLoaded = new Event("videoLoaded", { bubbles: true });
  //
  for (let element of events) {
    bgVideo.addEventListener(element, function (event) {
      //
      bgVideo.dispatchEvent(bgVideoLoaded);
      //
    });
    //
  }
  //
  document.querySelector("body").addEventListener(
    "videoLoaded",
    function (event) {
      alternateVideos();
      //
    },
    { once: true }
  );
  //
};
//

//
//  1 janusz
//  2 backlight under cursor, ripple onclick || canvas shit
//  3 popcorn /px scroll + random shot of 1 or more popcorns
//  tba
