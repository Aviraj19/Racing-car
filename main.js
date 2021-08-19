canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d") ;
var car1_width = 100;
var car1_height = 100;
var car1_x = 20;
var car1_y = 20;
var car2_width = 100;
var car2_height = 100;
var car2_x = 20;
var car2_y = 200;
background_img ="racing.jpg" ;
car1img="car1.png";
car2img="download.jpg";
function add() {
    bg_img=new Image();
    bg_img.onload=uploadbg;
    bg_img.src=background_img;
    car1_img=new Image();
    car1_img.onload=uploadcar1;
    car1_img.src=car1img
    car2_img=new Image();
    car2_img.onload=uploadcar2;
    car2_img.src=car2img
}
function uploadbg() {
    ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);
}
function uploadcar1() {
ctx.drawImage(car1_img,car1_x,car1_y,car1_width,car1_height);
}
function uploadcar2() {
    ctx.drawImage(car2_img,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    key_pressed=e.keyCode;
    console.log(key_pressed);
    if (key_pressed=='37') {
        left();
        console.log("left key is pressed")
    }
    if (key_pressed=='38') {
        up();
        console.log("up key is pressed")
    }
    if (key_pressed=='39') {
        right();
        console.log("right key is pressed")
    }
    if (key_pressed=='40') {
        down();
        console.log("down key is pressed")
    }
    if (key_pressed=='65') {
        left1();
        console.log("left1 key is pressed")
    }
    if (key_pressed=='87') {
        up1();
        console.log("up1 key is pressed")
    }
    if (key_pressed=='68') {
        right1();
        console.log("right1 key is pressed")
    }
    if (key_pressed=='83') {
        down1();
        console.log("down1 key is pressed")
    }
}
function left() {
    if (car1_x>=0) {
        car1_x = car1_x-10;
        uploadbg();
        uploadcar1();
        uploadcar2();
    }
}
function right() {
    if (car1_x<=900) {
        car1_x = car1_x+10;
        uploadbg();
        uploadcar1();
        uploadcar2();
    }
}
function up() {
    if (car1_y>=0) {
        car1_y = car1_y-10;
        uploadbg();
        uploadcar1();
        uploadcar2();
    }
}
function down() {
    if (car1_y<=700) {
        car1_y = car1_y+10;
        uploadbg();
        uploadcar1();
        uploadcar2();
    }
}
function left1() {
    if (car2_x>=0) {
        car2_x = car2_x-10;
        uploadbg();
        uploadcar1();
        uploadcar2();
    }
}
function right1() {
    if (car2_x<=900) {
        car2_x = car2_x+10;
        uploadbg();
        uploadcar1();
        uploadcar2();
    }
}
function up1() {
    if (car2_y>=0) {
        car2_y = car2_y-10;
        uploadbg();
        uploadcar1();
        uploadcar2();
    }
}
function down1() {
    if (car2_y<=700) {
        car2_y = car2_y+10;
        uploadbg();
        uploadcar1();
        uploadcar2();
    }
}
if (car1_x > 900) {
    console.log("car1 won");
    document.getElementById("game status").innerHTML="Car1 has won";
}
if (car2_x > 900) {
    console.log("car2 won");
    document.getElementById("game status").innerHTML="Car2 has won";
}