const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// const image = new Image();
// image.src = "https://bit.ly/2L7yH3f";
// image.onload = function() {
//   ctx.drawImage(image, 100, 100, 100, 120);
// };

const mariosImages = {
  first: "https://bit.ly/2L7yH3f",
  second: "https://bit.ly/2L3ikoe"
};

// class Item {
//   constructor(x, y, width, height, image) {
//     this.x = x;
//     this.y = y;
//     this.width = width;
//     this.height = height;
//     this.image = image;
//   }

//   draw() {
//     ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
//   }
// }

// class Background extends Item {
//   constructor(x, y, width, height, img = "https://bit.ly/2TQwFIY") {
//     let image = new Image();
//     image.src = img;
//     super(x, y, width, height, image);
//   }
// }

class Background {
  constructor(x, y, width, height, img) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.imagen = new Image();
    this.imagen.src = img;
  }

  draw() {
    // restamos en x para moverlo
    this.x -= 2;
    // en caso de alcanzar el final de la imagen reseteamos x
    if (this.x < -canvas.width) this.x = 0;
    ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height);
    // dibujamos una segunda imagen al final de la primera
    ctx.drawImage(
      this.imagen,
      this.x + this.width,
      this.y,
      this.width,
      this.height
    );
  }
}

class Character {
  constructor(x, y, width, height, imgs) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image1 = new Image();
    this.image2 = new Image();
    this.image1.src = imgs.first;
    this.image2.src = imgs.second;
    this.image = this.image1;
  }

  collision(item) {
    return (
      this.x < item.x + item.width &&
      this.x + this.width > item.x &&
      this.y < item.y + item.height &&
      this.y + this.height > item.y
    );
  }

  draw() {
    if (this.y < 190) this.y += 4;
    if (frames % 10 === 0) {
      this.image = this.image === this.image1 ? this.image2 : this.image1;
    }
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

class Enemy {
  constructor() {
    //de principio el enemigo aparece fuera del canvas
    this.x = canvas.width;
    //el y del enemigo es el mismo de mario
    this.y = 212;
    this.width = 70;
    this.height = 100;
    this.image = new Image();
    this.image.src = "https://bit.ly/2BAISL4";
  }

  draw() {
    //el y del enemigo es el mismo de mario
    if (frames % 10) this.x -= 5;
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

const Mario = new Character(100, 190, 100, 120, mariosImages);
const background = new Background(
  0,
  0,
  canvas.width,
  canvas.height,
  "https://bit.ly/2TQwFIY"
);

let frames = 0;
let interval = setInterval(function() {
  frames++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  background.draw();
  Mario.draw();
  generateEnemies();
  drawingEnemies();
}, 1000 / 60);

addEventListener("keydown", function(event) {
  if (event.keyCode === 32) {
    Mario.y -= 80;
  }
  if (event.keyCode === 37) {
    Mario.x -= 30;
  }
  if (event.keyCode === 39) {
    Mario.x += 30;
  }
});

var enemies = [];

function generateEnemies() {
  if (frames % 100 == 0 || frames % 60 == 0 || frames % 170 == 0) {
    // creamos una instancia de Enemy y la agregamos aun arreglo
    let enemy = new Enemy();
    enemies.push(enemy);
  }
}

function drawingEnemies() {
  enemies.forEach(function(enemy) {
    enemy.draw();
    if (Mario.collision(enemy)) {
      console.log("ay perro te moriste");
      clearInterval(interval);
    }
  });
}
