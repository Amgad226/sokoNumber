var endGame = false

function userplay(event) {

  var array = tt

  if (endGame == true) {
    // console.log('end')
    return;
  }


  if (event.keyCode == 38 ) {

    for (let X = array.length - 1; X >= 0; X--) {
      for (let Y = array[X].length - 1; Y >= 0; Y--) {

        if (array[X][Y] != null) {
          array[X][Y].winColor()

          array[X][Y].move_column(array, 'tt', X, Y, -1);
          if (array[X][Y] == null || array[X][Y].value == 'W' || array[X][Y].inBox != true) {
            continue;
          }
          array[X][Y].sleep = 1
        }
      }
    }
    // for (let X = 0; X < array.length; X++) {
    //   for (let Y = 0; Y < array[X].length; Y++) {


    //     if (array[X][Y] == null || array[X][Y].value == 'W' || array[X][Y].inBox != true) {
    //       continue;
    //     }
    //     array[X][Y].sleep = 1

    //   }
    // }
  }

  //down
  if (event.keyCode == 40) {

    for (let X = 0; X < array.length; X++) {
      for (let Y = 0; Y < array[X].length; Y++) {

        if (array[X][Y] != null) {
          array[X][Y].winColor()
          array[X][Y].move_column(array, 'tt', X, Y, +1);
        }
        if (array[X][Y] == null || array[X][Y].value == 'W' || array[X][Y].inBox != true) {
          continue;
        }
        array[X][Y].sleep = 1
      }
    }

  //   for (let X = 0; X < array.length; X++) {
  //     for (let Y = 0; Y < array[X].length; Y++) {
  //       if (array[X][Y] == null || array[X][Y].value == 'W' || array[X][Y].inBox != true) {
  //         continue;
  //       }
  //       array[X][Y].sleep = 1

  //     }
  //   }

  }

  //left
  if (event.keyCode == 37 ) {
    for (let X = array.length - 1; X >= 0; X--) {
      for (let Y = array[X].length - 1; Y >= 0; Y--) {

        if (array[X][Y] != null) {
          array[X][Y].winColor()

          array[X][Y].move_row(array, 'tt', X, Y, -1)
        }
        if (array[X][Y] == null || array[X][Y].value == 'W' || array[X][Y].inBox != true) {
          continue;
        }
        array[X][Y].sleep = 1

      }

    }

    // for (let X = 0; X < array.length; X++) {
    //   for (let Y = 0; Y < array[X].length; Y++) {


    //     if (array[X][Y] == null || array[X][Y].value == 'W' || array[X][Y].inBox != true) {
    //       // console.log('ignore :');
    //       continue;
    //     }
    //     array[X][Y].sleep = 1

    //   }
    // }

  }

  //right
  if (event.keyCode == 39) {

    for (let X = 0; X < array.length; X++) {
      for (let Y = 0; Y < array[X].length; Y++) {

        if (array[X][Y] != null) {
          array[X][Y].winColor()
          array[X][Y].move_row(array, 'tt', X, Y, +1)
        }
        if (array[X][Y] == null || array[X][Y].value == 'W' || array[X][Y].inBox != true) {
          continue;
        }
        array[X][Y].sleep = 1
      }
    }

    // for (let X = 0; X < array.length; X++) {
    //   for (let Y = 0; Y < array[X].length; Y++) {
    //     if (array[X][Y] == null || array[X][Y].value == 'W' || array[X][Y].inBox != true) {
    //       continue;
    //     }
    //     array[X][Y].sleep = 1
    //   }
    // }

  }
    if (checkWin()) {

    $('#win').css('display', 'block')
    console.log('dn dn dn dn dn dn we have winnerrrrrrrrrrrrr')
    endGame = true
  }
}

function checkWin() {
  if(win_hashed_array_in_user_play!=0){
    // console.log('checkWin with hashed number');
    var hashedTT ;hashedTT = hashArray(tt);
    if(hashedTT===win_hashed_array_in_user_play){
      return true 
    }
    return false 
  }
  else{

  var win = 0
  
  for (let i = 0; i < winArray.length; i++) {
    if (winArray[i].number_inside != null) {
      if (winArray[i].value == winArray[i].number_inside.value)
      win++;
    }
  }
  
  if (win == winArray.length) {
    return true;
  }
  else
  return false
  

}
}

function get_next_state(structureArrayy) {
// return
  var ArrayToStoreStructureNextState = [];
  var dir = [];
  var structureArray = _.cloneDeep(structureArrayy)
  var structureNextState = _.cloneDeep(structureArray)

  // var hashedStructureArray ;
  // hashedStructureArray = hashArray(structureArray.array);//static

  // var hashedStructureNextState ;
  // hashedStructureNextState = hashArray(structureNextState.array);

  // console.log(structureArray.array,structureNextState.array);
  // console.log(hashedStructureNextState,hashedStructureArray);


  //عم مشيي خطوة لفوق مشان افحص ازا اختلفت معناها فيها تتحرك
  for (let X = structureNextState.array.length - 1; X >= 0; X--) {
    for (let Y = structureNextState.array[X].length - 1; Y >= 0; Y--) {
      if (structureNextState.array[X][Y] != null) {

        structureNextState.array[X][Y].move_column(structureNextState.array, 'structureNextState.array', X, Y, -1)
      }

    //عم اعمل سليب للكل مشان ما يصي خربطة 
      if (structureNextState.array[X][Y] == null || structureNextState.array[X][Y].value == 'W' || structureNextState.array[X][Y].inBox != true) {
        continue;
      }
      else {
        structureNextState.array[X][Y].sleep = 1
      }


    }
  }

 
  // هون عم افحص الرقعة يلي جاييتني مع يلي مشيتها ازا مو متساويين معناها ما فيها تتحرك 


    if (isEqualArray(structureNextState.array, structureArray.array) != 0) {
    dir.push('Up')
    ArrayToStoreStructureNextState.push(structureNextState)
  }
  structureNextState = _.cloneDeep(structureArray)

  //down
  for (let X = 0; X < structureNextState.array.length; X++) {
    for (let Y = 0; Y < structureNextState.array[X].length; Y++) {
      if (structureNextState.array[X][Y] != null) {
        structureNextState.array[X][Y].move_column(structureNextState.array, 'structureNextState.array', X, Y, +1)
      }
      if (structureNextState.array[X][Y] == null || structureNextState.array[X][Y].value == 'W' || structureNextState.array[X][Y].inBox != true) {
        continue;
      }
      else {
        structureNextState.array[X][Y].sleep = 1
      }
    }
  }

  
  if (isEqualArray(structureNextState.array, structureArray.array) != 0) {
    dir.push('Down')

    ArrayToStoreStructureNextState.push(structureNextState)
  }

  structureNextState = _.cloneDeep(structureArray)
  // structureNextState=array

  //right
  for (let X = 0; X < structureNextState.array.length; X++) {
    for (let Y = 0; Y < structureNextState.array[X].length; Y++) {
      if (structureNextState.array[X][Y] != null) {
        structureNextState.array[X][Y].move_row(structureNextState.array, 'structureNextState.array', X, Y, +1)
      }


      if (structureNextState.array[X][Y] == null || structureNextState.array[X][Y].value == 'W' || structureNextState.array[X][Y].inBox != true) {
        continue;
      }
      else {
        structureNextState.array[X][Y].sleep = 1
      }
    }
  }


  if (isEqualArray(structureNextState.array, structureArray.array) != 0) {
    dir.push('Right')

    ArrayToStoreStructureNextState.push(structureNextState)
  }
  structureNextState = _.cloneDeep(structureArray)


  //left
  for (let X = structureNextState.array.length - 1; X >= 0; X--) {
    for (let Y = structureNextState.array[X].length - 1; Y >= 0; Y--) {
      if (structureNextState.array[X][Y] != null) {
        structureNextState.array[X][Y].move_row(structureNextState.array, 'structureNextState.array', X, Y, -1)
      }

      if (structureNextState.array[X][Y] == null || structureNextState.array[X][Y].value == 'W' || structureNextState.array[X][Y].inBox != true) {
        continue;
      }
      else {
        structureNextState.array[X][Y].sleep = 1
      }
    }
  }

  if (isEqualArray(structureNextState.array, structureArray.array) != 0) {
    dir.push('Left')

    ArrayToStoreStructureNextState.push(structureNextState)
  }
  structureNextState = _.cloneDeep(structureArray)
  // structureNextState=array

  return [ArrayToStoreStructureNextState, dir];


}
function isEqualArray(ary1, ary2) {
  // alert(1)
  // console.log(ary1);
  // console.log(ary2);
  var array1 = _.cloneDeep(ary1)
  var array2 = _.cloneDeep(ary2)
  var a = 0;
  for (let X = 0; X < array1.length; X++) {
    for (let Y = 0; Y < array1[X].length; Y++) {

      if (array1[X][Y] == null && array2[X][Y] == null) {
        // continue;
      }

      else if (array1[X][Y] != null && array2[X][Y] != null) {
        // alert(2)
        // console.log(1);
        if (array1[X][Y].x == array2[X][Y].x && array1[X][Y].y == array2[X][Y].y && array1[X][Y].color == array2[X][Y].color && array1[X][Y].mainColor == array2[X][Y].mainColor && array1[X][Y].inBox == array2[X][Y].inBox && array1[X][Y].outBox == array2[X][Y].outBox && array1[X][Y].value == array2[X][Y].value && array1[X][Y].movee == array2[X][Y].movee && array1[X][Y].sleep == array2[X][Y].sleep) {
          if (array1[X][Y].number_inside == null && array2[X][Y].number_inside == null) {
            // console.log('التنين مافيهون اوبجيكت حجوا ');

            continue;
          }

          else if (array1[X][Y].number_inside != null && array2[X][Y].number_inside != null) {

            if ((array1[X][Y].number_inside.x != array2[X][Y].number_inside.x || array1[X][Y].number_inside.y != array2[X][Y].number_inside.y || array1[X][Y].number_inside.color != array2[X][Y].number_inside.color || array1[X][Y].number_inside.mainColor != array2[X][Y].number_inside.mainColor || array1[X][Y].number_inside.inBox != array2[X][Y].number_inside.inBox || array1[X][Y].number_inside.outBox != array2[X][Y].number_inside.outBox || array1[X][Y].number_inside.value != array2[X][Y].number_inside.value || array1[X][Y].number_inside.movee != array2[X][Y].number_inside.movee || array1[X][Y].number_inside.sleep != array2[X][Y].number_inside.sleep)) {
              // console.log(1);
              // alert(22)
              a++;
              // return a;
            }
          }


          else {
            // console.log('واحد نالل والتاني ناه ');

            a++;
            return a;
          }
        }
        else {
          // alert(1)
          a++;
          return a;
        }

      }

      else {
        // alert(8)
        a++;
        return a;
      }

    }
  }

  return a
}

function hideLoader(){
  var loader = document.getElementById("loader");
  loader.style.display = "none";
}

function displayLoader(){
  var loader = document.getElementById("loader");
  loader.style.display = "block";
  
}

function hashArray(array){
  var string=JSON.stringify(array)
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
      var code = string.charCodeAt(i);
      hash = ((hash<<5)-hash)+code;
      hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}
var queue = new Queue()
var pQueue = new PriorityQueue()
var visited = [];
var stack = [];
var visited = [];
var hashedArray ;
var isVisited;
var path

function DFS(Structure ) {
  
  hashedArray = hashArray(Structure.array);

  if (stack.length == 0) 
  stack.push(hashedArray);
  

  else {
    for (let i = 0; i < stack.length; i++){
        if ((hashedArray=== stack[i]) ) 
        return false;
    }
    stack.push(hashedArray);
  }

  if ((hashedArray=== hashedTTWin) ) {
    hideLoader()
    path = [ ...Structure.perant,ttWin]
    // console.log(path, 'path is');
    console.log(path.length, 'path');
    console.log(stack.length, 'visitied');
    console.log('win');
    document.getElementById('path').innerHTML=`path: ${path.length} `
    document.getElementById('visited').innerHTML=`visited: ${stack.length} `
    drawGamee(path);
    return true
  }

  else {
    var sons = get_next_state(Structure);

    for (let i = 0; i < sons[0].length; i++) {

      sons[0][i].perant = (Structure.perant?.length > 0 ? [...Structure.perant, Structure.array] : [Structure.array])

      if ( DFS(sons[0][i], sons[1][i])) 
      return true;
    }

    return false;
  }
}

function BFS(Structure) {
 
   isVisited = false

  hashedArray = hashArray(Structure.array);

  for (let i = 0; i < visited.length; i++) {
    if (hashedArray==visited[i]) {
      isVisited=true
      break;
    }
  }
  if (!isVisited) {
    visited.push(hashedArray)
  }
  
  if (hashedTTWin==hashedArray) {
    hideLoader()
    var path = [...Structure.perant, ttWin]
    // console.log(path,'path is');
    console.log(path, 'path is');
    console.log(path.length, 'path');
    console.log(visited.length, 'visitied');
    console.log('win');
    document.getElementById('path').innerHTML=`path length is ${path.length} `
    document.getElementById('visited').innerHTML=`visited: ${visited.length} `

    drawGamee(path);

    return true
  }
  // visited.push(Structure.array)
  var sons = get_next_state(Structure);
  for (let i = 0; i < sons[0].length; i++) {


    sons[0][i].perant = (Structure.perant?.length > 0 ? [...Structure.perant, Structure.array] : [Structure.array])
  
    var hashedSon;hashedSon = hashArray(sons[0][i].array);
    for (let i = 0; i < visited.length; i++) {
        var c = 0
      if ( hashedSon==visited[i]) {
            c++;
            break;
      }    
    }

    if (c == 0) {
      queue.enqueue(sons[0][i])
    }
  }
  if (!queue.isEmpty()) {
    BFS(queue.dequeue());
  }

}

function UCS(Structure) {

   isVisited = false

  var hashedArray ;hashedArray = hashArray(Structure.element.array);
  for (let i = 0; i < visited.length; i++) {
    if (hashedArray==visited[i]) {
      isVisited=true;
      break;
    }    
  }
  if (!isVisited ) {
    visited.push(hashedArray)
  }

    if (hashedTTWin==hashedArray) {
      hideLoader()
    var path = [...Structure.element.perant, Structure.element.array,]
    // console.log(path, 'path is');
    console.log(path.length, 'path');
    console.log(visited.length, 'visited');
    // console.log(visited, 'visitied node ');
    console.log(Structure.element.cost, 'cost');
    console.log('win');
    document.getElementById('path').innerHTML=`path length is ${path.length} `
    document.getElementById('visited').innerHTML=`visited: ${visited.length} `

    drawGamee(path);

    return true
  }

  var sons = get_next_state(Structure.element);
  for (let i = 0; i < sons[0].length; i++) {
    sons[0][i].perant = (Structure.element.perant?.length > 0 ? [...Structure.element.perant, Structure.element.array] : [Structure.element.array])
    sons[0][i].cost = Structure.element.cost + 1;

  var hashedSon;hashedSon = hashArray(sons[0][i].array);
  for (let i = 0; i < visited.length; i++) {
      var c = 0
    if ( hashedSon==visited[i]) {
          c++;
          break;
    }    
  }
    if (c == 0) {
      pQueue.enqueue(sons[0][i], sons[0][i].cost)
    }
  }
  if (!pQueue.isEmpty()) {
    UCS(pQueue.dequeue());
  }

}

function aStar(Structure) {

  isVisited=false
  hashedArray = hashArray(Structure.element.array);
  for (let i = 0; i < visited.length; i++) {
    if (hashedArray==visited[i]) {
      isVisited=true;
      break;
    }    
  }
  if (!isVisited) {
    visited.push(hashedArray)
  }


  if (hashedTTWin==hashedArray) {
    hideLoader()
    visited.push(Structure.element.array)
    var path = [...Structure.element.perant, Structure.element.array,]
    // console.log('path is ',path );
    console.log(path.length, 'path');
    // console.log(copyVisited, 'visited node ');
    console.log(visited.length, 'visited');
    console.log(Structure.element.cost, 'cost');
    console.log('--------------------------------------------------');
    document.getElementById('path').innerHTML=`path length is ${path.length} `
    document.getElementById('visited').innerHTML=`visited: ${visited.length} `
    
    drawGamee(path);

    return true
  }

  var sons = get_next_state(Structure.element);

  for (let i = 0; i < sons[0].length; i++) {
    sons[0][i].perant = (Structure.element.perant?.length > 0 ? [...Structure.element.perant, Structure.element.array] : [Structure.element.array])
    sons[0][i].cost = Structure.element.cost + 1;
    sons[0][i].h = heuristic(sons[0][i].array, ttWin);
 
      var hashedSon;hashedSon = hashArray(sons[0][i].array);
      for (let i = 0; i < visited.length; i++) {
        var c = 0
      if ( hashedSon==visited[i]) {
            c++;break;
      }    
    }

    if (c == 0) {
      pQueue.enqueueStar(sons[0][i], sons[0][i].cost + sons[0][i].h, sons[0][i].h)
    }

  }
  
  if (!pQueue.isEmpty()) {
    aStar(pQueue.dequeue());
  }

}

function heuristic(array, array2 ) {
  // console.log(array);
  // console.log(array2);
  var input1 = new PriorityQueue();
  var input2 = new PriorityQueue();
  for (let i = 0; i < array.length; i++) {
  // console.log('ayham');

    for (let j = 0; j < array[i].length; j++) {

      if (array[i][j]?.inBox == true) {
       if( array[i][j]?.number_inside?.inBox== true){
        input1.enqueue(array[i][j].number_inside, array[i][j].number_inside.value)
       }
       else{
         input1.enqueue(array[i][j], array[i][j].value)
       }
      }
      if (array2[i][j]?.inBox == true) {
        input2.enqueue(array2[i][j], array2[i][j].value)
      }
    }
  }
  // console.log(input1.items);
  // console.log(input2.items);
  var h = 0;
  for (const i in input1.items) {
    // console.log('insert');

    var minus = Math.abs(input1.items[i].element.x - input2.items[i].element.x)
              + Math.abs(input1.items[i].element.y - input2.items[i].element.y)

    h += minus
  }

  return h/100;
  return [input1.items, input2.items]
}



function  callDfs(){
  setTimeout(() => {  
          const startTime = new Date().getTime();

          DFS(ttStructure)    

          const endTime = new Date().getTime();

          const seconds = (endTime - startTime) / 1000;
          document.getElementById('timer').innerHTML=`timer: ${seconds} s`

          console.log(`Function executed in ${seconds} seconds`);
          
          }, 100);
          displayLoader();

}

function  callBfs(){
  setTimeout(() => {  
          const startTime = new Date().getTime();

          BFS(ttStructure)    

          const endTime = new Date().getTime();

          const seconds = (endTime - startTime) / 1000;
          document.getElementById('timer').innerHTML=`timer: ${seconds} s`

          console.log(`Function executed in ${seconds} seconds`);
          
          }, 100);
          displayLoader();

}

function callUCS()
{
  
  setTimeout(() => {
      const startTime = new Date().getTime();
      UCS({element:ttStructure,priority:0})  
      
      const endTime = new Date().getTime();
          const seconds = (endTime - startTime) / 1000;
          document.getElementById('timer').innerHTML=`timer: ${seconds} s`

          console.log(`Function executed in ${seconds} seconds`);
          
          }, 100);
          displayLoader();
  
}

function callAstar()
{
  
  setTimeout(() => {  
      const startTime = new Date().getTime();
       aStar({element:ttStructure,priority:0})  
       const endTime = new Date().getTime();

          const seconds = (endTime - startTime) / 1000;
          document.getElementById('timer').innerHTML=`timer: ${seconds} s`

          console.log(`Function executed in ${seconds} seconds`);
          
          }, 100);
          displayLoader();
}   
  