function initObserver() {
  let opacity = 0;
  let top = 200;
  document.querySelectorAll(".fadeUp").forEach(function (currentValue) {
    currentValue.style.opacity = opacity;
    currentValue.style.top = top + "px";
    //
  });
  //
  let prevRatio = 0.0;
  let steps = 100;
  let navbarHeight = window
    .getComputedStyle(document.querySelector(".navbar"))
    .getPropertyValue("font-size");
  let options = {
    root: null,
    rootMargin: `${navbarHeight} 0px 0px 0px`,
    threshold: thresholds(steps),
  };
  //
  //
  //
  let targets = document.querySelectorAll(
    "section:not([class*='links']), .fadeUp"
  );
  //
  let observer;
  //
  function intersectionHandler(entries, observer) {
    //
    entries.forEach((entry) => {
      //  gitHub vaporWave link - section.links
      if (
        entry.target.getAttribute("class").match(/(fadeUp)/i) &&
        !entry.target.tagName.match(/(a)/i)
      ) {
        //  scroll down
        if (window.scrollY > prevScroll) {
          //
          if (Number(entry.intersectionRatio.toFixed(2)) > prevRatio) {
            document
              .querySelectorAll(".fadeUp")
              .forEach(function (currentValue) {
                currentValue.style.opacity = Number(
                  entry.intersectionRatio.toFixed(2)
                );
                //
                currentValue.style.top =
                  Number(entry.intersectionRatio.toFixed(2)) * -top +
                  top +
                  "px";
                //
              });
            //
            if (Number(entry.intersectionRatio.toFixed(2)) >= 0.9) {
              document
                .querySelectorAll(".fadeUp")
                .forEach(function (currentValue) {
                  currentValue.style.opacity = 1;
                  //
                  currentValue.style.top = "0px";
                  //
                });
              //
            }
            //
          }
          //  scroll up
        } else if (window.scrollY < prevScroll) {
          //
          if (entry.intersectionRatio < prevRatio) {
            document
              .querySelectorAll(".fadeUp")
              .forEach(function (currentValue) {
                currentValue.style.opacity = entry.intersectionRatio.toFixed(2);
                //
                currentValue.style.top =
                  Number(entry.intersectionRatio.toFixed(2)) * -top +
                  top +
                  "px";
                //
              });
            //
          }
          //
        }
        //  fast scroll case
        setTimeout(function () {
          if (entry.boundingClientRect.top <= 0) {
            document
              .querySelectorAll(".fadeUp")
              .forEach(function (currentValue) {
                currentValue.style.top = "0px";
                //
                setTimeout(function () {
                  currentValue.style.opacity = 1;
                  //
                }, 150);
                //
              });
            //
          } else {
            document
              .querySelectorAll(".fadeUp")
              .forEach(function (currentValue) {
                currentValue.style.opacity = Number(
                  entry.intersectionRatio.toFixed(2)
                );
                //
                currentValue.style.top =
                  Number(entry.intersectionRatio.toFixed(2)) * -top +
                  top +
                  "px";
                //
              });
            //
          }
          //
        }, 10);
      }
      //
      prevRatio = entry.intersectionRatio;
      prevScroll = window.scrollY;
      //
    });
    //
  }
  //
  observer = new IntersectionObserver(intersectionHandler, options);
  targets.forEach(function (currentValue) {
    observer.observe(currentValue);
    //
  });
  //
  function thresholds(steps) {
    let array = [];
    for (i = 0; i <= steps; i++) {
      array.push(i / steps);
      //
    }
    //
    return array;
    //
  }
  //
}
//
