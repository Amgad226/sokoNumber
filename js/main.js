
  const canvas = document.getElementById("gameArea");
  const ctx = canvas.getContext("2d");
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

    
    // ctx.opacityStyle = 0.1;
//     if(this.movee=='yes'){
//     var grd = ctx.createLinearGradient(0, 0, 100, 0);
//     grd.addColorStop(0, "white");
//     grd.addColorStop(1, this.color);
//     ctx.fillStyle = grd;
//   }
// else{
//     ctx.fillStyle = this.color;
//   }
  ctx.fillStyle = this.color;

    ctx.rect(this.x, this.y, 100, 100);
    ctx.fill();

    ctx.fillStyle = 'black';
    ctx.font = "30px Arial";
    ctx.fillText(this.value, this.x+40, this.y+50);
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

              if(tt[+X+ -1][Y]!=null ){
                if(tt[+X+ -1][Y].number_inside!=null ){
                console.log('يلي فوق اوت بوكس بس معبى  :'); 
                continue;
                }
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
            // alert(X)
           
            if(   +X + +1 ==tt.length  ){
              console.log(' يلي تحتي  حيط المصفوفة'); 
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

              if(tt[+X+ +1][Y]!=null ){
                if(tt[+X+ +1][Y].number_inside!=null ){
                console.log('يلي تحت اوت بوكس بس معبى  :'); 
                continue;
              }
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

              if(tt[X][+Y + -1]!=null ){
                if(tt[X][+Y + -1].number_inside!=null ){
                console.log('يلي عل يسار اوت بوكس بس معبى  :'); 
                continue;
              }}

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

                if(tt[X][+Y + +1]!=null ){
                    if(tt[X][+Y + +1].number_inside!=null ){
                  console.log('يلي عل يمين اوت بوكس بس معبى  :'); 
                  continue;
                }}

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
//   if(event.keyCode == 39 ||event.keyCode == 37||event.keyCode == 40||event.keyCode == 38){
//   var lastStep=lodash.cloneDeep(tt);
//   allSteps.push(lastStep)
// }

  var win =0
  for (let i = 0; i < winArray.length; i++) {
    if(winArray[i].number_inside!=null)
    if(winArray[i].value ==winArray[i].number_inside.value )
    win++;
    
  }
  if(win==winArray.length){
    $('#win').css('display','block')
    console.log('dn dn dn dn dn dn we have winnerrrrrrrrrrrrr')
  }
  if(event.keyCode==69)
  {
    console.log(allSteps)
  }
  else{

    console.log(tt);
  }
}