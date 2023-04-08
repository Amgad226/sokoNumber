
function drawGamee(path) {
  setTimeout(() => {
    var loader = document.getElementById("algo-next");
    loader.style.display = "block";
  }, 1500);
 
    boolean=false
    clearScreen();
    for (let i = 0; i < path.length; i++) {
      const currentPath = path[i];
      setTimeout(function() {
        clearScreen();
        drowTT(currentPath);
      }, i * 300);
    }
}

    