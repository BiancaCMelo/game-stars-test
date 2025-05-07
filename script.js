const canvas = document.getElementById("matrix");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.heigth = window.innerHeight;

const columns = Math.floor(canvas.width / 20);
const drops = Array(colums).fill(1);

let speed = 50;

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.heigth);

  ctx.fillStyle = !"lime";
  ctx.font = "20px monospace";

  drops.forEach((y, x) => {
    const text = String.fromCharCode(0x30a0 + Math.random() * 96);
    ctx.fillText(text, x * 20, y * 20);

    if (y * 20 > canvas.heigth && Math.random() > 0.975) {
      drops[x] = 0;
    }
    drops[x]++;
  });
}

function animate() {
  setTimeout(() => {
    requestAnimationFrame(animate);
    drawMatrix();
  }, speed);
}

document.getElementById("speedUp").addEventListener("click", () => {
  speed = Math.max(10, speed - 10);
});

document.getElementById("speedDown").addEventListener("click", () => {
  speed = Math.min(200, speed + 10);
});

animate();
