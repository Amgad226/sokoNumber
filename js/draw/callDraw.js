var boolean= true ; 

function drawGame() {
    if(boolean){
      clearScreen();
      requestAnimationFrame(drawGame);
      for (let i = 0; i < outputs.length; i++) {
        outputs[i].draw();        
      }
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].draw();        
      }
      for (let i = 0; i < walls.length; i++) {
        walls[i].draw();        
      }
    }
  }    
  drawGame();