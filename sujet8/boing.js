let width, height;
let context;
let balls;
let audioElementIndex = -1;

function element(id) {
  return document.getElementById(id);
}

function boing() {
  audioElementIndex = (audioElementIndex + 1) % 3;
  let audio = element("audio" + (audioElementIndex + 1));
  audio.currentTime = 0;
  audio.play();
}

function moveBall(ball) {
  // 3)
  // a) modifier la valeur des champs x et y en ajoutant un décalage (valeurs dx et dy)
  ball.x += ball.dx;
  ball.y += ball.dy;
  // b) faire demi-tour si la balle sort du champ horizontal (x)
  if(ball.x >= width){
    ball.dx*= -1;
  }
  if(ball.x < 0){
    ball.dx*= -1;
  }

  if(ball.y >= height){
    ball.dy*= -1;
  }
  if(ball.y < 0){
    ball.dy*= -1;
  }

  // c) faire demi-tour si la balle sort du champ vertical (y)
  // d) a chaque demi-tour, appeler la fonction boing
}

function drawBall(ball) {
  context.beginPath();
  context.fillStyle = ball.fillColor;
  context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  context.fill();
}

function drawFrame() {
  context.clearRect(0, 0, width, height);
  for (let ball of balls) {
    moveBall(ball);
    drawBall(ball);
  }
  setTimeout(drawFrame, 20); // Draw the next frame in 20 milliseconds.
}

function addBall() {
  // 2)
  // a) récuperer la taille et la couleur de la balle
  let size = document.getElementById("ballSize").value;
  let color = document.getElementById("ballColor").value;
  // b) créer un objet pour la balle avec 6 champs :x, y, dx, dy, radius, strokeColor, fillColor
  let ball = {
    "x": 0,
    "y": 0,
    "dx": 7,
    "dy": 4,
    "radius": size,
    "strokeColor": color,
    "fillColor": color
  }
  // b) ajouter l'objet au tableau 'balls'
  balls.push(ball);
  // d) lancer la musique de fond si c'est la première balle
}

function clearCanvas() {
  balls = [];
  element("backgroundMusic").pause(); // Stop background music
}

document.addEventListener("DOMContentLoaded", (event) => {
  let canvas = element("canvas");
  width = canvas.width;
  height = canvas.height;
  context = canvas.getContext("2d");
  balls = [];
  // 1) enregistrer les écouteurs pour les deux boutons
  setTimeout(drawFrame, 20);
});

document.getElementById("addBall").addEventListener("click",()=>{
  addBall();
});
document.getElementById("clearCanvas").addEventListener("click",()=>{
  clearCanvas();
})