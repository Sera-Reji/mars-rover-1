var canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
var rover_width=100;
var rover_height=90;
var rover_x=10;
var rover_y=10;
var background_image="mars.jpg";
var rover_image="rover.png";
function add(){
    background_img_tag=new Image();
    background_img_tag.onload=upload_background;
    background_img_tag.src=background_image;
    rover_image_tag=new Image();
    rover_image_tag.onload=upload_rover;
    rover_image_tag.src=rover_image;
}
function upload_background(){
ctx.drawImage(background_img_tag, 0, 0, canvas.width, canvas.height);
}
function upload_rover(){
    ctx.drawImage(rover_image_tag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_key_down);
function my_key_down(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if (keypressed=="38"){
        up();
        console.log("up");
    }
    if (keypressed=="40"){
        down();
        console.log("down");
    }
    if (keypressed=="37"){
        left();
        console.log("left");
    }
    if (keypressed=="39"){
        right();
        console.log("right");
    }
}