
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
    
    const I1=new ball( 100 -100,100-100    ,"blue"     ,true,  false  ,1,'yes');
    const I2=new ball( 200 -100,200-100    ,"red"        ,true,  false  ,2,'yes');
    const I3=new ball( 300 -100,300-100    ,"green"      ,true,  false  ,3,'yes');
    const I4=new ball( 400 -100,400-100    ,"#444576"       ,true  ,false   ,4,'yes');
    // const O1=new ball( 100,200  ,"#0090FF"  ,false ,true   ,1,'no');


    const O1=new ball( 100-100,200 -100  ,"gray"    ,false ,true   ,1,'no');
    const O2=new ball( 200-100, 300-100   ,"gray"  ,false ,true   ,2,'no');
    const O3=new ball( 300-100,400 -100  ,"gray"   ,false ,true   ,3,'no');
    const O4=new ball( 400-100,300 -100  ,"gray"     ,false ,true   ,4,'no');
    
    const w1= new ball (0  ,0,'#222',false,    'wall', '','no')
    const w2= new ball (100 ,0,'#222',false,  'wall', '','no')
    const w3= new ball (200 ,0,'#222',false,  'wall', '','no')
    const w4= new ball (300 ,0,'#222',false,'wall'  , '','no')
    const w5= new ball (400 ,0,'#222',false,'wall'  , '','no')
    const w6= new ball (500 ,00,'#222',false,'wall' , '','no')
    const w7= new ball (500 ,100,'#222',false,'wall', '','no')
    const w8= new ball (500 ,200,'#222',false,'wall', '','no')
    const w9= new ball (500 ,300,'#222',false,'wall', '','no')
    const w10= new ball(500 ,500,'#222',false,'wall','','no')
    const w11= new ball(500 ,400,'#222',false,'wall','','no')
    const w13= new ball(400 ,500,'#222',false,'wall', '','no')
    const w14= new ball(300 ,500,'#222',false,'wall', '','no')
    const w15= new ball(200 ,500,'#222',false,'wall', '','no')
    const w16= new ball(100 ,500,'#222',false,'wall', '','no')
    const w17= new ball(0,500,'#222',false,'wall',   '','no')
    const w19= new ball(0,400,'#222',false,'wall',   '','no')
    const w20= new ball(0,300,'#222',false,'wall',   '','no')
    const w21= new ball(0,200,'#222',false,'wall',   '','no')
    const w22= new ball(0,100,'#222',false,'wall',   '','no')

    const w23= new ball(200-100,100-100,'#222',false,'wall', '','no')
    const w24= new ball(300-100,100-100,'#222',false,'wall', '','no')
    const w25= new ball(400-100,100-100,'#222',false,'wall', '','no')
    const w26= new ball(300-100,200-100,'#222',false,'wall', '','no')

    winArray=[O1,O2,O3,O4];
    
    var stop=0
    // log(winnn)
    ArrayTostoreNextState=[]; //to add  nextState array 
    
    tt=[ 
      [ w1    ,w2      ,w3    ,w4      ,w5     ,w6   ],
      [ w22   ,I1      ,w23   ,w24     ,w25    ,w7   ],
      [ w21   ,O1      ,I2    ,w26     ,null   ,w8   ],
      [ w20   ,null    ,O2    ,I3      ,O4     ,w9   ],
      [ w19   ,null    ,null  ,O3      ,I4     ,w11  ],
      [ w17   ,w16     ,w15   ,w14     ,w13    ,w10  ],
 
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
      
      O4.draw();
      O3.draw();
      O2.draw();
      O1.draw();

      // w1.draw();
      // w2.draw();
      // w3.draw();
      // w4.draw();
      // w5.draw();
      // w6.draw();
      // w7.draw();
      // w8.draw();
      // w9.draw();
      // w10.draw();
      // w11.draw();
      // w13.draw();
      // w14.draw();
      // w15.draw();
      // w16.draw();
      // w17.draw();
      // w19.draw();
      // w20.draw();
      // w21.draw();
      // w22.draw();

      w23.draw();
      w24.draw();
      w25.draw();
      w26.draw();
      // w24.draw();
      I1.draw();
      I2.draw();
      I3.draw();
      I4.draw();
    
        
    
    
    }    
    
    
    
    drawGame();
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
  