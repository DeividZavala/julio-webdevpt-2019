// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");
// let frames = 0;

// const sprites = {
//   right: "images/ezgif.com-gif-maker.png"
// };

// class Character {
//   constructor() {
//     this.image = new Image();
//     this.image.src = sprites.right;
//     this.sx = 0;
//     this.sy = 0;
//     this.sw = 50;
//     this.sh = 50;
//     this.x = 0;
//     this.y = 0;
//   }

//   draw() {
//     if (this.sx > 500) this.sx = 0;
//     ctx.drawImage(
//       this.image,
//       this.sx,
//       this.sy,
//       this.sw,
//       this.sh,
//       this.x,
//       this.y,
//       50,
//       50
//     );
//     if (frames % 2 === 0) {
//       this.sx += 50;
//     }
//   }
// }

// const deivid = new Character();

// const update = () => {
//   frames++;
//   ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
//   deivid.draw();
// };

// const interval = setInterval(update, 1000 / 60);

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let frames = 0;

const sprites = {
  running: "images/ezgif.com-gif-maker.png"
};

class Character {
  constructor() {
    this.image = new Image();
    this.image.src = sprites.running;
    this.x = 0;
    this.y = 0;
    this.sx = 0;
    this.sy = 0;
    this.sw = 200;
    this.sh = 200;
  }

  draw() {
    if (this.sx > 2200) this.sx = 0;
    ctx.drawImage(
      this.image,
      this.sx,
      this.sy,
      this.sw,
      this.sh,
      this.x,
      this.y,
      60,
      60
    );
    if (frames % 2 === 0) this.sx += 200;
  }
}

const mario = new Character();

const update = () => {
  frames++;
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
  mario.draw();
};

const interval = setInterval(update, 1000 / 60);
