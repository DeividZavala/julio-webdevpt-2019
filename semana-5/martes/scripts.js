const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.strokeStyle = "blue";
ctx.fillRect(100, 0, 200, 200);
ctx.clearRect(125, 25, 150, 150);
ctx.strokeRect(150, 50, 100, 100);
ctx.fillStyle = "green";
ctx.fillRect(175, 75, 50, 50);

ctx.clearRect(0, 0, canvas.width, canvas.height);

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(400, 200);
ctx.lineTo(0, 200);
ctx.stroke();
ctx.fill();

ctx.clearRect(0, 0, canvas.width, canvas.height);

ctx.beginPath();
ctx.moveTo(75, 50);
ctx.lineTo(100, 75);
ctx.lineTo(100, 25);
ctx.stroke();

ctx.clearRect(0, 0, canvas.width, canvas.height);

ctx.beginPath();
// ctx.arc(x, y, radius, startAngle, endAngle)
ctx.arc(100, 100, 75, 0, (Math.PI / 180) * 270);
// ctx.lineWidth = 20;
ctx.strokeStyle = "green"; // !
ctx.stroke();
ctx.clearRect(0, 0, canvas.width, canvas.height);

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.lineTo(x, y + height - radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.lineTo(x + width - radius, y + height);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.lineTo(x + width, y + radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.lineTo(x + radius, y);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
}

roundedRect(ctx, 12, 12, 150, 150, 170);

ctx.clearRect(0, 0, canvas.width, canvas.height);

ctx.strokeText("que onda perro", 20, 20, 100);

ctx.clearRect(0, 0, canvas.width, canvas.height);

const image = new Image();
image.src =
  "https://i.pinimg.com/originals/5b/d9/b5/5bd9b57818901ff302ca870c89db026d.jpg";

image.onload = function() {
  ctx.drawImage(image, 20, 20, 70, 100);
};
