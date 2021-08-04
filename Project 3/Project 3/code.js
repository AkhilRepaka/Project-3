var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//creating the player Sofia
var Sofia;

var Sofia = createSprite(28,20,18,18);
Sofia.shapeColor="DarkGreen";

//creating the maze walls (wall1 - wall2)
  var wall1=createSprite(5,0,10,800);
  wall1.shapeColor="Black";
  
  var wall2=createSprite(5,395,800,10);
  wall2.shapeColor="Black";
  
  var wall3=createSprite(395,5,10,700);
  wall3.shapeColor="Black";
  
  var wall4=createSprite(395,5,700,10);
  wall4.shapeColor="Black";
  
  var wall5=createSprite(60,140,102,12);
  wall5.shapeColor="Blue";
  
  var wall6=createSprite(60,77,12,50);
  wall6.shapeColor="Blue";
  
  var wall7=createSprite(79,50,50,12);
  wall7.shapeColor="Blue";
  
  var wall8=createSprite(108,73,12,58);
  wall8.shapeColor="Blue";
  
  var wall9=createSprite(174,96,120,12);
  wall9.shapeColor="Blue";
  
  var wall10=createSprite(240,72,12,60);
  wall10.shapeColor="Blue";
  
  var wall11=createSprite(175,54,50,12);
  wall11.shapeColor="Blue";
  
  var wall12=createSprite(150,35,12,50);
  wall12.shapeColor="Blue";
  
  var wall13=createSprite(270,48,50,12);
  wall13.shapeColor="Blue";
  
  var wall14=createSprite(345,35,10,52);
  wall14.shapeColor="Blue";
  
  var wall15=createSprite(317,67,65,12);
  wall15.shapeColor="Blue";
  
  var wall16=createSprite(105,155,12,36);
  wall16.shapeColor="Blue";
  
  var wall17=createSprite(105,200,100,12);
  wall17.shapeColor="Blue";
  
  var wall18=createSprite(60,192,12,45);
  wall18.shapeColor="Blue";
  
  var wall19=createSprite(38,175,56,12);
  wall19.shapeColor="Blue";
  
  var wall20=createSprite(149,170,12,65);
  wall20.shapeColor="Blue";
  
  var wall21=createSprite(212,142,30,12);
  wall21.shapeColor="Blue";
  
  var wall22=createSprite(191,171,12,70);
  wall22.shapeColor="Blue";
  
  var wall23=createSprite(220,180,70,12);
  wall23.shapeColor="Blue";
  
  var wall24=createSprite(335,95,110,12);
  wall24.shapeColor="Blue";
  
  var wall25=createSprite(385,50,10,80);
  wall25.shapeColor="Blue";
  
  var wall26=createSprite(305,142,90,12);
  wall26.shapeColor="Blue";
  
  var wall27=createSprite(355,186,12,100);
  wall27.shapeColor="Blue";
  
  var wall28=createSprite(337,230,25,12);
  wall28.shapeColor="Blue";
  
  var wall29=createSprite(328,249,12,50);
  wall29.shapeColor="Blue";
  
  var wall30=createSprite(358,268,65,12);
  wall30.shapeColor="Blue";
  
  var wall31=createSprite(149,245,12,150);
  wall31.shapeColor="Blue";
  
  var wall32=createSprite(165,240,155,12);
  wall32.shapeColor="Blue";
  
  var wall33=createSprite(245,231,12,30);
  wall33.shapeColor="Blue";
  
  var wall34=createSprite(368,330,45,12);
  wall34.shapeColor="Blue";
  
  var wall35=createSprite(285,251,12,100);
  wall35.shapeColor="Blue";
  
  var wall36=createSprite(300,305,90,12);
  wall36.shapeColor="Blue";
  
  var wall37=createSprite(350,317,12,37);
  wall37.shapeColor="Blue";
  
  var wall38=createSprite(235,275,100,12);
  wall38.shapeColor="Blue";
  
  var wall39=createSprite(146,314,165,12);
  wall39.shapeColor="Blue";
  
  var wall40=createSprite(215,345,190,12);
  wall40.shapeColor="Blue";
  
  var wall41=createSprite(305,354,12,30);
  wall41.shapeColor="Blue";
  
  var wall42=createSprite(329,365,60,12);
  wall42.shapeColor="Blue";
  
  var wall43=createSprite(355,374,12,31);
  wall43.shapeColor="Blue";
  
  var wall44=createSprite(125,355,12,33);
  wall44.shapeColor="Blue";
  
  var wall45=createSprite(69,310,12,75);
  wall45.shapeColor="Blue";
  
  var wall46=createSprite(69,350,30,12);
  wall46.shapeColor="Blue";
  
  var wall47=createSprite(100,280,12,23);
  wall47.shapeColor="Blue";
  
  var wall48=createSprite(75,275,50,12);
  wall48.shapeColor="Blue";
  
  var wall49=createSprite(51,220,30,12);
  wall49.shapeColor="Blue";
  
  var wall50=createSprite(290,57,12,30);
  wall50.shapeColor="Blue";
  
  var wall51=createSprite(28,3,35,6);
  wall51.shapeColor="LightGreen";
  
  var cup=createSprite(396,372,6,35);
  cup.shapeColor="LightGreen";


  
function draw(){
background("Crimson");
drawSprites();


if (keyDown("UP_ARROW")){
  Sofia.velocityX=0;
  Sofia.velocityY=-4;
}

if (keyDown("DOWN_ARROW")){
  Sofia.velocityX=0;
  Sofia.velocityY=4;
}

if (keyDown("LEFT_ARROW")){
  Sofia.velocityX=-4;
  Sofia.velocityY=0;
}

if (keyDown("RIGHT_ARROW")){
  Sofia.velocityX=4;
  Sofia.velocityY=0;
}

if (Sofia.collide(cup)){
  background("white");
  textSize(40);
  text("You Win", 200,200);
}


Sofia.collide(wall1);
Sofia.collide(wall2);
Sofia.collide(wall3);
Sofia.collide(wall4);
Sofia.collide(wall5);
Sofia.collide(wall6);
Sofia.collide(wall7);
Sofia.collide(wall8);
Sofia.collide(wall9);
Sofia.collide(wall10);
Sofia.collide(wall11);
Sofia.collide(wall12);
Sofia.collide(wall13);
Sofia.collide(wall14);
Sofia.collide(wall15);
Sofia.collide(wall16);
Sofia.collide(wall17);
Sofia.collide(wall18);
Sofia.collide(wall19);
Sofia.collide(wall20);
Sofia.collide(wall21);
Sofia.collide(wall22);
Sofia.collide(wall23);
Sofia.collide(wall24);
Sofia.collide(wall25);
Sofia.collide(wall26);
Sofia.collide(wall27);
Sofia.collide(wall28);
Sofia.collide(wall29);
Sofia.collide(wall30);
Sofia.collide(wall31);
Sofia.collide(wall32);
Sofia.collide(wall33);
Sofia.collide(wall34);
Sofia.collide(wall35);
Sofia.collide(wall36);
Sofia.collide(wall37);
Sofia.collide(wall38);
Sofia.collide(wall39);
Sofia.collide(wall40);
Sofia.collide(wall41);
Sofia.collide(wall42);
Sofia.collide(wall43);
Sofia.collide(wall44);
Sofia.collide(wall45);
Sofia.collide(wall46);
Sofia.collide(wall47);
Sofia.collide(wall48);
Sofia.collide(wall49);
Sofia.collide(wall50);
Sofia.collide(wall51);
}
  























// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
