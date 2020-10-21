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

/* Button to simulate */
var simButton = document.getElementById("simButton");
const add = document.querySelector('img');

/*get valued */
simButton.onclick = function () {
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
        *Helicopter Drop
        */
        
        const scaleKeyframes = [
          { transform: 'translateY(0px)'},
        { transform: 'translateY(500px)'}
        ]
        
        const scaleTiming = {
          duration: 1500,
          direction: 'alternate',
          fill: 'none',
          easing: 'ease-in-out'
        }
        

        const rotateKeyframes = [
          {transform: 'rotateY(0deg)'},
          {transform: 'rotateY(360deg)'}
          
        ]
        const rotateTiming = {
          duration: 150,
          iterations: 10,
          direction: 'alternate',
          easing: 'ease-in'
        }
        
       
       
        
         add.animate(scaleKeyframes, Object.assign({composite: 'add'}, scaleTiming));
        let rotate = add.animate(rotateKeyframes, Object.assign({composite: 'add'}, rotateTiming)); 
       
      
        
     
}


