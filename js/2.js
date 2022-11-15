  var tt  = [];
 
  
  document.body.addEventListener("keyup", keyDown);
  document.body.addEventListener("keyup", function(event){
    if(event.keyCode == 39 ||event.keyCode == 37||event.keyCode == 40||event.keyCode == 38){
      var lastStep=_.cloneDeep(tt);
      allSteps.push(lastStep)
    }
  });
  
const I1=new ball( 0,  0    ,"blue"     ,true,  false  ,1,'yes');
const O1=new ball( 0,300  ,"gray"  ,false ,true   ,1,'no');
const W1= new ball (100,0,'#222',false,  'wall'  ,'','no')
const W2= new ball (100,100,'#222',false,  'wall','','no')
const W3= new ball (100,200,'#222',false,  'wall','','no')
const W4= new ball (100,300,'#222',false,  'wall','','no')
const I2=new ball( 200,  0    ,"red"     ,true,  false  ,2,'yes');
const O2=new ball( 200,300  ,"gray"  ,false ,true   ,2,'no');
 
  winArray=[O1,O2];
  
  ArrayTostoreNextState=[]; //to add  nextState array 

  tt=[ 
    [ I1 ,  W1,   I2 ],
    [ null ,W2, null ],
    [ null ,W3, null ],
    [ O1 ,  W4, O2 ],

  ] 
  allSteps=[]
  allSteps.push(_.cloneDeep(tt))
  get_next_state()
  
  function clearScreen() {
    ctx.fillStyle = "#b7aea5";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  function drawGame() {
    
    clearScreen();
    requestAnimationFrame(drawGame);
  
    O1.draw();
    O2.draw();
   
    I1.draw();
    
   
    I2.draw();

    W1.draw();
    W2.draw();
    W3.draw();
    W4.draw();
  }    
  
  
  
  drawGame();
  
