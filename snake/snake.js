var box = document.getElementById("canv").getContext("2d");
function draw(point, color) {
  box.fillStyle = color;
  box.fillRect((point % 20) * 20 + 1, ~~(point / 20) * 20 + 1, 18, 18);
}
(function() {
  ready();
})();
var snake;
var direction;
var n;
var food;
function ready() {
  for (var i = 0; i < 400; i++) {
    draw(i, "#313131");
  }
  snake = [66, 65, 64];
  direction = 1;
  food = 344;
  draw(food, "yellow");
  draw(66, "#00b7ee");
  draw(65, "#00b7ee");
  draw(64, "#00b7ee");
}
document.onkeydown = function(e) {
  if (direction == 1 || direction == -1) {
    if (e.keyCode == 38) {
      direction = -20;
    }
    if (e.keyCode == 40) {
      direction = 20;
    }
  }
  if (direction == 20 || direction == -20) {
    if (e.keyCode == 39) {
      direction = 1;
    }
    if (e.keyCode == 37) {
      direction = -1;
    }
  }
};
function run() {
  n = snake[0] + direction;
  snake.unshift(n);
  if (
    snake.indexOf(n, 1) > 0 ||
    n < 0 ||
    n > 399 ||
    (direction == -1 && n % 20 == 19) ||
    (direction == 1 && n % 20 == 0)
  ) {
    ready();
    document.getElementById("btn").removeAttribute("diabled");
    return alert("游戏结束");
  }
  draw(n, "#00b7ee");
  if (n == food) {
    do {
      food = ~~(Math.random() * 400);
    } while (snake.indexOf(food) > 0);
    draw(food, "yellow");
  } else {
    draw(snake.pop(), "#313131");
  }
  setTimeout(arguments.callee, 500);
}
