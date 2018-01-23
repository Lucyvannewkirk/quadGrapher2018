//Javascript for drawing and calculating quadratics 2017
var a, b, c, context, w, h, k=10;

function init() {
  canvas= document.getElementById("mycanvas");
  context = canvas.getContext("2d");
  w = canvas.width = 600;
  h = canvas.height = 400;
  console.log('canvas is loaded into context',w);
}  // close init

function QF() {
  // getting values to do quadratic formula
  a = $("#quadA").val();
  b = $("#linB").val();
  c = $("#constant").val();
  x1 = (-b+math.sqrt(b**2-4*a*b))/(2*a)
  x2 = (-b-math.sqrt(b**2-4*a*b))/(2*a)
  $("#solution1").text("Xintercept is at"+x1)
  console.log(a,b,c);
}  // close QF

function results() {
  // finding vertext and displaying symline and yint results
  vX = -(b*1)/(2*a);
  vY = a*Math.pow(vX,2)+b*vX+c*1;
  $(".vertex").text("Vertex is at (" + vX+","+vY+")");
}  // close results() 