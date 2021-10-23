function preload(){
    img = loadImage('https://t0.rbxcdn.com/92a4c61b01b61144358707e2513d0cb1');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Player", 194, 167);
    noFill();
    stroke("#FF0000");
    rect(194, 166, 12, 17);

    fill("#FF0000");
    text("Temple", 320, 90);
    noFill();
    stroke("#FF0000");
    rect(320, 100, 300, 300);
}