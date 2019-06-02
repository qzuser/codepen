var snake = [66, 65, 64];
var direction = 1;
var food = 250;
var canv = document.getElementById("canv").getContext("2d");
var btn = document.getElementById("btn");
function ready(){
  for (let i = 0; i < 400; i++) {
    draw(i, '#313131')
  }
  draw(66, 'blue');
  draw(65, 'blue');
  draw(64, 'blue');
  draw(food, 'yellow')
}

function draw(points, color){
  canv.fillStyle = color;
  canv.fillRect((points%20)*20+1, Math.floor(points/20)*20+1,18,18);
}

function handledirection(e){
  if(direction == 1 || direction == -1){
    if(e.keyCode == 38){
      direction = -20;
    }
    else if(e.keyCode == 40){
      direction = 20;
    }
  }
  else if(direction == 20 || direction == -20){
    if(e.keyCode == 37){
      direction = -1;
    }
    else if(e.keyCode == 39){
      direction = 1;
    }
  }
}

function run(){
  var n = snake[0] + direction;
  snake.unshift(n);
  if(snake.indexOf(n, 1) !== -1 ||
    n > 399 || n < 0 
  ){
    ready();
  }
  draw(n, "blue");
  if(n == food){
    do{
      food = Math.floor(Math.random()*400);
    } while(snake.indexOf(food) > 0);
    draw(food, "yellow");
  }
  else{
    draw(snake.pop(), '#313131');
  }
  setTimeout(arguments.callee, 500);
}

ready();
btn.addEventListener("click", run);
window.addEventListener("keydown", handledirection, false);
