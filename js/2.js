  var tt  = [];
 
  
  document.body.addEventListener("keyup", userplay);
  document.body.addEventListener("keyup", function(event){
    if(event.keyCode == 39 ||event.keyCode == 37||event.keyCode == 40||event.keyCode == 38){
      var lastStep=_.cloneDeep(tt);
      allSteps.push(lastStep)
    }
  });
  
var I1=new ball( 0,  0  ,oneColor  ,true,  false  ,1,'yes');
var O1=new outt( 0,300  ,oneColor  ,false ,true   ,1,'no');

var I2=new ball( 200,  0  ,twoColor  ,true,  false  ,2,'yes');
var O2=new outt( 200,300  ,twoColor  ,false ,true   ,2,'no');

const W1= new Wall (100,0,'#222',false,  'wall'  ,'','no')
const W2= new Wall (100,100,'#222',false,  'wall','','no')
const W3= new Wall (100,200,'#222',false,  'wall','','no')
const W4= new Wall (100,300,'#222',false,  'wall','','no')


 
  winArray=[O1,O2];
  
  ArrayTostoreNextState=[]; //to add  nextState array 

  tt=[ 
    [ I1 ,  W1,   I2 ],
    [ null ,W2, null ],
    [ null ,W3, null ],
    [ O1 ,  W4, O2 ],

  ] 
  ttStructure=new structure(tt ,null)

  
  // const I1w=new ball( 0,  0    ,oneColor     ,true,  false  ,1,'yes',0,null);
  // const I2w=new ball( 200,  0    ,twoColor     ,true,  false  ,2,'yes',0,null);

  const I1w=new ball( 0,  300    ,oneColor     ,true,  false  ,1,'yes',0,null);
  const I2w=new ball( 200,  300    ,twoColor     ,true,  false  ,2,'yes',0,null);
  

  const O1w=new outt( 0,300    ,oneColor  ,true ,true   ,1,'no',1,I1w);
  const O2w=new outt( 200,300   ,twoColor  ,true ,true   ,2,'no',1,I2w);
  ttWin=[ 
    [ null ,  W1,   null ],
    [ null ,W2, null ],
    [ null ,W3, null ],
    [ O1w ,  W4, O2w ],

  ] 
  var hashedTTWin=hashArray(ttWin)

  // t=[ 
  //   [ W1 ,  I1,   I2 ],
  //   [ null ,W2, null ],
  //   [ null ,W3, null ],
  //   [ O1 ,  I2, O2 ],

  // ] 
  // alert(isEqualArray(tt,t))

  allSteps=[]
  allSteps.push(_.cloneDeep(tt))
  var pathArrayDfs=[];
pathArrayDfs.push(tt)
  // get_next_state(tt)


  function drawGame() {
    
    clearScreen();
    requestAnimationFrame(drawGame);
    drowTT()
  
    // O1.draw();
    // O2.draw();
   
    // I1.draw();
    // I2.draw();
    

    // W1.draw();
    // W2.draw();
    // W3.draw();
    // W4.draw();

 
  }    
  
  
  
  drawGame();
  
