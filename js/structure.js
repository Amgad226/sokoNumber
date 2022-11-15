
  
  var enableLog=false;
  $('.logMessage').on('click',function(){
    if(enableLog)
    enableLog=false;
    else
    enableLog=true;
  })

  const canvas = document.getElementById("gameArea");
  const ctx = canvas.getContext("2d");
  
 class ball{
  
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
             
    this.speed = 100;

    this.upPressed   = false;
    this.downPressed = false;
    this.leftPressed = false;
    this.rightPressed = false;
  }

  draw() {
    
    ctx.beginPath();

    

// if(this.inBox==true){
//   ctx.fillStyle = 'transparent';

// ctx.rect(this.x, this.y, 50, 50);
// }
// else{
//     ctx.fillStyle = this.color;
//     ctx.rect(this.x, this.y, 100, 100);
//   }

  ctx.fillStyle = this.color;
  ctx.rect(this.x, this.y, 100, 100);
    ctx.fill();

    ctx.fillStyle = 'black';
    ctx.font = "30px Arial";
    ctx.fillText(this.value, this.x+40, this.y+50);
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
  move_row(array,arrayName,X,Y,dir){
  

    if(dir==-1){
      var cheack=array[X][Y].cheack_move_left(array,arrayName,X,Y);
      if(cheack[0]==false){
        if(enableLog)
        console.log(cheack[1])
        return;
      }    
      var direction= 'left';

    }
    else if(dir==1){
      var cheack=array[X][Y].cheack_move_right(array,arrayName,X,Y);
      if(cheack[0]==false){
        if(enableLog)
        console.log(cheack[1])
        return;
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
                    if(arrayName=='tt')
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

                  if(arrayName=='tt')
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

                if(arrayName=='tt'){
                array[X][Y].x+=(100*dir)
              }
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

          if(arrayName=='tt')
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

      if(arrayName=='tt')
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
    if(arrayName=='tt')
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
  winColor(){
    if(this!=null)
    {
      this.color=this.mainColor
      if(this.number_inside!=null)
      {
        if(this.value ==this.number_inside.value ){
          // alert()

          this.number_inside.color='white';
        }
        else{
          this.number_inside.color=this.number_inside.mainColor;
        }
      }
    }
  }
  
}
