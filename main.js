canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseevent="empty";
var last_position_of_x,last_position_of_y;
color="cyan";
width_ofline=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseevent="mousedown";
    console.log(mouseevent);
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    console.log("mousemove");
    current_position_of_x=e.clientX-canvas.offsetLeft;
     current_position_of_y=e.clientY-canvas.offsetTop;
  if(mouseevent=="mousedown"){
      console.log("insideif");
      ctx.beginPath();
      ctx.strokeStyle=color;
      ctx.lineWidth=width_ofline;
      ctx.moveTo(last_position_of_x,last_position_of_y);
      ctx.lineTo(current_position_of_x,current_position_of_y);
ctx.stroke();
  }
  last_position_of_x=current_position_of_x;
  last_position_of_y=current_position_of_y;
}
