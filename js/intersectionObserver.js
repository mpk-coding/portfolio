let wait = false;
const throttle = function (throttleThis, interval) {
  if (wait) {
    return;
  }
  //
  wait = true;
  setTimeout(function () {
    wait = false;
    throttleThis();
    //
  }, interval);
  //
};
//
let timer;
const debounce = function (func, delay) {
  //
  clearTimeout(timer);
  timer = setTimeout(func, delay);
  //
};
//
function initObserver() {
  //
  let opacity = 0;
  let top =
    10 *
    Number(
      getComputedStyle(document.querySelector("html"))
        .getPropertyValue("font-size")
        .match(/(\d)*/i)[0] * 2
    );
  //
  let prevScroll;
  let prevRatio = 0.0;
  let steps = 50;
  //
  let scale = window
    .getComputedStyle(document.querySelector(".navbar"))
    .getPropertyValue("font-size");
  let navbarHeight = 9.76 * scale.match(/(\d)*/i)[0] + "px";
  //
  let options = {
    root: null,
    rootMargin: `${navbarHeight} 0px -${navbarHeight} 0px`,
    threshold: thresholds(steps),
  };
  //
  //
  //
  let targets = document.querySelectorAll(".scrollIn, .fadeUp, .fadeLeft, .fadeRight");
  //
  let observer;
  //
  observer = new IntersectionObserver(intersectionHandler, options);
  targets.forEach(function (currentValue) {
    observer.observe(currentValue);
    //
  });
  function intersectionHandler(entries, observer) {
    //
    entries.forEach((entry) => {
      //  gitHub vaporWave link - section.links
      if (entry.target.classList.contains("scrollIn")) {
        //  scroll down
        if (!prevScroll) {
          document
            .querySelectorAll(".scrollIn")
            .forEach(function (currentValue) {
              if (entry.intersectionRatio > 0.9) {
                currentValue.style.opacity = 1;
                //
                currentValue.style.top = 0 + "px";
                //
              } else {
                currentValue.style.opacity = Number(
                  entry.intersectionRatio.toFixed(2)
                );
                //
                currentValue.style.top =
                  Number(entry.intersectionRatio.toFixed(2)) * -top +
                  top +
                  "px";
                //
              }
              //
            });
          //
        }
        if (window.scrollY > prevScroll) {
          //
          if (Number(entry.intersectionRatio.toFixed(2)) > prevRatio) {
            document
              .querySelectorAll(".scrollIn")
              .forEach(function (currentValue) {
                if (entry.intersectionRatio > 0.9) {
                  currentValue.style.opacity = 1;
                  //
                  currentValue.style.top = 0 + "px";
                  //
                } else {
                  currentValue.style.opacity = Number(
                    entry.intersectionRatio.toFixed(2)
                  );
                  //
                  currentValue.style.top =
                    Number(entry.intersectionRatio.toFixed(2)) * -top +
                    top +
                    "px";
                  //
                }
                //
              });
            //
          }
          //
        } else if (window.scrollY < prevScroll) {
          //  scroll up
          if (entry.intersectionRatio < prevRatio) {
            document
              .querySelectorAll(".scrollIn")
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
        //
        prevScroll = window.scrollY;
        //
      } else {
        if (entry.boundingClientRect.top <= 0) {
          entry.target.classList.add("shown");
        }
        if (entry.intersectionRatio > 0) {
          if (entry.target.getAttribute("class").match(/(fade)/i)) {
            //
            entry.target.classList.add("shown");
          }
          //
        }
        //
      }
      //
      debounce(function () {
        console.log("debounce");
        //  scroll down
        if (entry.target.classList.contains("scrollIn")) {
          if (entry.boundingClientRect.top <= 0) {
            document
              .querySelectorAll(".scrollIn")
              .forEach(function (currentValue) {
                currentValue.style.opacity = 1;
                //
                currentValue.style.top = "0px";
                //
              });
            //
          }
          //  scroll up
          if (entry.boundingClientRect.top >= window.innerHeight) {
            document
              .querySelectorAll(".scrollIn")
              .forEach(function (currentValue) {
                currentValue.style.opacity = 0;
                //
                currentValue.style.top = top + "px";
                //
              });
            //
          }
          //
        } else {
          //
          if (entry.intersectionRatio > 0) {
            if (entry.target.getAttribute("class").match(/(fade)/i)) {
              //
              entry.target.classList.add("shown");
            }
            //
          }
          //
        }
        //
      }, 36);
      //
      prevRatio = entry.intersectionRatio;
      //
    });
    //
  }
  //
}
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
