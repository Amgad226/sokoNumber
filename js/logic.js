
function keyDown(event) {
    //up     
    if (event.keyCode == 38) {
    
        for (let X =tt.length -1;  X >=0; X--) {
          for (let Y =tt[X].length -1 ; Y >=0; Y--) {
            
            if(tt[X][Y]!=null){
              tt[X][Y].winColor()
  
              tt[X][Y].move_column(tt,'tt',X,Y,-1);
               
            } 
        }
    }
    for (let X = 0; X < tt.length; X++) {
      for (let Y = 0; Y < tt[X].length; Y++) {


          if(  tt[X][Y]==null ||  tt[X][Y].value=='W'|| tt[X][Y].inBox!=true ){
            continue;
          }
          tt[X][Y].sleep=1 

        }
    }
   

    }

    //down
    if (event.keyCode == 40 ) {
      for (let X = 0; X < tt.length; X++) {
        for (let Y = 0; Y < tt[X].length; Y++) {
          
          if(tt[X][Y]!=null){
            tt[X][Y].winColor()
            tt[X][Y].move_column(tt,'tt',X,Y,+1);
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
    if (event.keyCode == 37 ) {
        for (let X =tt.length -1;  X >=0; X--) {
          for (let Y =tt[X].length -1 ; Y >=0; Y--) {
          
          if(tt[X][Y]!=null){
                tt[X][Y].winColor()
  
                tt[X][Y].move_row(tt,'tt',X,Y,-1)
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
    if (event.keyCode == 39 ) {
   
      for (let X = 0; X < tt.length; X++) {
          for (let Y = 0; Y < tt[X].length; Y++) {

            if(tt[X][Y]!=null){
              tt[X][Y].winColor()
              tt[X][Y].move_row(tt,'tt',X,Y,+1)
            }
          }
      }

      for (let X = 0; X < tt.length; X++) {
        for (let Y = 0; Y < tt[X].length; Y++) {
            if(  tt[X][Y]==null ||  tt[X][Y].value=='W'|| tt[X][Y].inBox!=true ){
              continue;
            }
            tt[X][Y].sleep=1 
          }
      }
    }


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

  //call get_next_state
  if(event.keyCode == 39 ||event.keyCode == 37||event.keyCode == 40||event.keyCode == 38)
  {
     get_next_state();
  }
}


function get_next_state(){

  ArrayTostoreNextState= [];
 var nextState=_.cloneDeep(tt)
 

//up
for (let X = 0; X < nextState.length; X++) {
  for (let Y = 0; Y < nextState[X].length; Y++) {
    
    if(nextState[X][Y]!=null)
    nextState[X][Y].move_column(nextState,'nextState',X,Y,+1)
    
  }
  }

  if( isEqualArray(nextState,tt) !=0 ){
    ArrayTostoreNextState.push(nextState)
  }
  nextState=_.cloneDeep(tt)
    // return;

//down
  for (let X =nextState.length -1;  X >=0; X--) {
    for (let Y =nextState[X].length -1 ; Y >=0; Y--) {
         if(nextState[X][Y]!=null){
        
            nextState[X][Y].move_column(nextState,'nextState',X,Y,-1)
        }
     }
    }
    if( isEqualArray(nextState,tt) !=0 ){
      ArrayTostoreNextState.push(nextState)
    }
    nextState=_.cloneDeep(tt)


//right
  for (let X = 0; X < nextState.length; X++) {
    for (let Y = 0; Y < nextState[X].length; Y++) {  
      if(nextState[X][Y]!=null){

      nextState[X][Y]. move_row(nextState,'nextState',X,Y,+1)
    }
  }
  }
  if( isEqualArray(nextState,tt) !=0 ){
    ArrayTostoreNextState.push(nextState)
  }
  nextState=_.cloneDeep(tt)
  // nextState=_.cloneDeep(tt)



  //left
for (let X =nextState.length -1;  X >=0; X--) {
  for (let Y =nextState[X].length -1 ; Y >=0; Y--) {
   if(nextState[X][Y]!=null){

     nextState[X][Y].move_row(nextState,'nextState',X,Y,-1)
     }
   }
   }
   if( isEqualArray(nextState,tt) !=0 ){
     ArrayTostoreNextState.push(nextState)
    }
    nextState=_.cloneDeep(tt)
   
//  nextState=_.cloneDeep(tt)

}

function isEqualArray(array1,array2){
  var a= 0;
  for (let X = 0; X < array1.length; X++) {
          for (let Y = 0; Y < array1.length; Y++) {

            if(array1[X][Y]==null && array2[X][Y]==null){
              continue;
            }


            else if(array1[X][Y]!=null && array2[X][Y]!=null){
                  if(array1[X][Y].x   ==array2[X][Y].x&&array1[X][Y].y        ==array2[X][Y].y &&array1[X][Y].color    ==array2[X][Y].color&&array1[X][Y].mainColor==array2[X][Y].mainColor&&array1[X][Y].inBox    ==array2[X][Y].inBox&&array1[X][Y].outBox   ==array2[X][Y].outBox&&array1[X][Y].value    ==array2[X][Y].value&&array1[X][Y].movee    ==array2[X][Y].movee&&array1[X][Y].sleep    ==array2[X][Y].sleep)
                   {
                      if(array1[X][Y].number_inside!=null  && array2[X][Y].number_inside!=null)
                      {
                      
                          if(!(array1[X][Y].number_inside.x==array2[X][Y].number_inside.x&&array1[X][Y].number_inside.y==array2[X][Y].number_inside.y&&array1[X][Y].number_inside.color==array2[X][Y].number_inside.color&&array1[X][Y].number_inside.mainColor==array2[X][Y].number_inside.mainColor&&array1[X][Y].number_inside.inBox==array2[X][Y].number_inside.inBox&&array1[X][Y].number_inside.outBox==array2[X][Y].number_inside.outBox&&array1[X][Y].number_inside.value==array2[X][Y].number_inside.value&&array1[X][Y].number_inside.movee==array2[X][Y].number_inside.movee&&array1[X][Y].number_inside.sleep==array2[X][Y].number_inside.sleep))
                          {
                            a++;
                            break;
                          }
                      }
                   }
                  else
                  {
                    a++;
                    break;
                  }

            }  

            else
            {
              a++;
              break;
            }   
          }
  }
      
      return a 
}
