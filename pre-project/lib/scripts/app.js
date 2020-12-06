/* Range input to select the components */
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;


slider.oninput = function () {
  output.innerHTML = this.value;
}
var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value;

slider2.oninput = function () {
  output2.innerHTML = this.value;
}
var slider3 = document.getElementById("myRange3");
var output3 = document.getElementById("demo3");
output3.innerHTML = slider3.value;

slider3.oninput = function () {
  output3.innerHTML = this.value;
}
var slider4 = document.getElementById("myRange4");
var output4 = document.getElementById("demo4");
output4.innerHTML = slider4.value;

slider4.oninput = function () {
  output4.innerHTML = this.value;
}




function timeToString(time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  let diffInMs = (diffInSec - ss) * 100;
  let ms = Math.floor(diffInMs);

  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");
  let formattedMS = ms.toString().padStart(2, "0");

  return `${formattedSS}:${formattedMS} Sec`;
}

let startTime;
let elapsedTime = 0;
let timerInterval;

// print time
function print(txt) {
  document.getElementById("display").innerHTML = txt;
}


//start time
function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    print(timeToString(elapsedTime));
  }, 10);
}

//pause time
function pause() {
  clearInterval(timerInterval);
}

//reset time 
function reset() {
  clearInterval(timerInterval);
  print("00:00 Sec");
  elapsedTime = 0;
}

/* Button to simulate */
var simButton = document.getElementById("simButton");
const rotate_img = document.querySelector('img');

simButton.addEventListener('click',optionValues);

function optionValues(){
  var slider = document.getElementById("myRange");
  var output = document.getElementById("result_wing_w");
  output.innerHTML = slider.value;
  var slider2 = document.getElementById("myRange2");
  var output2 = document.getElementById("result_wing_l");
  output2.innerHTML = slider2.value;
  var slider3 = document.getElementById("myRange3");
  var output3 = document.getElementById("result_body_w");
  output3.innerHTML = slider3.value;
  var slider4 = document.getElementById("myRange4");
  var output4 = document.getElementById("result_body_l");
  output4.innerHTML = slider4.value;


  /*
  *Helicopter Drop Condtition
  */
   result = [slider.value, slider2.value, slider3.value, slider4.value]
   console.log(result);

  
  checkGood();
  checkBad();
}




function checkBad() {
  if (result[0] == '100' && result[1] == '100' && result[2] == '100' && result[3] == '100') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '100' && result[2] == '100' && result[3] == '80') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '100' && result[2] == '80' && result[3] == '60') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '100' && result[2] == '60' && result[3] == '60') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '100' && result[2] == '60' && result[3] == '40') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '60' && result[2] == '100' && result[3] == '100') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '20' && result[2] == '100' && result[3] == '100') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '20' && result[2] == '20' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '80' && result[1] == '100' && result[2] == '100' && result[3] == '100') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '80' && result[1] == '100' && result[2] == '40' && result[3] == '40') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '80' && result[1] == '20' && result[2] == '100' && result[3] == '100') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '60' && result[1] == '100' && result[2] == '100' && result[3] == '100') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '60' && result[1] == '100' && result[2] == '20' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '60' && result[1] == '20' && result[2] == '100' && result[3] == '100') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '40' && result[1] == '100' && result[2] == '100' && result[3] == '100') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '40' && result[1] == '100' && result[2] == '20' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '40' && result[1] == '20' && result[2] == '100' && result[3] == '100') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '100' && result[2] == '100' && result[3] == '100') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '100' && result[2] == '40' && result[3] == '40') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '80' && result[2] == '100' && result[3] == '100') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '80' && result[2] == '40' && result[3] == '40') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '60' && result[2] == '100' && result[3] == '100') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '40' && result[2] == '100' && result[3] == '100') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '20' && result[2] == '100' && result[3] == '100') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '20' && result[2] == '100' && result[3] == '80') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '20' && result[2] == '100' && result[3] == '60') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '20' && result[2] == '100' && result[3] == '40') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '20' && result[2] == '100' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '20' && result[2] == '80' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '20' && result[2] == '60' && result[3] == '100') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '20' && result[2] == '60' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '20' && result[2] == '40' && result[3] == '100') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '20' && result[2] == '40' && result[3] == '40') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '20' && result[2] == '40' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '80' && result[2] == '100' && result[3] == '80') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '80' && result[2] == '80' && result[3] == '100') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '80' && result[2] == '60' && result[3] == '100') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '80' && result[2] == '40' && result[3] == '100') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '60' && result[2] == '80' && result[3] == '100') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '60' && result[2] == '60' && result[3] == '100') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '60' && result[2] == '40' && result[3] == '100') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '40' && result[2] == '100' && result[3] == '80') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '80' && result[2] == '60' && result[3] == '80') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '80' && result[2] == '40' && result[3] == '60') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '60' && result[2] == '100' && result[3] == '80') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '60' && result[2] == '100' && result[3] == '60') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '60' && result[2] == '80' && result[3] == '80') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '60' && result[2] == '40' && result[3] == '80') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '80' && result[2] == '100' && result[3] == '60') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '80' && result[2] == '100' && result[3] == '40') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '80' && result[2] == '80' && result[3] == '80') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '80' && result[2] == '80' && result[3] == '60') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '80' && result[2] == '60' && result[3] == '60') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '60' && result[2] == '40' && result[3] == '60') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '40' && result[2] == '100' && result[3] == '40') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '60' && result[2] == '100' && result[3] == '40') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '60' && result[2] == '60' && result[3] == '80') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '60' && result[2] == '60' && result[3] == '60') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '60' && result[2] == '80' && result[3] == '60') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '80' && result[2] == '100' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '60' && result[2] == '100' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '60' && result[2] == '80' && result[3] == '40') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '80' && result[2] == '80' && result[3] == '40') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '40' && result[2] == '100' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '80' && result[2] == '80' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '80' && result[2] == '60' && result[3] == '40') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '80' && result[2] == '60' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '80' && result[2] == '40' && result[3] == '40') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '60' && result[2] == '80' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '60' && result[2] == '60' && result[3] == '40') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '60' && result[2] == '60' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '60' && result[2] == '40' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '40' && result[2] == '80' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '40' && result[2] == '60' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '40' && result[2] == '40' && result[3] == '40') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '20' && result[2] == '60' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '20' && result[2] == '40' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '80' && result[1] == '60' && result[2] == '60' && result[3] == '60') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '80' && result[1] == '20' && result[2] == '60' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '80' && result[1] == '20' && result[2] == '40' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '60' && result[1] == '20' && result[2] == '60' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '60' && result[1] == '60' && result[2] == '60' && result[3] == '60') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '40' && result[1] == '60' && result[2] == '60' && result[3] == '60') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '40' && result[1] == '20' && result[2] == '60' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '80' && result[2] == '40' && result[3] == '80') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '60' && result[2] == '60' && result[3] == '60') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '60' && result[2] == '60' && result[3] == '40') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '60' && result[2] == '60' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '40' && result[2] == '60' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '80' && result[1] == '100' && result[2] == '100' && result[3] == '80') {
    baddrop();
    console.log(result);
 
  }
  if (result[0] == '80' && result[1] == '100' && result[2] == '100' && result[3] == '60') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '80' && result[1] == '100' && result[2] == '100' && result[3] == '40') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '80' && result[1] == '100' && result[2] == '100' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '80' && result[1] == '100' && result[2] == '80' && result[3] == '100') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '80' && result[1] == '100' && result[2] == '80' && result[3] == '80') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '80' && result[1] == '100' && result[2] == '80' && result[3] == '60') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '80' && result[1] == '100' && result[2] == '80' && result[3] == '40') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '40' && result[2] == '80' && result[3] == '40') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '40' && result[2] == '80' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '40' && result[2] == '100' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '20' && result[2] == '60' && result[3] == '40') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '40' && result[2] == '60' && result[3] == '40') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '20' && result[2] == '80' && result[3] == '40') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '60' && result[2] == '100' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '60' && result[2] == '80' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '80' && result[2] == '100' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '80' && result[2] == '80' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '80' && result[2] == '60' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '40' && result[2] == '80' && result[3] == '100') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '40' && result[2] == '80' && result[3] == '80') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '40' && result[2] == '80' && result[3] == '60') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '40' && result[2] == '80' && result[3] == '40') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '20' && result[2] == '100' && result[3] == '80') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '20' && result[2] == '100' && result[3] == '60') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '20' && result[2] == '100' && result[3] == '40') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '20' && result[2] == '100' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '20' && result[2] == '80' && result[3] == '80') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '20' && result[2] == '80' && result[3] == '60') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '20' && result[2] == '80' && result[3] == '40') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '20' && result[2] == '80' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '20' && result[2] == '60' && result[3] == '40') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '80' && result[1] == '100' && result[2] == '60' && result[3] == '100') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '80' && result[1] == '100' && result[2] == '60' && result[3] == '80') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '80' && result[1] == '100' && result[2] == '60' && result[3] == '60') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '80' && result[1] == '40' && result[2] == '100' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '80' && result[1] == '40' && result[2] == '80' && result[3] == '40') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '80' && result[1] == '40' && result[2] == '60' && result[3] == '40') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '80' && result[1] == '20' && result[2] == '100' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '80' && result[1] == '20' && result[2] == '80' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '80' && result[1] == '20' && result[2] == '60' && result[3] == '40') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '60' && result[1] == '100' && result[2] == '100' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '60' && result[1] == '100' && result[2] == '80' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '60' && result[1] == '100' && result[2] == '60' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '60' && result[1] == '100' && result[2] == '40' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '60' && result[1] == '40' && result[2] == '80' && result[3] == '40') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '60' && result[1] == '20' && result[2] == '100' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '60' && result[1] == '20' && result[2] == '80' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '60' && result[1] == '20' && result[2] == '60' && result[3] == '40') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '60' && result[1] == '20' && result[2] == '40' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '40' && result[1] == '100' && result[2] == '80' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '40' && result[1] == '100' && result[2] == '60' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '40' && result[1] == '100' && result[2] == '40' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '40' && result[1] == '40' && result[2] == '80' && result[3] == '40') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '40' && result[1] == '20' && result[2] == '100' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '40' && result[1] == '20' && result[2] == '80' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '40' && result[1] == '20' && result[2] == '60' && result[3] == '40') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '100' && result[2] == '100' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '100' && result[2] == '40' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '40' && result[2] == '60' && result[3] == '100') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '40' && result[2] == '60' && result[3] == '40') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '40' && result[1] == '20' && result[2] == '40' && result[3] == '20') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '80' && result[2] == '100' && result[3] == '100') {
    baddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '20' && result[2] == '20' && result[3] == '100') {
    baddrop();
    console.log(result);
  }
}

function checkGood(){
  console.log(result);
  if (result[0] == '100' && result[1] == '100' && result[2] == '100' && result[3] == '60') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '100' && result[2] == '100' && result[3] == '40') {
    gooddrop();
    console.log(result);
  }
  
  if (result[0] == '100' && result[1] == '100' && result[2] == '80' && result[3] == '100') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '100' && result[2] == '80' && result[3] == '80') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '100' && result[2] == '80' && result[3] == '20') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '100' && result[2] == '60' && result[3] == '100') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '100' && result[2] == '60' && result[3] == '20') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '100' && result[2] == '40' && result[3] == '100') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '100' && result[2] == '40' && result[3] == '40') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '100' && result[2] == '40' && result[3] == '20') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '100' && result[2] == '20' && result[3] == '100') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '100' && result[2] == '20' && result[3] == '80') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '100' && result[2] == '20' && result[3] == '60') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '100' && result[2] == '20' && result[3] == '40') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '100' && result[2] == '20' && result[3] == '20') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '80' && result[2] == '20' && result[3] == '20') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '60' && result[2] == '20' && result[3] == '20') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '40' && result[2] == '20' && result[3] == '20') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '80' && result[1] == '20' && result[2] == '20' && result[3] == '20') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '60' && result[1] == '100' && result[2] == '40' && result[3] == '40') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '60' && result[1] == '20' && result[2] == '20' && result[3] == '20') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '40' && result[1] == '100' && result[2] == '40' && result[3] == '40') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '40' && result[1] == '20' && result[2] == '20' && result[3] == '20') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '100' && result[2] == '20' && result[3] == '20') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '80' && result[2] == '20' && result[3] == '20') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '60' && result[2] == '40' && result[3] == '40') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '60' && result[2] == '20' && result[3] == '20') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '40' && result[2] == '40' && result[3] == '40') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '40' && result[2] == '20' && result[3] == '20') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '20' && result[2] == '20' && result[3] == '100') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '20' && result[2] == '20' && result[3] == '80') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '20' && result[2] == '20' && result[3] == '60') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '20' && result[2] == '20' && result[3] == '40') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '20' && result[2] == '20' && result[3] == '20') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '80' && result[2] == '40' && result[3] == '60') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '80' && result[2] == '20' && result[3] == '100') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '80' && result[2] == '20' && result[3] == '80') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '80' && result[2] == '20' && result[3] == '60') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '60' && result[2] == '20' && result[3] == '80') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '60' && result[2] == '20' && result[3] == '60') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '60' && result[2] == '40' && result[3] == '40') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '40' && result[2] == '40' && result[3] == '60') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '40' && result[2] == '20' && result[3] == '80') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '20' && result[2] == '40' && result[3] == '60') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '20' && result[2] == '20' && result[3] == '80') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '80' && result[1] == '80' && result[2] == '40' && result[3] == '80') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '80' && result[1] == '20' && result[2] == '40' && result[3] == '60') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '80' && result[1] == '20' && result[2] == '20' && result[3] == '80') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '60' && result[1] == '20' && result[2] == '40' && result[3] == '60') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '60' && result[1] == '20' && result[2] == '20' && result[3] == '80') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '40' && result[1] == '80' && result[2] == '40' && result[3] == '80') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '40' && result[1] == '20' && result[2] == '20' && result[3] == '80') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '80' && result[2] == '40' && result[3] == '20') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '40' && result[2] == '40' && result[3] == '20') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '40' && result[2] == '20' && result[3] == '60') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '40' && result[2] == '20' && result[3] == '40') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '60' && result[2] == '20' && result[3] == '40') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '20' && result[2] == '40' && result[3] == '40') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '20' && result[2] == '20' && result[3] == '60') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '20' && result[2] == '20' && result[3] == '40') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '80' && result[1] == '20' && result[2] == '40' && result[3] == '40') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '80' && result[1] == '20' && result[2] == '20' && result[3] == '60') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '80' && result[1] == '20' && result[2] == '20' && result[3] == '40') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '60' && result[1] == '80' && result[2] == '40' && result[3] == '80') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '60' && result[1] == '20' && result[2] == '40' && result[3] == '40') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '60' && result[1] == '20' && result[2] == '20' && result[3] == '60') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '60' && result[1] == '20' && result[2] == '20' && result[3] == '40') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '40' && result[1] == '20' && result[2] == '40' && result[3] == '60') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '40' && result[1] == '20' && result[2] == '40' && result[3] == '40') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '40' && result[1] == '20' && result[2] == '20' && result[3] == '60') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '40' && result[1] == '20' && result[2] == '20' && result[3] == '40') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '20' && result[2] == '80' && result[3] == '100') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '20' && result[2] == '60' && result[3] == '100') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '80' && result[1] == '100' && result[2] == '40' && result[3] == '100') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '20' && result[2] == '60' && result[3] == '80') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '20' && result[2] == '60' && result[3] == '60') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '80' && result[1] == '100' && result[2] == '80' && result[3] == '20') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '80' && result[1] == '100' && result[2] == '60' && result[3] == '40') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '80' && result[1] == '100' && result[2] == '60' && result[3] == '20') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '80' && result[1] == '100' && result[2] == '40' && result[3] == '100') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '80' && result[1] == '100' && result[2] == '40' && result[3] == '80') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '80' && result[1] == '100' && result[2] == '40' && result[3] == '60') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '60' && result[1] == '40' && result[2] == '60' && result[3] == '40') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '40' && result[1] == '100' && result[2] == '100' && result[3] == '20') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '40' && result[1] == '40' && result[2] == '60' && result[3] == '40') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '100' && result[2] == '80' && result[3] == '20') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '100' && result[2] == '60' && result[3] == '20') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '80' && result[2] == '40' && result[3] == '20') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '60' && result[2] == '40' && result[3] == '20') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '40' && result[2] == '40' && result[3] == '20') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '40' && result[2] == '60' && result[3] == '80') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '100' && result[1] == '40' && result[2] == '60' && result[3] == '60') {
    gooddrop();
    console.log(result);
  }
  if (result[0] == '20' && result[1] == '20' && result[2] == '40' && result[3] == '60') {
    gooddrop();
    console.log(result);
  }
}

//clear animated
function clearAnimated() {
  const scaleKeyframes = [
    { transform: 'translateY(0px)' },
    { transform: 'translateY(0px)' }
  ]
  const scaleTiming = {
    duration: 0,
    direction: 'alternate',
    fill: 'forwards',
    easing: 'ease-in-out'
  }
  rotate_img.animate(scaleKeyframes, scaleTiming);
}

//update Width
function updateWidth(val) {
  clearAnimated();
  reset();
  if (val == 20) {
    rotate_img.setAttribute('width', 75);
  }
  if (val == 40) {
    rotate_img.setAttribute('width', 80);
  }
  if (val == 60) {
    rotate_img.setAttribute('width', 85);
  }
  if (val == 80) {
    rotate_img.setAttribute('width', 90);
  }
  if (val == 100) {
    rotate_img.setAttribute('width', 95);
  }
}



//update Length
function updateLength(val) {
  clearAnimated();
  reset();
  if (val == 20) {
    rotate_img.setAttribute('height', 75);
  }
  if (val == 40) {
    rotate_img.setAttribute('height', 80);
  }
  if (val == 60) {
    rotate_img.setAttribute('height', 85);
  }
  if (val == 80) {
    rotate_img.setAttribute('height', 90);
  }
  if (val == 100) {
    rotate_img.setAttribute('height', 95);
  }
}

//gooddrop 
function gooddrop() {
  start();
  simButton.disabled = true;
  document.getElementById("myRange").disabled = true;
  document.getElementById("myRange2").disabled = true;
  document.getElementById("myRange3").disabled = true;
  document.getElementById("myRange4").disabled = true;
  const scaleKeyframes = [
    { transform: 'translateY(0px)' },
    { transform: 'translateY(500px)' },

  ]

  const scaleTiming = {
    duration: (checkTimeGood()) * 1000,
    direction: 'alternate',
    fill: 'forwards',
    easing: 'ease-in-out'
  }


  const rotateKeyframes = [
    { transform: 'rotateY(0deg)' },
    { transform: 'rotateY(360deg)' }

  ]
  const rotateTiming = {
    duration: 150,
    iterations: checkrotateTime(),
    direction: 'alternate',
    easing: 'ease-in'
  }




  rotate_img.animate(rotateKeyframes, Object.assign({ composite: 'add' }, rotateTiming));
  let img_drop = rotate_img.animate(scaleKeyframes, Object.assign({ composite: 'add' }, scaleTiming));


  img_drop.onfinish = function () {
    simButton.disabled = false;
    document.getElementById("myRange").disabled = false;
    document.getElementById("myRange2").disabled = false;
    document.getElementById("myRange3").disabled = false;
    document.getElementById("myRange4").disabled = false;
    pause();
    document.getElementById("simButton").addEventListener("click", event => {
      reset();
      start();
      document.querySelector("img").animate(
        scaleKeyframes,
        scaleTiming,
      );
      rotate_img.animate(rotateKeyframes, Object.assign({ composite: 'add' }, rotateTiming));
  
    }, false);
  }
}

//bad drop
function baddrop() {
  start();
  simButton.disabled = true;
  document.getElementById("myRange").disabled = true;
  document.getElementById("myRange2").disabled = true;
  document.getElementById("myRange3").disabled = true;
  document.getElementById("myRange4").disabled = true;
  const scaleKeyframes = [
    { transform: 'rotate(-180deg)'}, //first choice
    //{ transform: 'rotateX(-180deg)' },  //second choice
    { transform: 'translateY(500px)' }


  ]

  const scaleTiming = {
    duration: (checkTimeBad()) * 1000,
    direction: 'alternate',
    fill: 'forwards',
    easing: 'ease-in-out'
  }


  const rotateKeyframes = [
    { transform: 'rotateY(0deg)' },
    { transform: 'rotateY(360deg)' }

  ]
  const rotateTiming = {
    duration: 150,
    iterations: checkrotateTime(),
    direction: 'alternate',
    easing: 'ease-in'
  }




  rotate_img.animate(rotateKeyframes, Object.assign({ composite: 'add' }, rotateTiming));
  let img_drop = rotate_img.animate(scaleKeyframes, Object.assign({ composite: 'add' }, scaleTiming));


  img_drop.onfinish = function () {
    pause();
    simButton.disabled = false;
    document.getElementById("myRange").disabled = false;
    document.getElementById("myRange2").disabled = false;
    document.getElementById("myRange3").disabled = false;
    document.getElementById("myRange4").disabled = false;
    
    document.getElementById("simButton").addEventListener("click", event => {
      reset();
      start();
      document.querySelector("img").animate(
        scaleKeyframes,
        scaleTiming,
        rotateKeyframes,
        rotateTiming
     
        
      );
      rotate_img.animate(rotateKeyframes, Object.assign({ composite: 'add' }, rotateTiming));
    }, false);
  }
}

