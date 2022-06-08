function preload(){
    
}

function setup(){
    canvas= createCanvas(800,800);
    canvas.position(250,150);
    video= createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,200,200,400,400);
    fill("red");
    stroke("red");
    circle(50, 50, 100);
    circle(750, 50, 100);
    circle(750, 750, 100);
    circle(50, 750, 100);
    fill("aquamarine");
    stroke("aquamarine");
    rect(100,30,600,40);
    rect(100,730,600,40);
    rect(30,100,40,600);
    rect(730,100,40,600);
    
}

function take_snapshot(){
    save('filter_img.png');
}