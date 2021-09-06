window.onload = function (event) {
  //  restore scroll
  window.scroll({
    left: 0,
    top: window.localStorage.scroll,
    behavior: "smooth",
  });
  //
  console.log("index.js - Document loaded");
  //
  //  VIDEO
  //
  /*
  let bgVideo = document.querySelector(".background__video");
  bgVideo.load();
  //
  bgVideo.addEventListener("hover", function (event) {
    console.log("wat");
    //
  });
  //
  let events = ["loadedmetadata"];
  //
  const bgVideoLoaded = new Event("videoLoaded", {bubbles: true});
  //
  for (let element of events) {
    bgVideo.addEventListener(`${element}`, function (event) {
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
    {once: true}
  );
  */
  //  VIDEO END
  //
  initObserver();
  navBar();
  //
  neon();
  //
  window.addEventListener("scroll", function (event) {
    navBar();
    //
    //  SCROLL LINKED
    //
    //  https://scotch.io/tutorials/implementing-a-scroll-based-animation-with-javascript
    //  https://blog.logrocket.com/use-scroll-linked-animations-right-way/
  });
  //
  //  ONLOAD END
  //
};
//
function navBar() {
  let landing = document.querySelector(".landing");
  let landingPosY = landing.getBoundingClientRect().bottom;
  //
  const navbar = document.querySelector(".navbar");
  const navbarHeight = navbar.getBoundingClientRect().height * 2 + 50;
  if (this.oldScroll > this.scrollY) {
    //  up
    if (landingPosY - navbarHeight > 0) {
      if (navbar.classList.contains("navbar--background")) {
        navbar.classList.remove("navbar--background");
        //
      }
      //
    }
  } else {
    // down
    if (landingPosY - navbarHeight < 0) {
      navbar.classList.add("navbar--background");
      //
    }
    //
  }
  //
  //
  //
  this.oldScroll = this.scrollY;
  //
  window.localStorage.scroll = this.scrollY;
  //
}
//
//  1 janusz
//  2 backlight under cursor, ripple onclick || canvas shit
//  3 popcorn /px scroll + random shot of 1 or more popcorns
//  tba
