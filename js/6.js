
    var tt  = [];
    function log(params) {
      console.log(params) 
    }
    
    document.body.addEventListener("keyup", keyDown);
    document.body.addEventListener("keyup", function(event){
      if(event.keyCode == 39 ||event.keyCode == 37||event.keyCode == 40||event.keyCode == 38){
        var lastStep=_.cloneDeep(tt);
        allSteps.push(lastStep)
      }
    });

    //                 x:  y:        color:     in:    out    v: mo: sleep obj
    const I2=new ball( 200 , 0      ,"red"      ,true, false   ,2,'yes');
    const I5=new ball( 300 , 100    ,"#308576"  ,true  ,false  ,5,'yes');
    const I4=new ball( 200 , 200    ,"#444576"  ,true  ,false  ,4,'yes');

    const O2=new ball( 200 , 0      ,"gray"     ,true ,true   ,2, 'no' ,1 ,I2);
    const O3=new ball( 200 , 200    ,"gray"     ,true ,true   ,3, 'no' ,1 ,I4);
    const O5=new ball( 300 , 100    ,"gray"     ,true ,true   ,5, 'no' ,1 ,I5);
                    
   
    const I1=new ball( 100 , 100    ,"blue"     ,true,  false  ,1,'yes');
    const O1=new ball( 200 , 100    ,"gray"     ,false ,true   ,1,'no');
    
    const I3=new ball( 0   , 200    ,"green"    ,true,  false  ,3,'yes');
    const O4=new ball( 300 , 200    ,"gray"     ,false ,true   ,4,'no');



    
    // const w= new ball (0  ,0,'#222',false,    'wall', '','no')
    const w1= new ball (100,200,'#222',false, 'wall', '','no')
    const w2= new ball (300 ,0,'#222',false,  'wall', '','no')


    winArray=[O1,O2,O3,O4,O5];
    
    var stop=0
    // log(winnn)
ArrayTostoreNextState=[]; //to add  nextState array 
    
    tt=[ 
      [ null   ,null   ,O2    ,w2      ],
      [ null   ,I1     ,O1    ,O5     ],
      [ I3     ,w1     ,O3    ,O4    ],
    ] 
  

    allSteps=[]
    allSteps.push(_.cloneDeep(tt))
    O5.winColor();
    O4.winColor();
    O3.winColor();
    O2.winColor();
    O1.winColor();
    get_next_state()


    function clearScreen() {
      ctx.fillStyle = "#b7aea5";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    } 
    function drawGame() {
      
      clearScreen();
      requestAnimationFrame(drawGame);

      O5.draw();
      O4.draw();
      O3.draw();
      O2.draw();
      O1.draw();

      w1.draw();
      w2.draw();

      I1.draw();
      I2.draw();
      I3.draw();
      I4.draw();
      I5.draw();
    }    
    drawGame();
    