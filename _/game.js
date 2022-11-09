
const lodash=require('lodash')
const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");
//من المصفوفة بشوف ازا بيقدر يتحرق ازا اي ببعتو عل كانفاس ازا لاء ما بخليه لل اوبجيكت ياخد ترو بل رايت بريسسيد 
// var tt  = [];
function log(params) {
  console.log(params)
  
}
var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;
document.body.addEventListener("keyup", keyDown);
function keyDown(event) {
        //log array 
        

        //up     
        if (event.keyCode == 38) {
        
          for (let X = 0; X < tt.length; X++) {
            for (let Y = 0; Y < tt[X].length; Y++) {


                if(  tt[X][Y]==null ||  tt[X][Y].value=='W'|| tt[X][Y].inBox!=true){
                  console.log(' is wall or null or outBox :');   
                  continue;
                }
                
                if(   +X + -1 ==-1 ){
                  console.log('يلي فوقي حيط المصفوفة'); 
                  continue;
                }

                if(tt[+X+ -1][Y]!=null){
                if(tt[+X+ -1][Y].value=="W")
                {
                  console.log(' صدم بل والل يلي فوقو :'); 
                  continue;
                }
              
              }

                if(tt[+X+ -1][Y]!=null){
                    if( tt[+X+ -1][Y].movee=='yes' )
                    {
                      console.log(tt[X][Y] ,X,Y, 'انصدم بيلي فوقو ');
                      continue;
                    }

                   
                }
                
                if(tt[X][Y].sleep==1)
                {
                
                  // console.log(tt[X][Y].color, ' move ');
                 
                             
                 
                  if(tt[X][Y].inBox==true &&tt[X][Y].outBox==true){


                    tt[X][Y].upPressed=true
                    tt[X][Y].sleep=0


                    console.log(tt[X][Y].number_inside.color,'تطليع الاوبجيكت عل لفوق ');
                    // I1.x=200
                    console.log(tt[X][Y].number_inside);
                    tt[+X+ -1][Y]=tt[X][Y].number_inside;
                    tt[+X+ -1][Y].y-=100
                    // tt[+X+ +1][Y].upPressed=true

                    tt[X][Y].number_inside=null;
                    tt[X][Y].inBox=false;
                    if(tt[+X+ -1][Y]!=null){
                      // console.log(213);
                      tt[+X+ -1][Y].sleep=0
                    }      
                    continue;
                  }//2

                  if(tt[+X+ -1][Y].number_inside!=null ){
                    console.log('يلي فوق اوت بوكس بس معبى  :'); 
                    continue;
                  }
                  tt[X][Y].upPressed=true
                  tt[X][Y].sleep=0
                  console.log(tt[X][Y].color, ' move ');

                  if(tt[+X+ -1][Y]!=null){
                  if(tt[+X+ -1][Y].outBox==true){
                    tt[+X+ -1][Y].number_inside=tt[X][Y]
                    tt[+X+ -1][Y].inBox=true
                    tt[X][Y]=null
                    if(tt[+X+ -1][Y]!=null){
                      // console.log(213);
                      tt[+X+ -1][Y].sleep=0
                    }      
                  }
                  continue;
                  }
                  
                    var swap =   tt[X][Y] ;
                    tt[X][Y]=tt[+X+ -1][Y]
                    tt[+X+ -1][Y]=swap;
                  

               
                }

            }
          
        }

        for (let X = 0; X < tt.length; X++) {
          for (let Y = 0; Y < tt[X].length; Y++) {


              if(  tt[X][Y]==null ||  tt[X][Y].value=='W'|| tt[X][Y].inBox!=true ){
                // console.log('ignore :');
                continue;
              }
              tt[X][Y].sleep=1 

            }
          }

        }
        //down
        if (event.keyCode == 40) {
          for (let X = 0; X < tt.length; X++) {
            for (let Y = 0; Y < tt[X].length; Y++) {


                if(  tt[X][Y]==null ||  tt[X][Y].value=='W'|| tt[X][Y].inBox!=true){
                  console.log(' is wall or null or outBox :');   
                  continue;
                }
                
                if(   +X + +1 ==tt[Y].length  ){
                  console.log('صدم بل حيط  :'); 
                  continue;
                }

                if(tt[+X+ +1][Y]!=null){
                if(tt[+X+ +1][Y].value=="W")
                {
                  console.log(' صدم بل والل يلي تحت :'); 
                  continue;
                }
              
              }

                if(tt[+X+ +1][Y]!=null){
                    if( tt[+X+ +1][Y].movee=='yes' )
                    {
                      console.log(tt[X][Y] ,X,Y, 'انصدم بيلي ع تحتو ');
                      continue;
                    }

                   
                }
                
                if(tt[X][Y].sleep==1)
                {
                
                  // console.log(tt[X][Y].color, ' move ');
                 
                             
                 
                  if(tt[X][Y].inBox==true &&tt[X][Y].outBox==true){


                    tt[X][Y].downPressed=true
                    tt[X][Y].sleep=0


                    console.log(tt[X][Y].number_inside.color,'تطليع الاوبجيكت عل لتحت ');
                    // I1.x=200
                    console.log(tt[X][Y].number_inside);
                    tt[+X+ +1][Y]=tt[X][Y].number_inside;
                    tt[+X+ +1][Y].y+=100
                    // tt[+X+ +1][Y].downPressed=true

                    tt[X][Y].number_inside=null;
                    tt[X][Y].inBox=false;
                    if(tt[+X+ +1][Y]!=null){
                      // console.log(213);
                      tt[+X+ +1][Y].sleep=0
                    }      
                    continue;
                  }//2

                  if(tt[+X+ +1][Y].number_inside!=null ){
                    console.log('يلي تحت اوت بوكس بس معبى  :'); 
                    continue;
                  }
                  tt[X][Y].downPressed=true
                  tt[X][Y].sleep=0
                  console.log(tt[X][Y].color, ' move ');

                  if(tt[+X+ +1][Y]!=null){
                  if(tt[+X+ +1][Y].outBox==true){
                    tt[+X+ +1][Y].number_inside=tt[X][Y]
                    tt[+X+ +1][Y].inBox=true
                    tt[X][Y]=null
                    if(tt[+X+ +1][Y]!=null){
                      // console.log(213);
                      tt[+X+ +1][Y].sleep=0
                    }      
                  }
                  continue;
                  }
                  
                    var swap =   tt[X][Y] ;
                    tt[X][Y]=tt[+X+ +1][Y]
                    tt[+X+ +1][Y]=swap;
                  

               
                }

            }
          
        }

        for (let X = 0; X < tt.length; X++) {
          for (let Y = 0; Y < tt[X].length; Y++) {


              if(  tt[X][Y]==null ||  tt[X][Y].value=='W'|| tt[X][Y].inBox!=true ){
                // console.log('ignore :');
                continue;
              }
              tt[X][Y].sleep=1 

            }
          }
        }
        //left
        if (event.keyCode == 37) {
          // leftPressed = true;
          for (let X = 0; X < tt.length; X++) {
            for (let Y = 0; Y < tt[X].length; Y++) {


                if(  tt[X][Y]==null ||  tt[X][Y].value=='W'|| tt[X][Y].inBox!=true){
                  console.log('ignore :');   
                  continue;
                }
                
                if(   +Y + -1 ==-1  ){
                  console.log('صدم بل حيط  :'); 
                  continue;
                }

              

                
                if(tt[X][+Y + -1]!=null){
                    if( tt[X][+Y + -1].movee=='yes' )
                    {
                      console.log(tt[X][Y] ,X,Y, 'انصدم بيلي ع يساروو ');
                      continue;
                    }
                }
                if(tt[X][+Y + -1]!=null){
                  if(tt[X][+Y + -1].value=="W")
                  {
                    console.log(' صدم بل والل يلي يسار :'); 
                    continue;
                  }
                
                }
                
                if(tt[X][Y].sleep==1)
                {
                
                  // console.log(tt[X][Y].color, ' move ');
                  
                             
                 
                  if(tt[X][Y].inBox==true &&tt[X][Y].outBox==true){
                    tt[X][Y].leftPressed=true
                  tt[X][Y].sleep=0
                    console.log(tt[X][Y].number_inside.color,'تطليع الاوبجيكت عل يسار ');
                    // I1.x=200
                    console.log(tt[X][Y].number_inside);
                    tt[X][+Y + -1]=tt[X][Y].number_inside;
                    tt[X][+Y + -1].x-=100
                    tt[X][+Y + -1].leftPressed

                    tt[X][Y].number_inside=null;
                    tt[X][Y].inBox=false;
                    if(tt[X][+Y + -1]!=null){
                      // console.log(213);
                      tt[X][+Y + -1].sleep=0
                    }      
                    continue;
                  }//2

                  if(tt[X][+Y + -1].number_inside!=null ){
                    console.log('يلي عل يسار اوت بوكس بس معبى  :'); 
                    continue;
                  }

                  tt[X][Y].leftPressed=true
                  tt[X][Y].sleep=0
                  console.log(tt[X][Y].color, ' move ');

                  if(tt[X][+Y + -1]!=null){
                  if(tt[X][+Y + -1].outBox==true){
                    //تفويت البوكس جوات اوبيكت الاوت بوكس
                    tt[X][+Y + -1].number_inside=tt[X][Y]
                    tt[X][+Y + -1].inBox=true
                    tt[X][+Y]=null
                    if(tt[X][+Y + -1]!=null){
                      // console.log(213);
                      tt[X][+Y + -1].sleep=0
                    }      
                  }
                  continue;
                  }
                  
                    var swap =   tt[X][Y] ;
                    tt[X][Y]=tt[X][+Y + -1]
                    tt[X][+Y + -1]=swap;
                  

               
                }

            }
          
        }

        for (let X = 0; X < tt.length; X++) {
          for (let Y = 0; Y < tt[X].length; Y++) {


              if(  tt[X][Y]==null ||  tt[X][Y].value=='W'|| tt[X][Y].inBox!=true ){
                // console.log('ignore :');
                continue;
              }
              tt[X][Y].sleep=1 

            }
          }
        }
        //right
        if (event.keyCode == 39) {
       
          for (let X = 0; X < tt.length; X++) {
              for (let Y = 0; Y < tt[X].length; Y++) {


                  if(  tt[X][Y]==null ||  tt[X][Y].value=='W'|| tt[X][Y].inBox!=true|| tt[X][Y].value=='W'){
                    console.log('ignore :');   
                    continue;
                  }
                  
                  if(   +Y + 1 ==tt[X].length  ){
                    console.log('صدم بل حيط  :'); 
                    continue;
                  }

                

                  
                  if(tt[X][+Y + +1]!=null){
                      if( tt[X][+Y + +1].movee=='yes' )
                      {
                        console.log(tt[X][Y] ,X,Y, 'انصدم بيلي ع يمينو ');
                        continue;
                      }
                  }
                  if(tt[X][+Y + +1]!=null){
                    if(tt[X][+Y + +1].value=="W")
                    {
                      console.log(' صدم بل والل يلي يمين :'); 
                      continue;
                    }
                  
                  }
                  
                  if(tt[X][Y].sleep==1)
                  {
                  
                    // console.log(tt[X][Y].color, ' move ');
                
                               
                   
                    if(tt[X][Y].inBox==true &&tt[X][Y].outBox==true){
                      tt[X][Y].rightPressed=true
                      tt[X][Y].sleep=0
                      console.log(tt[X][Y].number_inside.color,'تطليع الاوبجيكت عل يمين ');
                      // I1.x=200
                      tt[X][+Y + +1]=tt[X][Y].number_inside;
                      tt[X][+Y + +1].x+=100
                      tt[X][+Y + +1].rightPressed
                      tt[X][Y].number_inside=null;
                      tt[X][Y].inBox=false;
                      if(tt[X][+Y + +1]!=null){
                        // console.log(213);
                        tt[X][+Y + +1].sleep=0
                      }      
                      continue;
                    }//2

                    if(tt[X][+Y + +1].number_inside!=null ){
                      console.log('يلي عل يمين اوت بوكس بس معبى  :'); 
                      continue;
                    }

                    console.log(tt[X][Y].color, ' move ');
                    tt[X][Y].rightPressed=true
                    tt[X][Y].sleep=0

                    if(tt[X][+Y + +1]!=null){
                    if(tt[X][+Y + +1].outBox==true){
                      tt[X][+Y + +1].number_inside=tt[X][Y]
                      tt[X][+Y + +1].inBox=true
                      tt[X][+Y]=null
                      if(tt[X][+Y + +1]!=null){
                        // console.log(213);
                        tt[X][+Y + +1].sleep=0
                      }      
                    }
                    continue;
                    }
                    
                      var swap =   tt[X][Y] ;
                      tt[X][Y]=tt[X][+Y + +1]
                      tt[X][+Y + +1]=swap;
                    

                 
                  }

              }
            
          }

          for (let X = 0; X < tt.length; X++) {
            for (let Y = 0; Y < tt[X].length; Y++) {


                if(  tt[X][Y]==null ||  tt[X][Y].value=='W'|| tt[X][Y].inBox!=true ){
                  // console.log('ignore :');
                  continue;
                }
                tt[X][Y].sleep=1 

              }
            }
          


      }
      if(event.keyCode == 39 ||event.keyCode == 37||event.keyCode == 40||event.keyCode == 38){
      var lastStep=lodash.cloneDeep(tt);
      allSteps.push(lastStep)
    }

      var win =0
      for (let i = 0; i < winArray.length; i++) {
        if(winArray[i].number_inside!=null)
        if(winArray[i].value ==winArray[i].number_inside.value )
        win++;
        
      }
      if(win==winArray.length){
        $('#win').css('display','block')
        log('dn dn dn dn dn dn we have winnerrrrrrrrrrrrr')
      }
      if(event.keyCode==69)
      {
        log(allSteps)
      }
      else{

        console.log(tt);
      }
}
  
function clearScreen() {
    ctx.fillStyle = "#b7aea5";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}


class ball{

    constructor(x, y,color,inBox,outBox ,value,movee, sleep=1 , number_inside=null) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.inBox=inBox;
      this.outBox=outBox;
      
      this.value=value
      this.movee=movee;
      this.sleep=sleep;
      this.number_inside=number_inside;
               
      this.speed = 100;

      this.upPressed   = false;
      this.downPressed = false;
      this.leftPressed = false;
      this.rightPressed = false;
    }


 
    draw() {
      
      ctx.beginPath();

      // ctx.font="30px Comic Sans MS";
      // ctx.fillStyle = this.color;
      // ctx.textAlign = "center";
      // ctx.fillText(this.value, this.x, this.y);
      
      ctx.fillStyle = this.color;
      ctx.rect(this.x, this.y, 100, 100);
      ctx.fill();
    }
    inputs() {

      if(this.inBox){

          if (this.upPressed) {
            this.y = this.y - this.speed;
            this.upPressed=false
          }

          else if (this.downPressed) {
            this.y = this.y + this.speed;
            this.downPressed=false
          }

          else if (this.leftPressed) {
            this.x = this.x - this.speed;
            this.leftPressed=false

          }
          else if (this.rightPressed) {
            this.x = this.x + this.speed;
            this.rightPressed=false;
          }
      }
    
    }

    boundryCheck() {
      //up
      if (this.y <0) {
        this.y = 0;
      }
      //down
      if (this.y > canvas.height-100 ) {
        this.y = canvas.height -100;
      }
      //left
      if (this.x < 0 ) {
        this.x = 0  ;
      }
      //right
      if (this.x > canvas.width -100 ) {
        this.x = canvas.width -100;
      }
    }
}


const I1=new ball( 0,  0    ,"blue"     ,true,  false  ,1,'yes');
const I2=new ball( 0,200    ,"red"      ,true,  false  ,2,'yes');
const O1=new ball( 100,200  ,"#0090FF"  ,false ,true   ,1,'no');
const O2=new ball( 100, 0   ,"#ff7000"  ,false ,true   ,2,'no');

const W1= new ball (0,100,'gray',false,  'wall','W','no')
const W2= new ball (200,100,'gray',false,'wall','W','no')
winArray=[O1,O2];

var stop=0
// log(winnn)

tt=[ 
  [ I1 ,  O2   , null ],
  [ W1 ,  null , W2   ],
  [ I2 ,  O1   , null ],
] 
allSteps=[]
allSteps.push(lodash.cloneDeep(tt))

// const start2=new ball(0 ,0 ,"red",true,2);
// const end2=new ball( 100,300 ,"#ff4000",false,2);

function drawGame() {
  
  // if(stop!=1)
  clearScreen();
  requestAnimationFrame(drawGame);


 
  I1.draw();
  I1.inputs();

  I2.draw();
  I2.inputs();

   
  O1.draw();
  O2.draw();
  W1.draw();
  W2.draw();


    


}    



drawGame();
// constructor(x, y,color,inBox ,value,movee, sleep=1) 


// console.log(q)

// class Stracture {
//   constructor(initArray , finalArray  ,){}
// }