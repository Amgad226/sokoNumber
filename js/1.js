  var tt  = [];

  document.body.addEventListener("keyup", userplay);
  document.body.addEventListener("keyup", function(event){
    if(event.keyCode == 39 ||event.keyCode == 37||event.keyCode == 40||event.keyCode == 38){
      var lastStep=_.cloneDeep(tt);
      allSteps.push(lastStep)
    }
  });

  ArrayTostoreNextState=[]; //to add  nextState array 
  
  
  const I1=new ball( 0,  0    ,oneColor     ,true,  false  ,1,'yes');
  const O1=new outt( 300,0    ,oneColor  ,false ,true   ,1,'no',1,null);
  winArray=[O1];
  // const W1= new ball (100,0,'#222',false,  'wall'  ,'','no')
  const W1= new Wall (1002,1200,'#222',false,  'wall'  ,'','no')

  tt=[ 
    // [ W1 ,  W1 ,W1  , W1 ],
    [  I1,null,null  , O1 ],
    // [ W1 ,  W1 ,W1  , W1 ],

  ] 
  ttStructure=new structure(tt ,null)


  // const I1w=new ball( 0,  0    ,oneColor     ,true,  false  ,1,'yes',0,null);
  const I1w=new ball( 300,  0    ,oneColor     ,true,  false  ,1,'yes',0,null);

  const O1w=new outt( 300,0    ,oneColor  ,true ,true   ,1,'no',1,I1w);
  
  
  ttWin=[ 
    // [ W1 ,  W1 ,W1  , W1 ],
    [ null ,  null ,null  , O1w ],
    // [ W1 ,  W1 ,W1  , W1 ],
  ] 

  var hashedTTWin=hashArray(ttWin)

  

  // console.log(isEqualArray(tt,ttWin));

  var nextState=_.cloneDeep(tt)

  allSteps=[] // to store all roude
  allSteps.push(_.cloneDeep(tt));
  // get_next_state(tt)
     
  
 
  function drawGame() {
    
    clearScreen();
    requestAnimationFrame(drawGame);
    drowTT()
  
    // O1.draw();
    // I1.draw();
  }    
  drawGame();
