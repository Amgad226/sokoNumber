    var tt  = [];

    document.body.addEventListener("keyup", userplay);
    document.body.addEventListener("keyup", function(event){
      if(event.keyCode == 39 ||event.keyCode == 37||event.keyCode == 40||event.keyCode == 38){
        var lastStep=_.cloneDeep(tt);
        allSteps.push(lastStep)
      }
    });
    
    const I1=new ball( 0,  0+100    ,oneColor     ,true,  false  ,1,'yes');
    const O1=new outt( 400,100+100  ,oneColor  ,false ,true   ,1,'no');

    const I2=new ball( 200,0+100    ,twoColor      ,true,  false  ,2,'yes');
    const O2=new outt( 200, 100+100 ,twoColor  ,false ,true   ,2,'no');

    const O3=new outt( 0, 100+100   ,threeColor  ,false ,true   ,3,'no');
    const I3=new ball( 400,0+100    ,threeColor      ,true,  false  ,3,'yes');
   
    const w1= new Wall (0   ,0,'#222',false,    'wall', '','no')
    const w2= new Wall (100 ,0,'#222',false,  'wall', '','no')
    const w3= new Wall (200 ,0,'#222',false,  'wall', '','no')
    const w4= new Wall (300 ,0,'#222',false,'wall'  , '','no')
    const w5= new Wall (400 ,0,'#222',false,'wall'  , '','no')

    const W1= new Wall (100,0+100,  '#222',false,  'wall','','no')
    const W2= new Wall (300,0+100,  '#222',false,'wall'  ,'','no')
    const W3= new Wall (0,200+100,  '#222',false,'wall'  ,'','no')
    const W4= new Wall (100,200+100,'#222',false,'wall','','no')
    const W5= new Wall (300,200+100,'#222',false,'wall','','no')
    const W6= new Wall (400,200+100,'#222',false,'wall','','no')
    var winArray=[O1,O2,O3];
    
    var stop=0
    ArrayTostoreNextState=[]; //to add  nextState array 
    
    var tt=[ 
      // [ w1   ,w2    ,w3    ,w4    ,w5   ],
      [ I1   ,W1    ,I2    ,W2    ,I3   ],
      [ O3   ,null  ,O2    ,null  ,O1   ],
      [ W3   ,W4    ,null  ,W5    ,W6   ],
 
    ] ;
    ttStructure=new structure(tt ,null)

    
    

    // const I1w=new ball( 0,  0+100    ,oneColor    ,true   ,false  ,1  ,'yes'  ,0   ,null);
    // const I2w=new ball( 200,0+100    ,twoColor    ,true   ,false  ,2  ,'yes'  ,0   ,null);
    // const I3w=new ball( 400,0+100    ,threeColor  ,true   ,false  ,3  ,'yes'  ,0   ,null);
    
    const I1w=new ball( 400,100+100   ,oneColor    ,true   ,false  ,1  ,'yes'  ,0   ,null);
    const I2w=new ball( 200, 100+100  ,twoColor    ,true   ,false  ,2  ,'yes'  ,0   ,null);
    const I3w=new ball( 0, 100+100    ,threeColor  ,true   ,false  ,3  ,'yes'  ,0   ,null);


    const O1w=new outt( 400,100+100  ,oneColor    ,true   ,true   ,1  ,'no'   ,1   ,I1w );
    const O2w=new outt( 200, 100+100 ,twoColor    ,true   ,true   ,2  ,'no'   ,1   ,I2w );
    const O3w=new outt( 0, 100+100   ,threeColor  ,true   ,true   ,3  ,'no'   ,1   ,I3w );

   
    var ttWin=[ 
      // [ w1   ,w2    ,w3    ,w4    ,w5   ],
      [ null  ,W1    ,null  ,W2    ,null   ],
      [ O3w   ,null  ,O2w   ,null  ,O1w   ],
      [ W3    ,W4    ,null  ,W5    ,W6   ],
 
    ] ;
    var hashedTTWin=hashArray(ttWin)
  
    allSteps=[]
    allSteps.push(_.cloneDeep(tt))
get_next_state(ttStructure)
// get_next_state(tt)
    
 

    function drawGame() {
      
      clearScreen();
      requestAnimationFrame(drawGame);    
       
      O3.draw();
      O2.draw();
      O1.draw();

      W1.draw();
      W2.draw();
      W3.draw();
      W4.draw();
      W5.draw();
      W6.draw();
      
      I1.draw();
      I2.draw();
      I3.draw();
    
      w1.draw();
      w2.draw();
      w3.draw();
      w4.draw();
      w5.draw();
    }    

    drawGame();    
