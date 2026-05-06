const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let car = { x: 180, y: 500, w: 40, h: 70 };
let keys = {};

document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);

function drawCar() {
  ctx.fillStyle = "red";
  ctx.fillRect(car.x, car.y, car.w, car.h);
}

function update() {
  if (keys["ArrowLeft"] && car.x > 0) car.x -= 5;
  if (keys["ArrowRight"] && car.x < 360) car.x += 5;
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  update();
  drawCar();

  requestAnimationFrame(gameLoop);
}

gameLoop();
console.log("Game running");