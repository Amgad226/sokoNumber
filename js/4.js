    var tt  = [];

    document.body.addEventListener("keyup", keyDown);
    document.body.addEventListener("keyup", function(event){
      if(event.keyCode == 39 ||event.keyCode == 37||event.keyCode == 40||event.keyCode == 38){
        var lastStep=_.cloneDeep(tt);
        allSteps.push(lastStep)
      }
    });
    
    const I1=new ball( 0,  0    ,"blue"     ,true,  false  ,1,'yes');
    const I2=new ball( 200,0    ,"red"      ,true,  false  ,2,'yes');
    const I3=new ball( 400,0    ,"green"      ,true,  false  ,3,'yes');
    const O1=new ball( 400,100  ,"gray"  ,false ,true   ,1,'no');
    const O2=new ball( 200, 100 ,"gray"  ,false ,true   ,2,'no');
    const O3=new ball( 0, 100   ,"gray"  ,false ,true   ,3,'no');
   
    
    const W1= new ball (100,0,  '#222',false,  'wall','','no')
    const W2= new ball (300,0,  '#222',false,'wall'  ,'','no')
    const W3= new ball (0,200,  '#222',false,'wall'  ,'','no')
    const W4= new ball (100,200,'#222',false,'wall','','no')
    const W5= new ball (300,200,'#222',false,'wall','','no')
    const W6= new ball (400,200,'#222',false,'wall','','no')
    winArray=[O1,O2,O3];
    
    var stop=0
    ArrayTostoreNextState=[]; //to add  nextState array 
    
    tt=[ 
      [ I1   ,W1    ,I2    ,W2    ,I3   ],
      [ O3   ,null  ,O2    ,null  ,O1   ],
      [ W3   ,W4    ,null  ,W5    ,W6   ],
 
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
    
    }    

    drawGame();    
