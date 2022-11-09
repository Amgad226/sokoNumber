

const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");
//من المصفوفة بشوف ازا بيقدر يتحرق ازا اي ببعتو عل كانفاس ازا لاء ما بخليه لل اوبجيكت ياخد ترو بل رايت بريسسيد 
var tt  = [];

var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;
document.body.addEventListener("keyup", keyDown);
function keyDown(event) {
      //up     
      // name()
        if (event.keyCode == 38) {
        
          upPressed = true;

        }
        //down
        if (event.keyCode == 40) {
          downPressed = true;
        }
        //left
        if (event.keyCode == 37) {
          leftPressed = true;
        }
      
        //right
        if (event.keyCode == 39) {
          // console.log(+1 + -1);
          
          // for (let key =  tt.length -1; key>=0; key--) {
            for (let key = 0; key < tt.length; key++) {
          // for (const key in tt){
            // console.log(key) ;
            
             if(tt[key] !=null){
                    // console.log(tt[key].color+' /رق عليه') ;

                  if (tt[key].sleep!=1) {
                    // console.log('الحجر تحرك  مرة ما عاد يكمل للابد');
                    continue;
                  }

                  if (tt[key].movee!='yes') {
                    // console.log('ما بيقدر يمشي');
                    continue;
                  }
  
                  if(tt[+key + +1].movee=='yes'){
                    console.log(tt[key].color + ' انصدم بلي قدامو   ');
                     continue;
                  }
  
                  if(tt[+key].state==tt[+key + +1].state){
                    tt[key].rightPressed=true

                    tt[+key + +1]= tt[+key];
                    tt[+key]=null2
                    // console.log('winner');
                  }
                  
                  else {
                      console.log(tt[key].color + ' move ');
                      tt[key].rightPressed=true
                      var swap =   tt[+key] ;
                      tt[+key]=tt[+key + +1]
                      tt[+key + +1]=swap;
                      tt[+key + +1].sleep=0
                      // console.log(key);
                      // break;
                  }
              }
          }
          for (let key = 0; key < tt.length; key++) {
            tt[key].sleep=1
            
          }
  
          // rightPressed = true;
      }
      console.log(tt);

}
  
 
function clearScreen() {
    ctx.fillStyle = "#b7aea5";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
var array = [] 
class Null{
  constructor(x, y,state,movee) {
    this.state=state
        this.x = x;
        this.y = y;
        this.movee=movee;

}
}
class ball{

    constructor(x, y,color,block ,state,movee, sleep=1) {
      this.state=state
        this.x = x;
        this.y = y;
       this.ignoreX=[]
       this.ignoreY=[]
        this.color = color;
        this.block=block;
        this.movee=movee;
        this.sleep=sleep;
        
        this.speed = 100;

        this.upPressed   = false;
        this.downPressed = false;
        this.leftPressed = false;
        this.rightPressed = false;
    }
    blockY(){
      // console.log( this.ignoreY[i])
      for(var i in array ){
        if(array[i]==this)
        continue;
        this.ignoreY[i]=array[i].y
      }
    }
    blockX(){
      for(var i in array ){
        if(array[i]==this)
        continue;
        this.ignoreX[i]=array[i].x
      }
    }
    move(){
      this.upPressed   =upPressed   
      this.downPressed =downPressed 
      this.leftPressed =leftPressed 
      // this.rightPressed=rightPressed
    }
    draw() {
      
      ctx.beginPath();

      ctx.font="30px Comic Sans MS";
      ctx.fillStyle = this.color;
      ctx.textAlign = "center";
      ctx.fillText(this.state, this.x, this.y);
      
      ctx.fillStyle = this.color;
      ctx.rect(this.x, this.y, 100, 100);
      ctx.fill();
    }
    inputs() {

      if(this.block){

     

          if (this.upPressed) {
            var U = 0 

            // console.log(this.y)
           
            if(U==0)
            {
              this.y = this.y - this.speed;
              upPressed=false
            }

          }
          else if (this.downPressed) {
            this.y = this.y + this.speed;
          downPressed=false

          }
          else if (this.leftPressed) {
            this.x = this.x - this.speed;
          leftPressed=false

          }
          else if (this.rightPressed) {
       
              this.x = this.x + this.speed;
              this.rightPressed=false;
              rightPressed=false
            


          

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

$('.log').on('click',function(){console.log(tt)})

//game loop
const start1=new ball( 400,  300   ,"blue"   ,true ,1,'yes');
const start2=new ball(100 ,300 ,"red",true,2,'yes');

// const null1  =new Null( 100,300 ,false,'no');
const null2  =new Null( 200,300 ,false,'no');
const null3  =new Null( 300,300 ,false,'no');
const end1  =new ball( 400,300 ,"#0070ff",false,1,'no');

// tt={start1,null1,null2,null2,end1}
tt.push(start1);
tt.push(start2);
tt.push(null2);
tt.push(null2);
tt.push(end1);

// const start2=new ball(0 ,0 ,"red",true,2);
// const end2=new ball( 100,300 ,"#ff4000",false,2);
array.push(start1)
  array.push(start2)
function drawGame() {

  
  // array.push(start2)
if(
  start1.x==end1.x&&start1.y==end1.y 
  // &&
  // start2.x==end2.x&&start2.y==end2.y
  ){
  $('#h1').css('color','green');
  $('#h1').html('winner');
  return;
  // console.log('winner');
  // $('#go').click();
}
// else{
$('#h1').css('background-color','inherit')
  requestAnimationFrame(drawGame);
  clearScreen();
// console.log(start1.rightPressed);
  start1.blockX()
  // 
  start1.blockY()

  start1.move()
  end1.move()

  start2.blockX()
  start2.blockY()
  start2.move()
  start2.boundryCheck();
  start2.draw();
  start2.inputs();



  // end2.move()




  start1.boundryCheck();
  end1.boundryCheck();
  // end2.boundryCheck();
  
  start1.draw();
  end1.draw();
  // end2.draw();

  // if( ! start1.x==start2.x)
  // {
    
    start1.inputs();
  // }
  // else{
  //   console.log(' start1.x'+ start1.x)
  //   console.log(' start2.x'+ start2.x)   
  // }

  // end1.inputs();
  // end2.inputs();

}    


// console.log(start2.ignoreX)

// }
drawGame();
for(var i in array ){
}
// console.log(ball. );

