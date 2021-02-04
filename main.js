canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
car1_width=120;
car1_height=70;
car1_image="Car1.png"
car1_x=10;
car1_y=10;
car1_width=120;
car1_height=70;
car1_image="Car2.jpg"
car1_x=10;
car1_y=10;
background_img="racing.jpg"
function add()
{
    background_img_tag= new Image();
    background_img_tag.onload =uploadBackground;
    background_img_tag.src =background_img

    car1_imgTag =new Image();
    car1_imgTag.onload=uploadcar1;
    car1_imgTag.src=car1_image;
}
function uploadbackground()
{
    ctx.drawImage(background_img_tag,0,0,canvas.width,canvas.height);
}
function uploadcar1()
{
    ctx.drawImage(car1_img_tag,car1_x,car1_y,car1_width,car1_height);
}
function uploadcar2()
{
    ctx.drawImage(car2_img_tag,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keypressed=e.keyCode;
console.log(keypressed);
if(keypressed=='38')
{
    car1_up();
    console.log("up");
}
if(keypressed=='40'){
    car1_down();
    console.log("down");
}
if(keypressed=='37'){
    car1_left();
    console.log("left");}

if(keypressed=='39'){
    car1_right();
    console.log("right");
}
}
    




if(keypressed=='87'){
        car2_up();
        console.log("up");
}
if(keypressed=='65'){
            car2_left();
            console.log("left");
}
if(keypressed=='68'){
                car2_right();
                console.log("right");
}
if(keypressed=='83'){
                    car2_down();
                    console.log("down");        
}

function up()
{
    if(rover_y >=0)
    {
        rover_y=rover_y-10;
        console.log("when up arrow is pressed, x="+ rover_x + "y ="+rover_y);
        uploadbackground();
        uploadrover();
    }
}