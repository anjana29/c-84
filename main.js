canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var rover_width=100;
var rover_height=90;
var rover_x=10;
var rover_y=10;
var background_image="mars.jpg";
var rover_image="rover.png";
function add(){
    var background_img_tag=new Image();
    background_img_tag.onload=uploadbackground;
    background_img_tag.src=background_image;
    var rover_image_tag=new Image();
    rover_image_tag.onload=uploadrover;
    rover_image_tag.src=rover_image;
}
function uploadbackground(){
    ctx.drawImage(background_img_tag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_image_tag,rover_x,rover_y,rover_width,rover_height)
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
var key_pressed=e.keyCode;
console.log(key_pressed);
if(key_pressed=='38'){

    up();
    console.log("up");
}
if(key_pressed=='40'){

    down();
    console.log("down");
}
if(key_pressed=='37'){

    left();
    console.log("left");
}
if(key_pressed=='39'){

    right();
    console.log("right");
}
}
