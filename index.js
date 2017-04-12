function setup() {
createCanvas(500,500);
colorMode(RGB,255,255,255,100);
background(226,224,215);

// 2 farbige diagonale linien
noStroke();
fill(70,140,129,60);
quad(90, 0, 130, 0, 500, 330, 500, 470);

fill(203,171,112,60);
quad(490, 0, 460, 0, 0, 380, 0, 500);

// großer schwarzer kreis
noFill();
  strokeWeight(20);
  stroke(0, 0 , 0, 100);
  ellipse(width/2, height/2, 400, 400);
  noStroke();
  
  //12 mal rot
for(var i= 0; i<11; i++){
  var x = random(125,370);
  var y = random(125,370);
  var r = 20;
  noStroke(); 
  fill(random(194,217),random(0,33),random(10,180),60);
  
  fill(198,28,49,60);
  ellipse(x,y,r*2,r*2);
  }
  
  //roter mit schwarz
  for(var i= 0; i<1; i++){
  var x = random(125,370);
  var y = random(125,370);
  var r = 20;
  noStroke(); 
  fill(random(194,217),random(0,33),random(10,180),60);
  
  fill(215,97,69,60);
  ellipse(x,y,r*2,r*2);

  fill(0,0,0,100); 
  ellipse(x,y,r-11,r-11);
  }
      
  //6 mal blau
for(var i= 0; i<6; i++){
  var x = random(125,370);
  var y = random(125,370);
  var r = 20;
  noStroke(1);
  fill(9,97,107,60);
  ellipse(x,y,r*2,r*2);
  }
   
  //3 mal gelb
for(var i= 0; i<3; i++){
  var x = random(125,370);
  var y = random(125,370);
  var r = 20;
  noStroke();
  fill(234,198,86,60);
  ellipse(x,y,r*3,r*3);
  }
   
  //3 mal grün/blau
for(var i= 0; i<3; i++){
  var x = random(125,370);
  var y = random(125,370);
  var r = 20;
  noStroke();
  fill(random(0,130),random(194,156),random(110,142),60);
  //fill(49,255,188,60);
  //fill(44,232,152,60);
  ellipse(x,y,r*2,r*2);
  }
   
  var x = random(125,370);
  var y = random(125,370);
  var r = 20;
  
  // 1 mal grau
  fill(69,73,56,60); 
  ellipse(x,y,r*4,r*4); 
  
  var x = random(125,360);
  var y = random(125,360);
  var r = 20;
 
}

function draw() {
  
}
