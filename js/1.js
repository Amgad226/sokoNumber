  var tt  = [];

  document.body.addEventListener("keyup", keyDown);
  document.body.addEventListener("keyup", function(event){
    if(event.keyCode == 39 ||event.keyCode == 37||event.keyCode == 40||event.keyCode == 38){
      var lastStep=_.cloneDeep(tt);
      allSteps.push(lastStep)
    }
  });

  ArrayTostoreNextState=[]; //to add  nextState array 
  
  
  const I1=new ball( 0,  0    ,"blue"     ,true,  false  ,1,'yes');
  const O1=new ball( 300,0    ,"gray"  ,false ,true   ,1,'no');
  winArray=[O1];

  tt=[ 
    [ I1 ,  null ,null  , O1 ],
  ] 
  var nextState=_.cloneDeep(tt)

  allSteps=[] // to store all roude
  allSteps.push(_.cloneDeep(tt));
  get_next_state()
     
  function clearScreen() {
    ctx.fillStyle = "#b7aea5";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  function drawGame() {
    
    clearScreen();
    requestAnimationFrame(drawGame);
  
    O1.draw();
    I1.draw();
  }    
  drawGame();
