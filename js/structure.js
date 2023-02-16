
  

var enableLog=false;
$('.logMessage').on('click',function(){
  if(enableLog)
  enableLog=false;
  else
  enableLog=true;
});
var oneColor=  'blue'
var twoColor=  'purple'
var threeColor='#fe2d81'
var fourColor= 'black'
var fiveColor= 'brown'

const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");
function clearScreen() {
  ctx.fillStyle = "#b7aea5";
  ctx.fillStyle ="rgba(183, 174, 165, 0.2)"

  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// const canvas2 = document.getElementById("gameArea2");
// const ctx2 = canvas2.getContext("2d");
const image = new Image(); 
image.src = "../img/wall.png";

const outB = new Image(); 
outB.src = "../img/in1.jpg";

const inB = new Image(); 
inB.src = "../img/out1.jpg";

function drowTT(array=tt){
  for (let X = 0; X < array.length; X++) {
    for (let Y = 0; Y < array[X].length; Y++) {
        ctx.beginPath();
            if(array[X][Y]!=null){

            
            if(array[X][Y].value=="")
               ctx.drawImage(image,array[X][Y].x,array[X][Y].y,100,100);
            
            else if(array[X][Y].inBox==true)
              ctx.drawImage(inB,array[X][Y].x,array[X][Y].y,100,100);
            
            else if(array[X][Y].inBox!=true)
              ctx.drawImage(outB,array[X][Y].x,array[X][Y].y,100,100);
            
            
            else{
              ctx.fillStyle = array[X][Y].color;
              ctx.rect(array[X][Y].x, array[X][Y].y, 100, 100);
                ctx.fill();
            }
          
            if(array[X][Y].value!=""){
              ctx.fillStyle = array[X][Y].color;
              ctx.rect(0+array[X][Y].x, array[X][Y].y, 10, 50);
                ctx.fill();
            }
          
              ctx.fillStyle = array[X][Y].color;
              ctx.font = "30px Arial";
              ctx.fillText(array[X][Y].value, array[X][Y].x+40, array[X][Y].y+50);

                }      
          }
      }
}
// function drowArray(array){
//   for (let X = 0; X < array.length; X++) {
//     for (let Y = 0; Y < array[X].length; Y++) {
//       if(array[X][Y]!=null){
        
//         ctx2.beginPath();
            
//             if(array[X][Y].value=="")
//                ctx2.drawImage(image,array[X][Y].x,array[X][Y].y,100,100);
            
//             else if(array[X][Y].inBox==true)
//               ctx2.drawImage(inB,array[X][Y].x,array[X][Y].y,100,100);
            
//             else if(array[X][Y].inBox!=true)
//               ctx2.drawImage(outB,array[X][Y].x,array[X][Y].y,100,100);
            
            
//             else{
//               ctx2.fillStyle = array[X][Y].color;
//               ctx2.rect(array[X][Y].x, array[X][Y].y, 100, 100);
//                 ctx2.fill();
//             }
          
//             if(array[X][Y].value!=""){
//               ctx2.fillStyle = array[X][Y].color;
//               ctx2.rect(0+array[X][Y].x, array[X][Y].y, 10, 50);
//                 ctx2.fill();
//             }
          
//               ctx2.fillStyle = array[X][Y].color;
//               ctx2.font = "30px Arial";
//               ctx2.fillText(array[X][Y].value, array[X][Y].x+40, array[X][Y].y+50);

//                 }      
//           }
//       }
// }

class ball{
  
  constructor(x, y,color,inBox,outBox ,value,movee, sleep=1 , number_inside=null) {
    // this.perant;
    this.x = x;
    this.y = y;
    this.color = color;
    this.mainColor=color;
    this.inBox=inBox;
    this.outBox=outBox;
    
    this.value=value
    this.movee=movee;
    this.sleep=sleep;
    this.number_inside=number_inside;
    this.ball= true
  }

  draw() {
    
    ctx.beginPath();

    if(this.value=="")
       ctx.drawImage(image,this.x,this.y,100,100);

    else if(this.inBox==true)
      ctx.drawImage(inB,this.x,this.y,100,100);
  
    else if(this.inBox!=true)
      ctx.drawImage(outB,this.x,this.y,100,100);

  
    else{
      ctx.fillStyle = this.color;
      ctx.rect(this.x, this.y, 100, 100);
        ctx.fill();
    }

    if(this.value!=""){
      ctx.fillStyle = this.color;
      ctx.rect(0+this.x, this.y, 10, 50);
        ctx.fill();
    }

      ctx.fillStyle = this.color;
      ctx.font = "30px Arial";
      ctx.fillText(this.value, this.x+40, this.y+50);

      this.winColor()
  }

  winColor(){
    if(this!=null)
    {
      this.color=this.mainColor
      if(this.number_inside!=null)
      {
        if(this.value ==this.number_inside.value ){
          // alert()

          // this.number_inside.color='green';
          // this.number_inside.mainColor='green';
        }
        else{
          this.number_inside.color='red';
          this.number_inside.mainColor='red';

        }
       
      }
    }
  }

  cheack_move_up(array,arrayName,X,Y){

    if(  this==null ||  this.outBox=='wall'|| this.inBox!=true)
      return [false,' is wall or null or outBox :'];
    
    if(   +X + -1 ==-1 )
      return [false,'يلي فوقي حيط المصفوفة'];
    

    if(array[+X+ -1][Y]!=null){
    if(array[+X+ -1][Y].outBox=="wall")
      return [false,' صدم بل والل يلي فوقو :'];
    }

    if(array[+X+ -1][Y]!=null){
        if( array[+X+ -1][Y].movee=='yes'||( array[X + -1][+Y].inBox==true&&array[X + -1][+Y].outBox==true)  )
          return [false ,this +'انصدم بيلي فوقو '];
    }
    
    if(this.sleep!=1)
      return [false ,this + ' .sleep ==0'];
    
      return [true , ''] 

  }
  cheack_move_down(array,arrayName,X,Y){
    
    if(  this==null ||  this.outBox=='wall'|| this.inBox!=true)
      return [false , 'is wall or null or outBox:']

    if( +X + +1 ==array.length  )
      return [false , ' يلي تحتي  حيط المصفوفة']
    

    if(array[+X+ +1][Y]!=null){
      if(array[+X+ +1][Y].outBox=='wall')
        return [false , ' صدم بل والل يلي تحت :']
      }

    if(array[+X+ +1][Y]!=null){
        if( array[+X+ +1][Y].movee=='yes'||( array[X + +1][+Y].inBox==true&&array[X + +1][+Y].outBox==true) )
          return [false ,'انصدم بيلي ع تحتو ' ] 
    }
    
    if(this.sleep!=1)
      return [false ,this+' .sleep ==0' ]
    
      return [true , ''] 
  }
  cheack_move_right(array,arrayName,X,Y){
    
    if(  this==null ||  this.outBox=='wall'|| this.inBox!=true)
          return [false , 'is wall or null or outBox:']

    if(   +Y + 1 ==array[X].length  )
          return [false , ' يلي ع يميني  حيط المصفوفة']


    if(array[X][+Y + +1]!=null){

        if( array[X][+Y + +1].movee=='yes'||( array[X][+Y + +1].inBox==true&&array[X][+Y + +1].outBox==true) )
        return [false ,'انصدم بيلي ع يمينو ' ] 
    }
    
    if(array[X][+Y + +1]!=null){
      if(array[X][+Y + +1].outBox=='wall')
         return [false , ' صدم بل والل يلي ع يمينو :']
    }
    
    if(this.sleep!=1)
       return [false ,this+' .sleep ==0' ]
    
       
    return [true , ''] 
    
    
      

  }
  move_row(array,arrayName,X,Y,dir,checkmove=true){
    // console.log('------------------------------------------------------------')
  

    if(dir==-1){
      if(checkmove=true){
      var cheack=array[X][Y].cheack_move_left(array,arrayName,X,Y);
      if(cheack[0]==false){
        if(enableLog)
        console.log(cheack[1])
        return;
      }    
     } 
      var direction= 'left';

    }
    else if(dir==1){
      if(checkmove=true){
      var cheack=array[X][Y].cheack_move_right(array,arrayName,X,Y);
      if(cheack[0]==false){
        if(enableLog)
        console.log(cheack[1])
        return;
      }
    }
      var direction= 'right';

    }

// console.log(direction,' move row ');

               if(this.inBox==true &&this.outBox==true){
          // alert(1)
                // ازا كنت عم اسحب من اوتبوكس وحط ب اوت بوكس
                if(array[X][+Y + dir]!=null){
                  // alert('\n X:'+X +' Y:'+Y+' \n'+array[X][Y].value+'\n outBox: ' +array[X][Y].outBox +'\n inBox: ' +array[X][Y].inBox +'\n color: '+array[X][Y].color)
                   if(array[X][+Y + dir].outBox==true)
                   {
                    if(array[X][+Y + dir].number_inside!=null ){
                      if(enableLog)
                      console.log(`يلي جنبي اوتبوكس ومفلل`); 
                      return;
                    }

                    array[X][+Y + +dir].number_inside=array[X][Y].number_inside;
                    // if(arrayName=='tt')
                    array[X][+Y ].number_inside.x+=(100*dir)

                    array[X][Y].number_inside=null;
                    array[X][+Y + dir].inBox=true
                    array[X][+Y ].inBox=false
                    array[X][+Y + dir].sleep=0
                    array[X][Y].sleep=0
                  // return this; 

                    return;
                  }
                }
                  if(enableLog)
                  console.log(array[X][Y].number_inside.color,'take out object row'+dir);
                
                  array[X][+Y + dir]=array[X][Y].number_inside;

                  // if(arrayName=='tt')
                  array[X][+Y + dir].x+=(100*dir)

                  // array[X][+Y + dir].rightPressed=true
                  array[X][Y].number_inside=null;
                  array[X][Y].inBox=false;
                  if(array[X][+Y + dir]!=null){
                 
                    array[X][+Y + dir].sleep=0
                  }      
                  // return this; 

                  return;
                }//2

                // out box cant have more than one inbox
                if(array[X][+Y + dir]!=null ){
                    if(array[X][+Y + dir].number_inside!=null ){
                        if(enableLog)
                       console.log(`on the row ${direction} is outBox but is full`); 
                       return;
                    }
                }
                
                if(enableLog)
                console.log(this.color, ` move to row ${direction}  `);

                // if(arrayName=='tt')
                array[X][Y].x+=(100*dir)
              
              this.sleep=0



                //entry inBox to outBox
                if(array[X][+Y + dir]!=null){

                    if(array[X][+Y + dir].outBox==true &&array[X][+Y + dir].number_inside==null){
                      array[X][+Y + dir].number_inside=array[X][Y]
                      array[X][+Y + dir].inBox=true
                      array[X][+Y]=null
                      if(array[X][+Y + dir]!=null){
                         array[X][+Y + dir].sleep=0
                      }      
                    }
                    return;
                }
                  
                  //swap if _inBox and NULL
                  var swap =   this ;
                  array[X][Y]=array[X][+Y + dir]
                  array[X][+Y + dir]=swap;
                  return ; 
                


  }
  move_column(array,arrayName,X,Y,dir){
   

    if(dir==+1){

      var cheack=array[X][Y].cheack_move_down(array,arrayName,X,Y);
      if(cheack[0]==false){
        if(enableLog)
        console.log(cheack[1])
        return;
      }

      var direction= 'down';
    }
    else if(dir==-1){

      var cheack=array[X][Y].cheack_move_up(array,arrayName,X,Y);
      // return;
      if(cheack[0]==false){
        // alert(22)
        if(enableLog)
        console.log(cheack[1])
        return;
      }

      var direction= 'Up';
    }
    // console.log(dir);
  
// console.log(direction);
   




    if( array[X][Y].inBox==true && array[X][Y].outBox==true){
    
      if(array[+X + dir][Y]!=null){
        // alert('\n X:'+X +' Y:'+Y+' \n'+ array[X][Y].value+'\n outBox: ' + array[X][Y].outBox +'\n inBox: ' + array[X][Y].inBox +'\n color: '+ array[X][Y].color)
         if(array[+X + dir][Y].outBox==true)
         {
          if(array[+X + dir][Y].number_inside!=null ){
            if(enableLog)
            console.log(`-false upppppppppppppp __oppppp_UPPPPPPPPPPPPP`); 
            return;
            }
          array[X + +dir][Y].number_inside=array[X][Y].number_inside;

          // if(arrayName=='tt')
          array[X][Y].number_inside.y+=(100*dir)

           array[X][Y].number_inside=null;
          array[+X + dir][Y].inBox=true
          array[X][Y].inBox=false
          array[+X + dir][Y].sleep=0
           array[X][Y].sleep=0
          return;
        }
      }
      if(enableLog)
      console.log( array[X][Y].number_inside.color,`take object out outBox to ${direction}`);

      // array[X][Y].upPressed=true
      // array[X][Y].sleep=0
      // console.log(array[X][Y].number_inside.color,'تطليع الاوبجيكت عل لفوق ');


      array[+X + dir][Y]= array[X][Y].number_inside;

      // if(arrayName=='tt')
      array[+X + dir][Y].y+=(100*dir)
      // array[+X+ -1][Y]=array[X][Y].number_inside;
      // array[+X+ -1][Y].y-=100
      // array[+X+ +1][Y].upPressed=true

       array[X][Y].number_inside=null;
       array[X][Y].inBox=false;
      if(array[+X+ dir][Y]!=null){

        array[+X+ dir][Y].sleep=0;
      }      
      return;
    }//2
    // if(enableLog)
// console.log(+X+ dir , Y)
// return;
    if(array[+X+ dir][Y]!=null ){
      if(array[+X+ dir][Y].number_inside!=null ){
        if(enableLog)
      console.log(`-${direction}- is outBox but is full or is inbox`); 
      return;
      }
    }
    // if(arrayName=='tt')
     array[X][Y].y+=(100*dir);

     array[X][Y].sleep=0;
    // array[X][Y].upPressed=true
    // array[X][Y].sleep=0
    if(enableLog)
    console.log( array[X][Y].color, ` move to -${direction}-`);
    // console.log(array[X][Y].color, ' move ');


    if(array[+X+ dir][Y]!=null){
    if(array[+X+ dir][Y].outBox==true){
      array[+X+ dir][Y].number_inside= array[X][Y]
      array[+X+ dir][Y].inBox=true
      array[X][Y]=null
      if(array[+X+ dir][Y]!=null){
        // console.log(213);
        array[+X+ dir][Y].sleep=0
      }      
    }
    return;
    }
    
      var swap =   array[X][Y] ;
      array[X][Y]=array[+X+ dir][Y]
      array[+X+ dir][Y]=swap;
    

  }
  cheack_move_left(array,arrayName,X,Y){

    if(  array[X][Y]==null ||  array[X][Y].outBox=='wall'|| array[X][Y].inBox!=true)
            return [false , 'is wall or null or outBox:']

    
    if(   +Y + -1 ==-1  ) 
            return [false , ' يلي ع يساري  حيط المصفوفة']

    
    if(array[X][+Y + -1]!=null){
        if( array[X][+Y + -1].movee=='yes' ||( array[X][+Y + -1].inBox==true&&array[X][+Y + -1].outBox==true))
            return [false ,'انصدم بيلي ع يسارو ' ] 
    }

 


    if(array[X][+Y + -1]!=null){
      if(array[X][+Y + -1].outBox=='wall')
            return [false , ' صدم بل والل يلي ع يسارو :']
    }
    
    if(array[X][Y].sleep!=1)
    return [false ,this+' .sleep ==0' ]
 
    return [true , ''] 

    
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
 
  
}

class Wall{
  
  constructor(x, y,color,inBox,outBox ,value,movee, sleep=1 , number_inside=null) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.mainColor=color;
    this.inBox=inBox;
    this.outBox=outBox;
    
    this.value=value
    this.movee=movee;
    this.sleep=sleep;
    this.number_inside=number_inside;
    this.ball= false
             
    // this.speed = 100;

    // this.upPressed   = false;
    // this.downPressed = false;
    // this.leftPressed = false;
    // this.rightPressed = false;
  }

  draw() {
    
    ctx.beginPath();

    if(this.value=="")
       ctx.drawImage(image,this.x,this.y,100,100);

    else if(this.inBox==true)
      ctx.drawImage(inB,this.x,this.y,100,100);
  
    else if(this.inBox!=true)
      ctx.drawImage(outB,this.x,this.y,100,100);

  
    else{
      ctx.fillStyle = this.color;
      ctx.rect(this.x, this.y, 100, 100);
        ctx.fill();
    }

    if(this.value!=""){
      ctx.fillStyle = this.color;
      ctx.rect(0+this.x, this.y, 10, 50);
        ctx.fill();
    }

      ctx.fillStyle = this.color;
      ctx.font = "30px Arial";
      ctx.fillText(this.value, this.x+40, this.y+50);

      this.winColor()
  }

  winColor(){
    if(this!=null)
    {
      this.color=this.mainColor
      if(this.number_inside!=null)
      {
        if(this.value ==this.number_inside.value ){
          // alert()

          // this.number_inside.color='green';
        }
        else{
          // this.number_inside.color='red';

        }
       
      }
    }
  }

  cheack_move_up(array,arrayName,X,Y){

    if(  this==null ||  this.outBox=='wall'|| this.inBox!=true)
      return [false,' is wall or null or outBox :'];
    
    if(   +X + -1 ==-1 )
      return [false,'يلي فوقي حيط المصفوفة'];
    

    if(array[+X+ -1][Y]!=null){
    if(array[+X+ -1][Y].outBox=="wall")
      return [false,' صدم بل والل يلي فوقو :'];
    }

    if(array[+X+ -1][Y]!=null){
        if( array[+X+ -1][Y].movee=='yes'||( array[X + -1][+Y].inBox==true&&array[X + -1][+Y].outBox==true)  )
          return [false ,this +'انصدم بيلي فوقو '];
    }
    
    if(this.sleep!=1)
      return [false ,this + ' .sleep ==0'];
    
      return [true , ''] 

  }
  cheack_move_down(array,arrayName,X,Y){
    
    if(  this==null ||  this.outBox=='wall'|| this.inBox!=true)
      return [false , 'is wall or null or outBox:']

    if( +X + +1 ==array.length  )
      return [false , ' يلي تحتي  حيط المصفوفة']
    

    if(array[+X+ +1][Y]!=null){
      if(array[+X+ +1][Y].outBox=='wall')
        return [false , ' صدم بل والل يلي تحت :']
      }

    if(array[+X+ +1][Y]!=null){
        if( array[+X+ +1][Y].movee=='yes'||( array[X + +1][+Y].inBox==true&&array[X + +1][+Y].outBox==true) )
          return [false ,'انصدم بيلي ع تحتو ' ] 
    }
    
    if(this.sleep!=1)
      return [false ,this+' .sleep ==0' ]
    
      return [true , ''] 
  }
  cheack_move_right(array,arrayName,X,Y){
    
    if(  this==null ||  this.outBox=='wall'|| this.inBox!=true)
          return [false , 'is wall or null or outBox:']

    if(   +Y + 1 ==array[X].length  )
          return [false , ' يلي ع يميني  حيط المصفوفة']


    if(array[X][+Y + +1]!=null){

        if( array[X][+Y + +1].movee=='yes'||( array[X][+Y + +1].inBox==true&&array[X][+Y + +1].outBox==true) )
        return [false ,'انصدم بيلي ع يمينو ' ] 
    }
    
    if(array[X][+Y + +1]!=null){
      if(array[X][+Y + +1].outBox=='wall')
         return [false , ' صدم بل والل يلي ع يمينو :']
    }
    
    if(this.sleep!=1)
       return [false ,this+' .sleep ==0' ]
    
       
    return [true , ''] 
    
    
      

  }
  move_row(array,arrayName,X,Y,dir,checkmove=true){
    // console.log('------------------------------------------------------------')
  

    if(dir==-1){
      if(checkmove=true){
      var cheack=array[X][Y].cheack_move_left(array,arrayName,X,Y);
      if(cheack[0]==false){
        if(enableLog)
        console.log(cheack[1])
        return;
      }    
     } 
      var direction= 'left';

    }
    else if(dir==1){
      if(checkmove=true){
      var cheack=array[X][Y].cheack_move_right(array,arrayName,X,Y);
      if(cheack[0]==false){
        if(enableLog)
        console.log(cheack[1])
        return;
      }
    }
      var direction= 'right';

    }

               if(this.inBox==true &&this.outBox==true){
          // alert(1)
                // ازا كنت عم اسحب من اوتبوكس وحط ب اوت بوكس
                if(array[X][+Y + dir]!=null){
                  // alert('\n X:'+X +' Y:'+Y+' \n'+array[X][Y].value+'\n outBox: ' +array[X][Y].outBox +'\n inBox: ' +array[X][Y].inBox +'\n color: '+array[X][Y].color)
                   if(array[X][+Y + dir].outBox==true)
                   {
                    if(array[X][+Y + dir].number_inside!=null ){
                      if(enableLog)
                      console.log(`rowwwwwwwwwwwwww_row__________________rowwwwwwwwwwwwww`); 
                      return;
                    }
                    array[X][+Y + +dir].number_inside=array[X][Y].number_inside;
                    // if(arrayName=='tt')
                    array[X][+Y ].number_inside.x+=(100*dir)

                    array[X][Y].number_inside=null;
                    array[X][+Y + dir].inBox=true
                    array[X][+Y ].inBox=false
                    array[X][+Y + dir].sleep=0
                    array[X][Y].sleep=0
                    return;
                  }
                }
                  if(enableLog)
                  console.log(array[X][Y].number_inside.color,'take out object row'+dir);
                
                  array[X][+Y + dir]=array[X][Y].number_inside;

                  // if(arrayName=='tt')
                  array[X][+Y + dir].x+=(100*dir)

                  // array[X][+Y + dir].rightPressed=true
                  array[X][Y].number_inside=null;
                  array[X][Y].inBox=false;
                  if(array[X][+Y + dir]!=null){
                 
                    array[X][+Y + dir].sleep=0
                  }      
                  return;
                }//2

                // out box cant have more than one inbox
                if(array[X][+Y + dir]!=null ){
                    if(array[X][+Y + dir].number_inside!=null ){
                        if(enableLog)
                       console.log(`on the row ${direction} is outBox but is full`); 
                       return;
                    }
                }
                
                if(enableLog)
                console.log(this.color, ` move to row ${direction}  `);

                // if(arrayName=='tt')
                array[X][Y].x+=(100*dir)
              
              this.sleep=0



                //entry inBox to outBox
                if(array[X][+Y + dir]!=null){

                    if(array[X][+Y + dir].outBox==true &&array[X][+Y + dir].number_inside==null){
                      array[X][+Y + dir].number_inside=array[X][Y]
                      array[X][+Y + dir].inBox=true
                      array[X][+Y]=null
                      if(array[X][+Y + dir]!=null){
                         array[X][+Y + dir].sleep=0
                      }      
                    }
                    return;
                }
                  
                  //swap if _inBox and NULL
                  var swap =   this ;
                  array[X][Y]=array[X][+Y + dir]
                  array[X][+Y + dir]=swap;
                


  }
  move_column(array,arrayName,X,Y,dir){
   


    if(dir==+1){

      var cheack=array[X][Y].cheack_move_down(array,arrayName,X,Y);
      if(cheack[0]==false){
        if(enableLog)
        console.log(cheack[1])
        return;
      }

      var direction= 'up';
    }
    else if(dir==-1){

      var cheack=array[X][Y].cheack_move_up(array,arrayName,X,Y);
      // return;
      if(cheack[0]==false){
        if(enableLog)
        console.log(cheack[1])
        return;
      }

      var direction= 'down';
    }
    // console.log(dir);
  
   




    if( array[X][Y].inBox==true && array[X][Y].outBox==true){
    
      if(array[+X + dir][Y]!=null){
        // alert('\n X:'+X +' Y:'+Y+' \n'+ array[X][Y].value+'\n outBox: ' + array[X][Y].outBox +'\n inBox: ' + array[X][Y].inBox +'\n color: '+ array[X][Y].color)
         if(array[+X + dir][Y].outBox==true)
         {
          if(array[+X + dir][Y].number_inside!=null ){
            if(enableLog)
            console.log(`-false upppppppppppppp __oppppp_UPPPPPPPPPPPPP`); 
            return;
            }
          array[X + +dir][Y].number_inside=array[X][Y].number_inside;

          // if(arrayName=='tt')
          array[X][Y].number_inside.y+=(100*dir)

           array[X][Y].number_inside=null;
          array[+X + dir][Y].inBox=true
          array[X][Y].inBox=false
          array[+X + dir][Y].sleep=0
           array[X][Y].sleep=0
          return;
        }
      }
      if(enableLog)
      console.log( array[X][Y].number_inside.color,`take object out outBox to ${direction}`);

      // array[X][Y].upPressed=true
      // array[X][Y].sleep=0
      // console.log(array[X][Y].number_inside.color,'تطليع الاوبجيكت عل لفوق ');


      array[+X + dir][Y]= array[X][Y].number_inside;

      // if(arrayName=='tt')
      array[+X + dir][Y].y+=(100*dir)
      // array[+X+ -1][Y]=array[X][Y].number_inside;
      // array[+X+ -1][Y].y-=100
      // array[+X+ +1][Y].upPressed=true

       array[X][Y].number_inside=null;
       array[X][Y].inBox=false;
      if(array[+X+ dir][Y]!=null){

        array[+X+ dir][Y].sleep=0;
      }      
      return;
    }//2
    // if(enableLog)
// console.log(+X+ dir , Y)
// return;
    if(array[+X+ dir][Y]!=null ){
      if(array[+X+ dir][Y].number_inside!=null ){
        if(enableLog)
      console.log(`-${direction}- is outBox but is full or is inbox`); 
      return;
      }
    }
    // if(arrayName=='tt')
     array[X][Y].y+=(100*dir);

     array[X][Y].sleep=0;
    // array[X][Y].upPressed=true
    // array[X][Y].sleep=0
    if(enableLog)
    console.log( array[X][Y].color, ` move to -${direction}-`);
    // console.log(array[X][Y].color, ' move ');


    if(array[+X+ dir][Y]!=null){
    if(array[+X+ dir][Y].outBox==true){
      array[+X+ dir][Y].number_inside= array[X][Y]
      array[+X+ dir][Y].inBox=true
      array[X][Y]=null
      if(array[+X+ dir][Y]!=null){
        // console.log(213);
        array[+X+ dir][Y].sleep=0
      }      
    }
    return;
    }
    
      var swap =   array[X][Y] ;
      array[X][Y]=array[+X+ dir][Y]
      array[+X+ dir][Y]=swap;
    

  }
  cheack_move_left(array,arrayName,X,Y){

    if(  array[X][Y]==null ||  array[X][Y].outBox=='wall'|| array[X][Y].inBox!=true)
            return [false , 'is wall or null or outBox:']

    
    if(   +Y + -1 ==-1  ) 
            return [false , ' يلي ع يساري  حيط المصفوفة']

    
    if(array[X][+Y + -1]!=null){
        if( array[X][+Y + -1].movee=='yes' ||( array[X][+Y + -1].inBox==true&&array[X][+Y + -1].outBox==true))
            return [false ,'انصدم بيلي ع يسارو ' ] 
    }

 


    if(array[X][+Y + -1]!=null){
      if(array[X][+Y + -1].outBox=='wall')
            return [false , ' صدم بل والل يلي ع يسارو :']
    }
    
    if(array[X][Y].sleep!=1)
    return [false ,this+' .sleep ==0' ]
 
    return [true , ''] 

    
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
 
  
}
class outt{
  
  constructor(x, y,color,inBox,outBox ,value,movee, sleep=1 , number_inside=null) {
    this.perant;

    this.x = x;
    this.y = y;
    this.color = color;
    this.mainColor=color;
    this.inBox=inBox;
    this.outBox=outBox;
    
    this.value=value
    this.movee=movee;
    this.sleep=sleep;
    this.number_inside=number_inside;
    this.ball= false
             
    // this.speed = 100;

    // this.upPressed   = false;
    // this.downPressed = false;
    // this.leftPressed = false;
    // this.rightPressed = false;
  }

  draw() {
    
    ctx.beginPath();

    if(this.value=="")
       ctx.drawImage(image,this.x,this.y,100,100);

    else if(this.inBox==true)
      ctx.drawImage(inB,this.x,this.y,100,100);
  
    else if(this.inBox!=true)
      ctx.drawImage(outB,this.x,this.y,100,100);

  
    else{
      ctx.fillStyle = this.color;
      ctx.rect(this.x, this.y, 100, 100);
        ctx.fill();
    }

    if(this.value!=""){
      ctx.fillStyle = this.color;
      ctx.rect(0+this.x, this.y, 10, 50);
        ctx.fill();
    }

      ctx.fillStyle = this.color;
      ctx.font = "30px Arial";
      ctx.fillText(this.value, this.x+40, this.y+50);

      this.winColor()
  }

  winColor(){
    if(this!=null)
    {
      this.color=this.mainColor
      if(this.number_inside!=null)
      {
        if(this.value ==this.number_inside.value ){
          // alert()

          // this.number_inside.color='green';
        }
        else{
          // this.number_inside.color='red';

        }
       
      }
    }
  }

  cheack_move_up(array,arrayName,X,Y){

    if(  this==null ||  this.outBox=='wall'|| this.inBox!=true)
      return [false,' is wall or null or outBox :'];
    
    if(   +X + -1 ==-1 )
      return [false,'يلي فوقي حيط المصفوفة'];
    

    if(array[+X+ -1][Y]!=null){
    if(array[+X+ -1][Y].outBox=="wall")
      return [false,' صدم بل والل يلي فوقو :'];
    }

    if(array[+X+ -1][Y]!=null){
        if( array[+X+ -1][Y].movee=='yes'||( array[X + -1][+Y].inBox==true&&array[X + -1][+Y].outBox==true)  )
          return [false ,this +'انصدم بيلي فوقو '];
    }
    
    if(this.sleep!=1)
      return [false ,this + ' .sleep ==0'];
    
      return [true , ''] 

  }
  cheack_move_down(array,arrayName,X,Y){
    
    if(  this==null ||  this.outBox=='wall'|| this.inBox!=true)
      return [false , 'is wall or null or outBox:']

    if( +X + +1 ==array.length  )
      return [false , ' يلي تحتي  حيط المصفوفة']
    

    if(array[+X+ +1][Y]!=null){
      if(array[+X+ +1][Y].outBox=='wall')
        return [false , ' صدم بل والل يلي تحت :']
      }

    if(array[+X+ +1][Y]!=null){
        if( array[+X+ +1][Y].movee=='yes'||( array[X + +1][+Y].inBox==true&&array[X + +1][+Y].outBox==true) )
          return [false ,'انصدم بيلي ع تحتو ' ] 
    }
    
    if(this.sleep!=1)
      return [false ,this+' .sleep ==0' ]
    
      return [true , ''] 
  }
  cheack_move_right(array,arrayName,X,Y){
    
    if(  this==null ||  this.outBox=='wall'|| this.inBox!=true)
          return [false , 'is wall or null or outBox:']

    if(   +Y + 1 ==array[X].length  )
          return [false , ' يلي ع يميني  حيط المصفوفة']


    if(array[X][+Y + +1]!=null){

        if( array[X][+Y + +1].movee=='yes'||( array[X][+Y + +1].inBox==true&&array[X][+Y + +1].outBox==true) )
        return [false ,'انصدم بيلي ع يمينو ' ] 
    }
    
    if(array[X][+Y + +1]!=null){
      if(array[X][+Y + +1].outBox=='wall')
         return [false , ' صدم بل والل يلي ع يمينو :']
    }
    
    if(this.sleep!=1)
       return [false ,this+' .sleep ==0' ]
    
       
    return [true , ''] 
    
    
      

  }
  move_row(array,arrayName,X,Y,dir,checkmove=true){
    // console.log('------------------------------------------------------------')
  

    if(dir==-1){
      if(checkmove=true){
      var cheack=array[X][Y].cheack_move_left(array,arrayName,X,Y);
      if(cheack[0]==false){
        if(enableLog)
        console.log(cheack[1])
        return;
      }    
     } 
      var direction= 'left';

    }
    else if(dir==1){
      if(checkmove=true){
      var cheack=array[X][Y].cheack_move_right(array,arrayName,X,Y);
      if(cheack[0]==false){
        if(enableLog)
        console.log(cheack[1])
        return;
      }
    }
      var direction= 'right';

    }

               if(this.inBox==true &&this.outBox==true){
          // alert(1)
                // ازا كنت عم اسحب من اوتبوكس وحط ب اوت بوكس
                if(array[X][+Y + dir]!=null){
                  // alert('\n X:'+X +' Y:'+Y+' \n'+array[X][Y].value+'\n outBox: ' +array[X][Y].outBox +'\n inBox: ' +array[X][Y].inBox +'\n color: '+array[X][Y].color)
                   if(array[X][+Y + dir].outBox==true)
                   {
                    if(array[X][+Y + dir].number_inside!=null ){
                      if(enableLog)
                      console.log(`rowwwwwwwwwwwwww_row__________________rowwwwwwwwwwwwww`); 
                      return;
                    }
                    array[X][+Y + +dir].number_inside=array[X][Y].number_inside;
                    // if(arrayName=='tt')
                    array[X][+Y ].number_inside.x+=(100*dir)

                    array[X][Y].number_inside=null;
                    array[X][+Y + dir].inBox=true
                    array[X][+Y ].inBox=false
                    array[X][+Y + dir].sleep=0
                    array[X][Y].sleep=0
                    return;
                  }
                }
                  if(enableLog)
                  console.log(array[X][Y].number_inside.color,'take out object row'+dir);
                
                  array[X][+Y + dir]=array[X][Y].number_inside;

                  // if(arrayName=='tt')
                  array[X][+Y + dir].x+=(100*dir)

                  // array[X][+Y + dir].rightPressed=true
                  array[X][Y].number_inside=null;
                  array[X][Y].inBox=false;
                  if(array[X][+Y + dir]!=null){
                 
                    array[X][+Y + dir].sleep=0
                  }      
                  return;
                }//2

                // out box cant have more than one inbox
                if(array[X][+Y + dir]!=null ){
                    if(array[X][+Y + dir].number_inside!=null ){
                        if(enableLog)
                       console.log(`on the row ${direction} is outBox but is full`); 
                       return;
                    }
                }
                
                if(enableLog)
                console.log(this.color, ` move to row ${direction}  `);

                // if(arrayName=='tt')
                array[X][Y].x+=(100*dir)
              
              this.sleep=0



                //entry inBox to outBox
                if(array[X][+Y + dir]!=null){

                    if(array[X][+Y + dir].outBox==true &&array[X][+Y + dir].number_inside==null){
                      array[X][+Y + dir].number_inside=array[X][Y]
                      array[X][+Y + dir].inBox=true
                      array[X][+Y]=null
                      if(array[X][+Y + dir]!=null){
                         array[X][+Y + dir].sleep=0
                      }      
                    }
                    return;
                }
                  
                  //swap if _inBox and NULL
                  var swap =   this ;
                  array[X][Y]=array[X][+Y + dir]
                  array[X][+Y + dir]=swap;
                


  }
  move_column(array,arrayName,X,Y,dir){
   


    if(dir==+1){

      var cheack=array[X][Y].cheack_move_down(array,arrayName,X,Y);
      if(cheack[0]==false){
        if(enableLog)
        console.log(cheack[1])
        return;
      }

      var direction= 'up';
    }
    else if(dir==-1){

      var cheack=array[X][Y].cheack_move_up(array,arrayName,X,Y);
      // return;
      if(cheack[0]==false){
        if(enableLog)
        console.log(cheack[1])
        return;
      }

      var direction= 'down';
    }
    // console.log(dir);
  
   




    if( array[X][Y].inBox==true && array[X][Y].outBox==true){
    
      if(array[+X + dir][Y]!=null){
        // alert('\n X:'+X +' Y:'+Y+' \n'+ array[X][Y].value+'\n outBox: ' + array[X][Y].outBox +'\n inBox: ' + array[X][Y].inBox +'\n color: '+ array[X][Y].color)
         if(array[+X + dir][Y].outBox==true)
         {
          if(array[+X + dir][Y].number_inside!=null ){
            if(enableLog)
            console.log(`-false upppppppppppppp __oppppp_UPPPPPPPPPPPPP`); 
            return;
            }
          array[X + +dir][Y].number_inside=array[X][Y].number_inside;

          // if(arrayName=='tt')
          array[X][Y].number_inside.y+=(100*dir)

           array[X][Y].number_inside=null;
          array[+X + dir][Y].inBox=true
          array[X][Y].inBox=false
          array[+X + dir][Y].sleep=0
           array[X][Y].sleep=0
          return;
        }
      }
      if(enableLog)
      console.log( array[X][Y].number_inside.color,`take object out outBox to ${direction}`);

      // array[X][Y].upPressed=true
      // array[X][Y].sleep=0
      // console.log(array[X][Y].number_inside.color,'تطليع الاوبجيكت عل لفوق ');


      array[+X + dir][Y]= array[X][Y].number_inside;

      // if(arrayName=='tt')
      array[+X + dir][Y].y+=(100*dir)
      // array[+X+ -1][Y]=array[X][Y].number_inside;
      // array[+X+ -1][Y].y-=100
      // array[+X+ +1][Y].upPressed=true

       array[X][Y].number_inside=null;
       array[X][Y].inBox=false;
      if(array[+X+ dir][Y]!=null){

        array[+X+ dir][Y].sleep=0;
      }      
      return;
    }//2
    // if(enableLog)
// console.log(+X+ dir , Y)
// return;
    if(array[+X+ dir][Y]!=null ){
      if(array[+X+ dir][Y].number_inside!=null ){
        if(enableLog)
      console.log(`-${direction}- is outBox but is full or is inbox`); 
      return;
      }
    }
    // if(arrayName=='tt')
     array[X][Y].y+=(100*dir);

     array[X][Y].sleep=0;
    // array[X][Y].upPressed=true
    // array[X][Y].sleep=0
    if(enableLog)
    console.log( array[X][Y].color, ` move to -${direction}-`);
    // console.log(array[X][Y].color, ' move ');


    if(array[+X+ dir][Y]!=null){
    if(array[+X+ dir][Y].outBox==true){
      array[+X+ dir][Y].number_inside= array[X][Y]
      array[+X+ dir][Y].inBox=true
      array[X][Y]=null
      if(array[+X+ dir][Y]!=null){
        // console.log(213);
        array[+X+ dir][Y].sleep=0
      }      
    }
    return;
    }
    
      var swap =   array[X][Y] ;
      array[X][Y]=array[+X+ dir][Y]
      array[+X+ dir][Y]=swap;
    

  }
  cheack_move_left(array,arrayName,X,Y){

    if(  array[X][Y]==null ||  array[X][Y].outBox=='wall'|| array[X][Y].inBox!=true)
            return [false , 'is wall or null or outBox:']

    
    if(   +Y + -1 ==-1  ) 
            return [false , ' يلي ع يساري  حيط المصفوفة']

    
    if(array[X][+Y + -1]!=null){
        if( array[X][+Y + -1].movee=='yes' ||( array[X][+Y + -1].inBox==true&&array[X][+Y + -1].outBox==true))
            return [false ,'انصدم بيلي ع يسارو ' ] 
    }

 


    if(array[X][+Y + -1]!=null){
      if(array[X][+Y + -1].outBox=='wall')
            return [false , ' صدم بل والل يلي ع يسارو :']
    }
    
    if(array[X][Y].sleep!=1)
    return [false ,this+' .sleep ==0' ]
 
    return [true , ''] 

    
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
 
  
}
class structure{
  constructor(array) {
    this.array= array; 
    this.perant= []; 
    this.cost=0
    this.h=0

  }

}