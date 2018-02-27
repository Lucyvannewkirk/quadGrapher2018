//Javascript for drawing and calculating quadratics 2017
var a, b, c, context, w, h, k=18;

function init() {
  canvas= document.getElementById("mycanvas");
  context = canvas.getContext("2d");
  w = canvas.width = 600;
  h = canvas.height = 400;
  console.log('canvas is loaded into context',w);
  canvasOffset = canvas.getBoundingClientRect();
  offsetX = Math.round(canvasOffset.left),
  offsetY = Math.round(canvasOffset.top); 
  canvas.addEventListener("mousemove", doMouseMove, false);
  graphpaper();
}  // close init

function QF() {
  // getting values to do quadratic formula
  a = $("#quadA").val();
  b = $("#linB").val();
  c = $("#constant").val();
  if (b**2-4*a*c<0) {
       $("#solution1").text ("No Xintercept");
    $("#solution2").text ("No Xintercept");
  }
  else {
    x1 = (-b+Math.sqrt(b**2-4*a*c))/(2*a);
    x1 = Math.round (x1*10000)/ 10000;
    x2 = (-b-Math.sqrt(b**2-4*a*c))/(2*a);
    x2 = Math.round (x2 *10000) / 10000;

     $("#solution1").text ("Xintercept is at "+x1);
    $("#solution2").text ("Xintercept is at "+x2);
  }
  console.log(a,b,c);
  graphQuad();
  results();
  context.beginPath();
  context.arc(w/2+x1*k,h/2,3,0,6.28);
  context.fill(); 
  context.beginPath();
  context.arc(w/2+x2*k,h/2,3,0,6.28);
  context.fill();
}  // close QF

function results() {
  // finding vertext and displaying symline and yint results
  vX = -(b*1)/(2*a);
  vY = a*Math.pow(vX,2)+b*vX+c*1;
  vX = vX.toFixed(2);
  vY = vY.toFixed(2);
  $("#vertex").text("Vertex is at (" + vX+","+vY+")");
  context.beginPath();
  context.arc(w/2+vX*k,h/2-vY*k,3,0,6.28);
  context.fill();

  $ ("#yint").text ("Y inercept is at (0,"+ c+")");
  context.beginPath();
  context.arc(w/2,h/2-c*k,3,0,6.28);
  context.fill();


  $("#cp").text("Corr. Pt. is at ("+vX*2+","+ c+")");
  context.beginPath();
  context.arc(w/2+2*vX*k,h/2-c*k,3,0,6.28);
  context.fill();

  $("#sline").text("Symmetry line is at x= "+ vX);



   Xcp = 2*vX;

   context.strokeStyle="0,50,200,.3";
   context.setLineDash ([5,5]);
   context.beginPath();
   context.moveTo(w/2+vX*k,5);
   context.lineTo(w/2+vX*k,h+5);
   context.stroke();
   context.setLineDash([0]);

}  // close results() 

function graphpaper() {
  // the x and y axis drawn
context.lineWidth= 3;
context.beginPath();
context.moveTo(w/2, 0);
context.lineTo(w/2, h);
context.stroke();

context.beginPath();
context.moveTo(0,h/2);
context.lineTo(w,h/2);
context.stroke();


  // thin line with a 50% opacity using rgba() 
  context.lineWidth=1;
  context.strokeStyle="rgba(0,0,255,.5)";

  //using the direct variation constant, k
  //  here are the vertical and horizontal lines

  for (i=0; i<h/(2*k); i++) {
    context.beginPath();
    context.moveTo( 0, h/2-i*k );
    context.lineTo( w, h/2-i*k );
    context.stroke();
    context.beginPath();
    context.moveTo( 0, h/2+i*k );
    context.lineTo( w, h/2+i*k );
    context.stroke();

  }
    // thin line with a 50% opacity using rgba() 
  context.lineWidth=1;
  context.strokeStyle="rgba(0,0,255,.5)";

  //using the direct variation constant, k
  //  here are the vertical and horizontal lines

  for (i=0; i<w/(2*k); i++) {
    context.beginPath();
    context.moveTo( w/2-i*k, 0 );
    context.lineTo( w/2-i*k, h );
    context.stroke();
    context.beginPath();
    context.moveTo( w/2-i*-k, 0 );
    context.lineTo( w/2-i*-k, h );
    context.stroke();

  }
}  //close of graphpaper

function graphQuad () {
  for (var i = 0; i < w; i++) {
    x = (w/2-i)/k;
    y = c*1+b*x+a*Math.pow(x,2);
    nx =  (w/2-(1+i))/k;
    ny =  c*1+b*nx+a*Math.pow(nx,2);
    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = "Red";
    context.moveTo(w/2+x*k,h/2-y*k);
    context.lineTo(w/2+nx*k,h/2-ny*k);
    context.stroke();
}
}
    function zoomIn () {
      k=k+3;
      resetCanvas();
    }

      function zoomOut () {
        k=k-3;
        if (k<5) {k=5}
     resetCanvas();
   }

      function resetCanvas () {
      init();
      graphQuad();
      results();
      QF();
      }


      function doMouseMove(event) {
    // always know where ther mouse is located
        resetCanvas();
        context.fillStyle= "purple"
        mouseX = event.clientX-offsetX;
        mouseY = event.clientY-offsetY;
        pointX = (mouseX-w/2)/k;
        pointY = a*Math.pow(pointX,2)+b*pointX+c*1;
        pointX =  pointX.toFixed(2);
        pointY =  pointY.toFixed(2);
        console.log(mouseX,mouseY, pointX, pointY, offsetY, offsetX);
        context.beginPath();
        context.arc(mouseX,h/2-pointY*k,5,0,2*Math.PI);
        context.fill(); 
        $("#point").text("Point on the curve: ("+pointX+","+pointY+")");
        // context.clearRect(0,0,w,h);
        // graphpaper();
        // graphQuad();
}  // end doMouseMove

 