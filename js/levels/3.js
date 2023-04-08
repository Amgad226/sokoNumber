console.log(oneColor);
var tt  = [];

const w1= new Wall (0   ,0,'#222',false,    'wall', '','no')
const w2= new Wall (100 ,0,'#222',false,  'wall', '','no')
const w3= new Wall (200 ,0,'#222',false,  'wall', '','no')


var I1=new ball( 0,  0+100    ,oneColor     ,true,  false  ,1,'yes');
var O1=new outt( 100,200+100  ,oneColor  ,false ,true   ,1,'no');

var I2=new ball( 200,200+100    ,twoColor      ,true,  false  ,2,'yes');
var O2=new outt( 100, 0+100   ,twoColor  ,false ,true   ,2,'no');

const W1= new Wall (0  ,100+100,'#222',false,'wall','','no')
const W2= new Wall (200,100+100,'#222',false,'wall','','no')

const w4= new Wall (0   ,400,'#222',false,  'wall', '','no')
const w5= new Wall (100 ,400,'#222',false,  'wall', '','no')
const w6= new Wall (200 ,400,'#222',false,  'wall', '','no')

walls=[
  w1,w2,w3,w4,w5,w6
  ,W1,W2
];

var inputs  = [I1,I2] ; 
var outputs  = [O1,O2] ; 

var winArray=[O1,O2];

var stop=0
var ArrayTostoreNextState=[]; //to add  nextState array 
var win_hashed_array_in_user_play=-669423721

tt=[ 
  // [ w1    ,w2   ,w3   ],
  [ I1 ,  O2   , null ],
  [ W1 ,  null , W2   ],
  [ null ,  O1   , I2 ],
  // [ w4    ,w5   ,w6   ],
];


var ttStructure=new structure(tt ,null)

// const I1w=new ball( 0,  100    ,oneColor     ,true,  false  ,1,'yes'    ,0,null);
// const I2w=new ball( 200,300    ,twoColor      ,true,  false  ,2,'yes' ,0,null);


const I1w=new ball(100,200+100    ,oneColor     ,true,  false  ,1,'yes'    ,0,null);
const I2w=new ball( 100, 0+100    ,twoColor      ,true,  false  ,2,'yes' ,0,null);


const O1W=new outt( 100,200+100  ,oneColor  ,true ,true   ,1,'no' ,1 ,I1w);
const O2W=new outt( 100, 0+100   ,twoColor  ,true ,true   ,2,'no' ,1 ,I2w);

ttWin=[ 

  [ null ,  O2W   , null ],
  [ W1   ,  null  , W2   ],
  [ null ,  O1W   , null ],

] ;
var hashedTTWin=hashArray(ttWin)



var array1 = [I1,I2];
var array2 = [I1w,I2w] 


allSteps=[]
allSteps.push(_.cloneDeep(tt))


var boolean= true ; 
function drawGame() {
    if(boolean){
      clearScreen();
      requestAnimationFrame(drawGame);
      for (let i = 0; i < outputs.length; i++) {
        outputs[i].draw();        
      }
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].draw();        
      }
      for (let i = 0; i < walls.length; i++) {
        walls[i].draw();        
      }
    }
  }    
  drawGame();