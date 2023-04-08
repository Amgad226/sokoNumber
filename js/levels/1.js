// import { oneColor, twoColor, threeColor, fourColor, fiveColor, canvas} from "../js/static.js";
  
  var tt  = [];

  ArrayTostoreNextState=[]; //to add  nextState array 
  
  
  const I1=new ball( 0,  0    ,oneColor     ,true,  false  ,1,'yes');
  const O1=new outt( 300,0    ,oneColor  ,false ,true   ,1,'no',1,null);
  winArray=[O1];

var inputs  = [I1] ; 
var outputs  = [O1] ; 
var walls=[];
  tt=[ 
    [  I1,null,null  , O1 ],

  ] 
  ttStructure=new structure(tt ,null)
var win_hashed_array_in_user_play=716641295;

  const I1w=new ball( 300,  0    ,oneColor     ,true,  false  ,1,'yes',0,null);

  const O1w=new outt( 300,0    ,oneColor  ,true ,true   ,1,'no',1,I1w);
  
  
  ttWin=[ 
    [ null ,  null ,null  , O1w ],
  ] 

  var hashedTTWin=hashArray(ttWin)


  var nextState=_.cloneDeep(tt)

  allSteps=[] // to store path
  allSteps.push(_.cloneDeep(tt));
     
  
 
  
