var angle = 0;
var fraction = 0;

function setup(){
     createCanvas(400,400);
    slider = createSlider(0,TWO_PI,PI/4,0.01);
      slider1 = createSlider(0.50,1.0,0.65,0.01);
 }

function draw(){
    background(51);
    angle = slider.value();
    fraction = slider1.value();
    var len = 100;
    stroke(255);
    translate(200,height); //translate the branch to bottom of the tree
    
    branch(100,angle,fraction);
}

function branch(len){
    line(0,0,0,-len);  // not we can draw as from origin
    translate(0,-len);
    
    if(len>4){
    push();
    rotate(angle*fraction);
    branch(len*0.67);  
    pop();
        
    push();
    rotate(-angle*fraction);
    branch(len*0.67);
    pop();
        }
    else{
        return;
    }
    //line(0,0,0,-len*0.67);
}