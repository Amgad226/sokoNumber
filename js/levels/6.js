
    var tt  = [];
    function log(params) {
      console.log(params) 
    }
    
    document.body.addEventListener("keyup", userplay);
    document.body.addEventListener("keyup", function(event){
      if(event.keyCode == 39 ||event.keyCode == 37||event.keyCode == 40||event.keyCode == 38){
        var lastStep=_.cloneDeep(tt);
        allSteps.push(lastStep)
      }
    });

    //                 x:  y:        color:     in:    out    v: mo: sleep obj
    
    
    const I1=new ball( 100 , 100    ,oneColor     ,true,  false  ,1,'yes');
    const O1=new outt( 200 , 100    ,oneColor     ,false ,true   ,1,'no');

    const I2=new ball( 200 , 0      ,twoColor      ,true, false   ,2,'yes');
    const O2=new outt( 200 , 0      ,twoColor     ,true ,true   ,2, 'no' ,1 ,I2);

    const I3=new ball( 0   , 200    ,threeColor    ,true,  false  ,3,'yes');
    
    const I4=new ball( 200 , 200    ,fourColor  ,true  ,false  ,4,'yes');
    const O4=new outt( 300 , 200    ,fourColor    ,false ,true   ,4,'no');

    const O3=new outt( 200 , 200    ,threeColor     ,true ,true   ,3, 'no' ,1 ,I4);

    const I5=new ball( 300 , 100    ,fiveColor  ,true  ,false  ,5,'yes');
    const O5=new outt( 300 , 100    ,fiveColor    ,true ,true   ,5, 'no' ,1 ,I5);
    
    
    const W1= new Wall (100,200,'#222',false, 'wall', '','no')
    const W2= new Wall (300 ,0,'#222',false,  'wall', '','no')


    
    var inputs  = [I1,I2 ,I3,I4,I5] ; 
    var outputs  = [O1,O2,O3,O4,O5] ; 
var walls=[W1,W2];
    winArray=[O1,O2,O3,O4,O5];
    
    var stop=0
    // log(winnn)
ArrayTostoreNextState=[]; //to add  nextState array 
    
   var  tt=[ 
      [ null   ,null   ,O2    ,W2    ],
      [ null   ,I1     ,O1    ,O5    ],
      [ I3     ,W1     ,O3    ,O4    ],
    ] 
  ttStructure=new structure(tt ,null)


    const I1w=new ball( 100 , 100    ,oneColor      ,true,  false  ,1,'yes',0,null);
    const I2w=new ball( 200 , 0      ,twoColor      ,true,  false  ,2,'yes',0,null);
    const I3w=new ball( 0   , 200    ,threeColor    ,true,  false  ,3,'yes',0,null);
    const I4w=new ball( 200 , 200    ,fourColor     ,true  ,false  ,4,'yes',0,null);
    const I5w=new ball( 300 , 100    ,fiveColor     ,true  ,false  ,5,'yes',0,null);

    const O1w=new outt( 200 , 100    ,oneColor     ,true ,true   ,1,'no',1,I1w);
    const O2w=new outt( 200 , 0      ,twoColor     ,true ,true   ,2,'no' ,1 ,I2w);
    const O3w=new outt( 200 , 200    ,threeColor   ,true ,true   ,3, 'no' ,1 ,I3w);
    const O4w=new outt( 300 , 200    ,fourColor    ,true ,true   ,4,'no',1 ,I4w);
    const O5w=new outt( 300 , 100    ,fiveColor    ,true ,true   ,5, 'no' ,1 ,I5w);


    var  ttWin=[ 
      [ null   ,null   ,O2w    ,W2      ],
      [ null   ,null   ,O1w    ,O5w     ],
      [ null   ,W1     ,O3w    ,O4w    ],
    ] 
    var hashedTTWin=hashArray(ttWin)

    allSteps=[]
    allSteps.push(_.cloneDeep(tt))
