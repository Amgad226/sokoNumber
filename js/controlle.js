// Add touch event listeners
const element = canvas

// Add touch event listeners
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;
element.addEventListener("touchstart", function(event) {
  touchStartX = event.touches[0].clientX;
  touchStartY = event.touches[0].clientY;
}, false);
element.addEventListener("touchend", function(event) {
  touchEndX = event.changedTouches[0].clientX;
  touchEndY = event.changedTouches[0].clientY;
  handleSwipe();
}, false);

function handleSwipe() {
  // Calculate the distance and direction of the swipe in both dimensions
  const deltaX = touchEndX - touchStartX;
  const deltaY = touchEndY - touchStartY;
  let directionX = "";
  let directionY = "";

  // Determine the X direction of the swipe
  if (Math.abs(deltaX) > 30) {
    directionX = deltaX < 0 ? "left" : "right";
  }

  // Determine the Y direction of the swipe
  if (Math.abs(deltaY) > 30) {
    directionY = deltaY < 0 ? "up" : "down";
  }

  // Do something based on the direction of the swipe
  if (directionX === "left") {
    // Handle swipe left
    event={
      keyCode:37
    }
    userplay(event)
    console.log("Swiped left");
  } else if (directionX === "right") {
    event={
      keyCode:39
    }
    userplay(event)
    // Handle swipe right

    console.log("Swiped right");
  } else if (directionY === "up") {
    // Handle swipe up
    event={
      keyCode:38
    }
    userplay(event)
    console.log("Swiped up");
  } else if (directionY === "down") {
    event={
      keyCode:40
    }
    userplay(event)    // Handle swipe down
    console.log("Swiped down");
  }
}



document.body.addEventListener("keyup", userplay);
document.body.addEventListener("keyup", function(event){
  if(event.keyCode == 39 ||event.keyCode == 37||event.keyCode == 40||event.keyCode == 38){
    var lastStep=_.cloneDeep(tt);
    allSteps.push(lastStep)
  }
});

