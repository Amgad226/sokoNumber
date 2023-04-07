

var u = false;
var d = false;
var r = false;
var l = false;
var wine = false
function userplay(event, a) {
  //up     
  // var array = _.cloneDeep(tt)
  var array = tt
  // console.log('+')

  if (wine == true) {
    console.log('end')
    return;
  }
  //   if(checkWin()){
  //  if(isEqualArray(tt, ttWin)==0){
  //     $('#win').css('display','block')
  //     console.log('dn dn dn dn dn dn we have winnerrrrrrrrrrrrr')
  //     wine=true
  //     }

  if (event.keyCode == 38 || u == true) {

    for (let X = array.length - 1; X >= 0; X--) {
      for (let Y = array[X].length - 1; Y >= 0; Y--) {

        if (array[X][Y] != null) {
          array[X][Y].winColor()

          array[X][Y].move_column(array, 'tt', X, Y, -1);

        }
      }
    }
    for (let X = 0; X < array.length; X++) {
      for (let Y = 0; Y < array[X].length; Y++) {


        if (array[X][Y] == null || array[X][Y].value == 'W' || array[X][Y].inBox != true) {
          continue;
        }
        array[X][Y].sleep = 1

      }
    }
    if (u) {
      u = false;
      return array;
    }


  }

  //down
  if (event.keyCode == 40 || d == true) {

    for (let X = 0; X < array.length; X++) {
      for (let Y = 0; Y < array[X].length; Y++) {

        if (array[X][Y] != null) {
          array[X][Y].winColor()
          array[X][Y].move_column(array, 'tt', X, Y, +1);
        }
      }
    }

    for (let X = 0; X < array.length; X++) {
      for (let Y = 0; Y < array[X].length; Y++) {
        if (array[X][Y] == null || array[X][Y].value == 'W' || array[X][Y].inBox != true) {
          continue;
        }
        array[X][Y].sleep = 1

      }
    }
    // console.log(d,222);
    if (d == true) {
      d = false;
      return array;
    }
  }

  //left
  if (event.keyCode == 37 || l == true) {
    for (let X = array.length - 1; X >= 0; X--) {
      for (let Y = array[X].length - 1; Y >= 0; Y--) {

        if (array[X][Y] != null) {
          array[X][Y].winColor()

          array[X][Y].move_row(array, 'tt', X, Y, -1)
        }

      }

    }

    for (let X = 0; X < array.length; X++) {
      for (let Y = 0; Y < array[X].length; Y++) {


        if (array[X][Y] == null || array[X][Y].value == 'W' || array[X][Y].inBox != true) {
          // console.log('ignore :');
          continue;
        }
        array[X][Y].sleep = 1

      }
    }

    if (l == true) {
      l = false;
      var copy = _.cloneDeep(array)
      return copy;
    }
  }

  //right
  if (event.keyCode == 39 || r == true) {

    for (let X = 0; X < array.length; X++) {
      for (let Y = 0; Y < array[X].length; Y++) {

        if (array[X][Y] != null) {
          array[X][Y].winColor()
          array[X][Y].move_row(array, 'tt', X, Y, +1)
        }
      }
    }

    for (let X = 0; X < array.length; X++) {
      for (let Y = 0; Y < array[X].length; Y++) {
        if (array[X][Y] == null || array[X][Y].value == 'W' || array[X][Y].inBox != true) {
          continue;
        }
        array[X][Y].sleep = 1
      }
    }
    if (r) {
      r = false;
      var copy = _.cloneDeep(array)
      return copy;
    }
  }
  // console.log(checkWin());
  if (checkWin()) {

    $('#win').css('display', 'block')
    console.log('dn dn dn dn dn dn we have winnerrrrrrrrrrrrr')
    wine = true
  }

  //call get_next_state
  // if(event.keyCode == 39 ||event.keyCode == 37||event.keyCode == 40||event.keyCode == 38)
  // {
  //    get_next_state(array);
  // }
}

function checkWin() {
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

function winner(arr1 = tt, arr2 = ttWin) {
  if (isEqualArray(arr1, arr2) == 0) {
    return true;
  }
  else
    return false;

}

function get_next_state(structureArrayy) {
  var ArrayToStoreStructureNextState = [];
  var dir = [];
  var structureArray = _.cloneDeep(structureArrayy)
  var structureNextState = _.cloneDeep(structureArray)
  // console.log( nextState, 'thisdjsadiohaoifhaeofoieh');

  //up
  // console.log(structureNextState);
  for (let X = structureNextState.array.length - 1; X >= 0; X--) {
    for (let Y = structureNextState.array[X].length - 1; Y >= 0; Y--) {
      if (structureNextState.array[X][Y] != null) {

        structureNextState.array[X][Y].move_column(structureNextState.array, 'structureNextState.array', X, Y, -1)

      }
    }
  }

  for (let X = 0; X < structureNextState.array.length; X++) {
    for (let Y = 0; Y < structureNextState.array[X].length; Y++) {
      if (structureNextState.array[X][Y] == null || structureNextState.array[X][Y].value == 'W' || structureNextState.array[X][Y].inBox != true) {
        // continue;
      }
      else {
        structureNextState.array[X][Y].sleep = 1

      }
      if (structureNextState.array[X][Y] == null || structureNextState.array[X][Y].value == 'W' || structureNextState.array[X][Y].inBox != true) {
        // continue;
      }
      else {

        structureNextState.array[X][Y].sleep = 1
      }

    }
  }
  // 
  // return;
  // console.log(structureNextState.array,array);
  if (isEqualArray(structureNextState.array, structureArray.array) != 0) {
    // console.log(structureNextState);
    // alert(21)
    dir.push('Up')
    ArrayToStoreStructureNextState.push(structureNextState)
  }
  structureNextState = _.cloneDeep(structureArray)
  // structureNextState=array



  //down
  for (let X = 0; X < structureNextState.array.length; X++) {
    for (let Y = 0; Y < structureNextState.array[X].length; Y++) {
      if (structureNextState.array[X][Y] != null) {
        structureNextState.array[X][Y].move_column(structureNextState.array, 'structureNextState.array', X, Y, +1)
      }
    }
  }
  for (let X = 0; X < structureNextState.array.length; X++) {
    for (let Y = 0; Y < structureNextState.array[X].length; Y++) {
      if (structureNextState.array[X][Y] == null || structureNextState.array[X][Y].value == 'W' || structureNextState.array[X][Y].inBox != true) {
        // continue;
      }
      else {
        structureNextState.array[X][Y].sleep = 1

      }
      if (structureNextState.array[X][Y] == null || structureNextState.array[X][Y].value == 'W' || structureNextState.array[X][Y].inBox != true) {
        // continue;
      }
      else {

        structureNextState.array[X][Y].sleep = 1
      }



    }
  }
  // console.log( 'equal is  ',isEqualArray(structureNextState.array,array) );

  if (isEqualArray(structureNextState.array, structureArray.array) != 0) {
    dir.push('Down')

    ArrayToStoreStructureNextState.push(structureNextState)
  }

  structureNextState = _.cloneDeep(structureArray)
  // structureNextState=array






  //right
  // console.log(structureNextState.array, 'array to cheack ');
  for (let X = 0; X < structureNextState.array.length; X++) {
    for (let Y = 0; Y < structureNextState.array[X].length; Y++) {
      // console.log(4); 
      if (structureNextState.array[X][Y] != null) {
        // console.log(structureNextState.array[X][Y],X,Y);
        structureNextState.array[X][Y].move_row(structureNextState.array, 'structureNextState.array', X, Y, +1)
      }
    }
  }
  for (let X = 0; X < structureNextState.array.length; X++) {
    for (let Y = 0; Y < structureNextState.array[X].length; Y++) {
      if (structureNextState.array[X][Y] == null || structureNextState.array[X][Y].value == 'W' || structureNextState.array[X][Y].inBox != true) {
        // continue;
      }
      else {
        structureNextState.array[X][Y].sleep = 1

      }
      if (structureNextState.array[X][Y] == null || structureNextState.array[X][Y].value == 'W' || structureNextState.array[X][Y].inBox != true) {
        // continue;
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
  // structureNextState=array


  //left
  for (let X = structureNextState.array.length - 1; X >= 0; X--) {
    for (let Y = structureNextState.array[X].length - 1; Y >= 0; Y--) {
      if (structureNextState.array[X][Y] != null) {

        structureNextState.array[X][Y].move_row(structureNextState.array, 'structureNextState.array', X, Y, -1)
      }
    }
  }
  for (let X = 0; X < structureNextState.array.length; X++) {
    for (let Y = 0; Y < structureNextState.array[X].length; Y++) {
      if (structureNextState.array[X][Y] == null || structureNextState.array[X][Y].value == 'W' || structureNextState.array[X][Y].inBox != true) {
        // continue;
      }
      else {
        structureNextState.array[X][Y].sleep = 1

      }
      if (structureNextState.array[X][Y] == null || structureNextState.array[X][Y].value == 'W' || structureNextState.array[X][Y].inBox != true) {
        // continue;
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
  // return dir
  // return ArrayToStoreStructureNextState

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

var stackWin = []
var stack = [];
var counter = 0;
var visited = [];
var path
function hideLoader(){
  var loader = document.getElementById("loader");
  loader.style.display = "none";
}
function displayLoader(){
  var loader = document.getElementById("loader");
  loader.style.display = "block";
  
}

function DFS(Structurearray = ttStructure, dir = '') {



  var StructureCopy = _.cloneDeep(Structurearray);
  // console.log(Struct ureCopy.array);
  // StructureCopy.perant = perants

  if (stack.length == 0) {
    stack.push(StructureCopy);
    visited.push(StructureCopy);
    // stackWin.push(array);
  }
  else {
    for (let i = 0; i < stack.length; i++) {
      if (isEqualArray(StructureCopy.array, stack[i].array) == 0) {
        return false;
      }
    }

    counter++;
    stack.push(StructureCopy);
    visited.push(StructureCopy);
  }


  if (isEqualArray(StructureCopy.array, ttWin) == 0) {
    hideLoader()
    for (let i = 0; i < stack.length; i++) {
      stackWin.push(stack[i])
    }
     path = [tt, ...StructureCopy.perant,ttWin]

    console.log(path, 'path is');
    console.log(path.length, 'path');
    console.log(stackWin.length, 'visitied');
    console.log('win');
    document.getElementById('path').innerHTML=`path length is ${path.length} `

    drawGamee(path);

    return true
  }

  else {
    // console.log(counter);
    var result = get_next_state(StructureCopy);

    var copyResualt = _.cloneDeep(result);
    // console.log(copyResualt[1],'get next state ');

    for (let i = 0; i < copyResualt[0].length; i++) {


      copyResualt[0][i].perant = (StructureCopy.perant?.length > 0 ? [...StructureCopy.perant, StructureCopy.array] : [StructureCopy.array])

      var dfs = DFS(copyResualt[0][i], copyResualt[1][i]);


      if (dfs == true) {
        return true;
      }
    }

    //  DFS(tt,'')
    // console.log('----------- END DFS -----------');
    return false;

  }
  stack.pop();
  return true;

}

var counter = 0;
var queue = new Queue()
var bfsCounter = 0;
var visited = [];
function BFS(structureArrayy) {

  var isVi = 0
  var structureArray = _.cloneDeep(structureArrayy);

  var hashedArray ;hashedArray = hashArray(structureArray.array);
  for (let i = 0; i < visited.length; i++) {
    if (hashedArray==visited[i]) {
      isVi++;
      break;
    }    
  }
  if (isVi == 0) {
    visited.push(hashedArray)
  }

  visited.push(structureArray.array)

  if (isEqualArray(structureArray.array, ttWin) == 0) {
    hideLoader()
    var path = [...structureArray.perant, structureArray.array,ttWin]
    // console.log(path,'path is');
    console.log(path, 'path is');
    console.log(path.length, 'path');
    console.log(bfsCounter, 'visitied');

    // alert('winner ')
    console.log('win');
    document.getElementById('path').innerHTML=`path length is ${path.length} `

    drawGamee(path);

    return true
  }
  // visited.push(structureArray.array)
  var sons = get_next_state(structureArray);
  for (let i = 0; i < sons[0].length; i++) {


    sons[0][i].perant = (structureArray.perant?.length > 0 ? [...structureArray.perant, structureArray.array] : [structureArray.array])
    // for (let j = 0; j < visited.length; j++) {
    //   var c = 0
    //   if (isEqualArray(sons[0][i].array, visited[j]) == 0) {
    //     c++;
    //     break;
    //   }
    // }
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

var pQueue = new PriorityQueue()
// var hashedArray = objectHash.sha1('1');

// visited.push(hashedArray)
function a (){

  if (isEqualArray(tt, ttWin) == 0) {
    // if (hashedTTWin==hashedTT) {
return true 
    }
    return false 
}
var s = 0
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

function UCS(structureArrayy) {

  var structureArray = _.cloneDeep(structureArrayy);
  var isVi = 0

  var hashedArray ;hashedArray = hashArray(structureArray.element.array);
  for (let i = 0; i < visited.length; i++) {
    if (hashedArray==visited[i]) {
      isVi++;
      break;
    }    
  }
  if (isVi == 0) {
    visited.push(hashedArray)
  }

  // if (isEqualArray(structureArray.element.array, ttWin) == 0) {
    if (hashedTTWin==hashedArray) {
      hideLoader()
    var path = [...structureArray.element.perant, structureArray.element.array,]
    console.log(path, 'path is');
    console.log(path.length, 'path');
    console.log(visited.length, 'visitied');
    console.log(visited, 'visitied node ');
    console.log(structureArray.element.cost, 'cost');
    console.log('win');
    document.getElementById('path').innerHTML=`path length is ${path.length} `

    drawGamee(path);

    return true
  }

  var sons = get_next_state(structureArray.element);
  for (let i = 0; i < sons[0].length; i++) {
    sons[0][i].perant = (structureArray.element.perant?.length > 0 ? [...structureArray.element.perant, structureArray.element.array] : [structureArray.element.array])
    sons[0][i].cost = structureArray.element.cost + 1;

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

function aStar(structureArrayy) {


  var structureArray = _.cloneDeep(structureArrayy);
  var isVi = 0




  if (isEqualArray(structureArray.element.array, ttWin) == 0) {
    hideLoader()
    visited.push(structureArray.element.array)
    var path = [...structureArray.element.perant, structureArray.element.array,]
    console.log('path is ',path );
    console.log(path.length, 'path');
    var copyVisited = _.cloneDeep(visited)
    console.log(copyVisited, 'visitied node ');
    console.log(copyVisited.length, 'visitied');
    console.log(structureArray.element.cost, 'cost');
    console.log('--------------------------------------------------');
    document.getElementById('path').innerHTML=`path length is ${path.length} `
    
    drawGamee(path);

    return true
    visited.pop()
  }
 

  // visited.push(structureArray.array)
  var sons = get_next_state(structureArray.element);
  // for (let j = 0; j < visited.length; j++) {
    // if (isEqualArray(structureArray.element.array, visited[j]) == 0) {
      // isVi++;
      // break;
    // }
  // }
  // if (isVi == 0) {
    // visited.push(structureArray.element.array)
  // }
  var hashedArray ;hashedArray = hashArray(structureArray.element.array);
  for (let i = 0; i < visited.length; i++) {
    if (hashedArray==visited[i]) {
      isVi++;
      break;
    }    
  }
  if (isVi == 0) {
    visited.push(hashedArray)
  }

  for (let i = 0; i < sons[0].length; i++) {
    sons[0][i].perant = (structureArray.element.perant?.length > 0 ? [...structureArray.element.perant, structureArray.element.array] : [structureArray.element.array])
    sons[0][i].cost = structureArray.element.cost + 1;
    sons[0][i].h = heuristic(sons[0][i].array, ttWin);
      // for (let j = 0; j < visited.length; j++) {
        // var c = 0
        // if (isEqualArray(sons[0][i].array, visited[j]) == 0) {
          // c++;
          // break;
        // }
      // }
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

  if (pQueue.isEmpty()) {
    var path = [...structureArray.element.perant, structureArray.element.array]

    console.log('path is ',path );
    console.log(path.length, 'path');
    // console.log(visited, 'visitied node ');
    console.log(visited.length, 'visitied');
    console.log(structureArray.element.cost, 'cost');
    console.log('win');

    return true
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

function drowDFS() {

  console.log(stackWin);
}