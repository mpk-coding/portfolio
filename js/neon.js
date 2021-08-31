function neon() {
  console.log("neon init");
  //
  let body = document.querySelector("body");
  //
  let bracket = [0, 0.33, 1];
  let stepValue = [];
  let chain = [];
  //
  //  LOOP FOR GENERATING KEYFRAMES STEPS
  //  no need to run it every single time, once you got steps you are satisfied with, just paste under .neon class as css variables

  /*

  for (let i = 0, x = 0; i <= 60; i++) {
    if (i == 0) {
      stepValue[i] = bracket[Math.floor(Math.random() * bracket.length)];
      //
      chain[x] = stepValue[i];
      //
    } else {
      stepValue[i] = bracket[Math.floor(Math.random() * bracket.length)];
      //
      if (stepValue[i - 1] == stepValue[i]) {
        x++;
        //
        chain[x] = stepValue[i];
        //
        if (x >= 20) {
          while (stepValue[i] == stepValue[i - 1]) {
            let newVal = bracket[Math.floor(Math.random() * bracket.length)];
            //
            if (stepValue[i] != newVal) {
              stepValue[i] = newVal;
              //
              x = 0;
              //
            }
            //
          }
          //
        } else {
          stepValue[i] = bracket[Math.floor(Math.random() * bracket.length)];
        }
        //
      }
      //
    }
    //
    body.style.setProperty(`--neon-${i}`, stepValue[i]);
    //
  }

  */

  //
  //  LOOP END
  //
  //  ======
  //
  //  YOU STILL MIGHT WANT TO ADD A RANDOM DELAY TO DESYNCHRONISE ELEMENTS
  //
  let targetsList = document.querySelectorAll(".neon");
  //
  targetsList.forEach(function (currentValue) {
    console.log(currentValue);
    //
    let duration = 1;
    let delay = Math.random() * (duration - 0) + 0;
    let propertiesListObject = {
      //transition: "none"
      //"animation-name": "neon",
      //"animation-duration": "1s",
      //"animation-timing-function": "linear",
      //"animation-iteration-count": "infinite",
      //"animation-play-state": "playing",
      //"animation-direction": "alternate",
      "animation-delay": delay.toFixed(2) * -1 + "s",
    };
    //
    for (const [key, value] of Object.entries(propertiesListObject)) {
      currentValue.style.setProperty(key, value);
      //
    }
    //
  });
  //
}
