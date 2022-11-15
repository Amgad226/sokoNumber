var tt  = [];


document.body.addEventListener("keyup", keyDown);
document.body.addEventListener("keyup", function(event){
  if(event.keyCode == 39 ||event.keyCode == 37||event.keyCode == 40||event.keyCode == 38){
    var lastStep=_.cloneDeep(tt);
    allSteps.push(lastStep)
  }
});

  
const I1=new ball( 0,  0    ,"blue"     ,true,  false  ,1,'yes');
const I2=new ball( 0,200    ,"red"      ,true,  false  ,2,'yes');
const O1=new ball( 100,200  ,"gray"  ,false ,true   ,1,'no');
const O2=new ball( 100, 0   ,"gray"  ,false ,true   ,2,'no');

const W1= new ball (0,100,'#222',false,  'wall','','no')
const W2= new ball (200,100,'#222',false,'wall','','no')
winArray=[O1,O2];

var stop=0
// log(winnn)
ArrayTostoreNextState=[]; //to add  nextState array 

tt=[ 
  [ I1 ,  O2   , null ],
  [ W1 ,  null , W2   ],
  [ I2 ,  O1   , null ],
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


    


}    

drawGame();

