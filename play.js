// when window loads, a canvas will be created

window.onload = function() {

               var canvas = document.getElementById("canvas"),

                               context = canvas.getContext("2d"),

                               width = canvas.width = window.innerWidth,

                               height = canvas.height = window.innerHeight;

                              

                              context.fillStyle = "#FF0000";
context.fillRect(0,0,150,75);

              //  // trying to add a gradient effect to the lines

              //  var gradient=context.createLinearGradient(0,0,170,0)

              //  gradient.addColorStop("0","lightblue");

              //  gradient.addColorStop("0.5"," green);
              // gradient.addColorStop("1.0","red");

              //  context.lineWidth=5;

 

              //  // originally we just filled the rect            

              //  // context.fillRect(0,0,width,height);

              //  // random lines drawn (100 of them)

              //  for(var i=0; i<100; i+=1){

              //                  context.beginPath();

              //                 context.moveTo(Math.random()*width, Math.random()*height); 

              //                  context.lineTo(Math.random()*100, Math.random()*100);

              //                  context.strokeStyle=gradient;

              //                  context.stroke();

              //  }  // end for loop

};  // end onload function

