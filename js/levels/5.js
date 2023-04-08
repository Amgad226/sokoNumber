
    var tt  = [];
 
    const I1=new ball( 100 ,100    ,oneColor    ,true,  false  ,1,'yes');
    const O1=new outt( 100,200     ,oneColor   ,false ,true   ,1,'no');

    const I2=new ball( 200 ,200   ,twoColor        ,true,  false  ,2,'yes');
    const O2=new outt( 200, 300   ,twoColor  ,false ,true   ,2,'no');

    const I3=new ball( 300 ,300  ,threeColor      ,true,  false  ,3,'yes');
    const O3=new outt( 300,400   ,threeColor   ,false ,true   ,3,'no');

    const I4=new ball( 400 ,400  ,fourColor    ,true  ,false   ,4,'yes');
    const O4=new outt( 400,300   ,fourColor   ,false ,true   ,4,'no');
    // const O1=new ball( 100,200  ,"#0090FF"  ,false ,true   ,1,'no');

    const inputs =[ I1, I2, I3 ,I4 ,]
    const outputs =[ O1, O2, O3 ,O4 ,]
    
    const w1= new Wall (0  ,0,'#222',false,    'wall', '','no')
    const w2= new Wall (100 ,0,'#222',false,  'wall', '','no')
    const w3= new Wall (200 ,0,'#222',false,  'wall', '','no')
    const w4= new Wall (300 ,0,'#222',false,'wall'  , '','no')
    const w5= new Wall (400 ,0,'#222',false,'wall'  , '','no')
    const w6= new Wall (500 ,00,'#222',false,'wall' , '','no')
    const w7= new Wall (500 ,100,'#222',false,'wall', '','no')
    const w8= new Wall (500 ,200,'#222',false,'wall', '','no')
    const w9= new Wall (500 ,300,'#222',false,'wall', '','no')
    const w10= new Wall(500 ,500,'#222',false,'wall','','no')
    const w11= new Wall(500 ,400,'#222',false,'wall','','no')
    const w13= new Wall(400 ,500,'#222',false,'wall', '','no')
    const w14= new Wall(300 ,500,'#222',false,'wall', '','no')
    const w15= new Wall(200 ,500,'#222',false,'wall', '','no')
    const w16= new Wall(100 ,500,'#222',false,'wall', '','no')
    const w17= new Wall(0,500,'#222',false,'wall',   '','no')
    const w19= new Wall(0,400,'#222',false,'wall',   '','no')
    const w20= new Wall(0,300,'#222',false,'wall',   '','no')
    const w21= new Wall(0,200,'#222',false,'wall',   '','no')
    const w22= new Wall(0,100,'#222',false,'wall',   '','no')

    const w23= new Wall(200,100,'#222',false,'wall', '','no')
    const w24= new Wall(300,100,'#222',false,'wall', '','no')
    const w25= new Wall(400,100,'#222',false,'wall', '','no')
    const w26= new Wall(300,200,'#222',false,'wall', '','no')

    var walls  = [ w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w13, w14, w15, w16, w17, w19, w20, w21, w22, w23, w24, w25, w26];
    winArray=[O1,O2,O3,O4];
    
    var stop=0
    // log(winnn)
    ArrayTostoreNextState=[]; //to add  nextState array 
    
    // tt=[ 
    //   // [ w1    ,w2      ,w3    ,w4      ,w5     ,w6   ],
    //   [ w22   ,I1      ,w23   ,w24     ,w25    ,w7   ],
    //   [ w21   ,O1      ,I2    ,w26     ,null   ,w8   ],
    //   [ w20   ,null    ,O2    ,I3      ,O4     ,w9   ],
    //   [ w19   ,null    ,null  ,O3      ,I4     ,w11  ],
    //   // [ w17   ,w16     ,w15   ,w14     ,w13    ,w10  ],
 
    // ] 

     tt=[ 
      // [ w1    ,w2      ,w3    ,w4      ,w5     ,w6   ],
      [/* w22,*/   I1      ,w23   ,w24     ,w25   /*,w7 */  ],
      [/* w21,*/   O1      ,I2    ,w26     ,null  /*,w8 */  ],
      [/* w20,*/   null    ,O2    ,I3      ,O4    /*,w9 */  ],
      [/* w19,*/   null    ,null  ,O3      ,I4    /*,w11*/  ],
      // [ w17   ,w16     ,w15   ,w14     ,w13    ,w10  ],
    ] ;
    ttStructure=new structure(tt ,null)
    var win_hashed_array_in_user_play=750537147


    // const I1w=new ball( 100 ,100    ,oneColor    ,true,  false  ,1,'yes',0,null);
    // const I2w=new ball( 200 ,200   ,twoColor        ,true,  false  ,2,'yes',0,null);
    // const I3w=new ball( 300 ,300  ,threeColor      ,true,  false  ,3,'yes',0,null);
    // const I4w=new ball( 400 ,400  ,fourColor    ,true  ,false   ,4,'yes',0,null);
    const I1w=new ball( 100,200     ,oneColor    ,true,  false  ,1,'yes',0,null);
    const I2w=new ball( 200, 300   ,twoColor        ,true,  false  ,2,'yes',0,null);
    const I3w=new ball( 300,400   ,threeColor      ,true,  false  ,3,'yes',0,null);
    const I4w=new ball( 400 ,300  ,fourColor    ,true  ,false   ,4,'yes',0,null);


    const O1w=new outt( 100,200     ,oneColor   ,true ,true   ,1,'no' ,1,I1w);
    const O2w=new outt( 200, 300   ,twoColor  ,true ,true   ,2,'no',1,I2w);
    const O3w=new outt( 300,400   ,threeColor   ,true ,true   ,3,'no',1,I3w);
    const O4w=new outt( 400,300   ,fourColor   ,true ,true   ,4,'no',1,I4w);


    ttWin=[ 
      // [ w1    ,w2      ,w3    ,w4      ,w5     ,w6   ],
      [/* w22,*/   null    ,w23   ,w24     ,w25   /*,w7 */  ],
      [/* w21,*/   O1w     ,null  ,w26     ,null  /*,w8 */  ],
      [/* w20,*/   null    ,O2w   ,null    ,O4w    /*,w9 */  ],
      [/* w19,*/   null    ,null  ,O3w     ,null    /*,w11*/  ],
      // [ w17   ,w16     ,w15   ,w14     ,w13    ,w10  ],
    ] ;
    var hashedTTWin=hashArray(ttWin)

    allSteps=[]
    allSteps.push(_.cloneDeep(tt))
  // get_next_state(tt)

    

    
    // drawGame();
    // const w1= new ball (0,0,'#222',false,    'wall', 'W1 ','no')
    // const w2= new ball (100,0,'#222',false,  'wall', 'W2 ','no')
    // const w3= new ball (200,0,'#222',false,  'wall', 'W3 ','no')
    // const w4= new ball (300,0,'#222',false,'wall'  , 'W4 ','no')
    // const w5= new ball (400,0,'#222',false,'wall'  , 'W5 ','no')
    // const w6= new ball (500,00,'#222',false,'wall' , 'W6 ','no')
    // const w7= new ball (500,100,'#222',false,'wall', 'W7 ','no')
    // const w8= new ball (500,200,'#222',false,'wall', 'W8 ','no')
    // const w9= new ball (500,300,'#222',false,'wall', 'W9 ','no')
    // const w10= new ball (500,500,'#222',false,'wall','W10','no')
    // const w11= new ball (500,400,'#222',false,'wall','W11','no')
    // const w13= new ball(400,500,'#222',false,'wall', 'W13','no')
    // const w14= new ball(300,500,'#222',false,'wall', 'W14','no')
    // const w15= new ball(200,500,'#222',false,'wall', 'W15','no')
    // const w16= new ball(100,500,'#222',false,'wall', 'W16','no')
    // const w17= new ball(0,500,'#222',false,'wall',   'W17','no')
    // const w19= new ball(0,400,'#222',false,'wall',   'W19','no')
    // const w20= new ball(0,300,'#222',false,'wall',   'W20','no')
    // const w21= new ball(0,200,'#222',false,'wall',   'W21','no')
    // const w22= new ball(0,100,'#222',false,'wall',   'W22','no')
    // const w23= new ball(200,100,'#222',false,'wall', 'W23','no')
    // const w24= new ball(300,100,'#222',false,'wall', 'W24','no')
    // const w25= new ball(400,100,'#222',false,'wall', 'W25','no')
    // const w26= new ball(300,200,'#222',false,'wall', 'W24','no')
  