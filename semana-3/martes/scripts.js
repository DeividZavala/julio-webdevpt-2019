function perrito() {
  console.log(this);
}
perrito();

const name = "Ivan";
const ivan = {
  name,
  lastName: "Hernandez",
  age: 28,
  gender: "male",
  juan: "david",
  ataca(name) {
    console.log(this);
    console.log(`jjjayyyyaaaaaaa!!!!!! 👊🏻 te peguo ${this.name} ${name}`);
  }
};
ivan["ataca"]("foggy");

const david = { ...ivan, name: "👠natacha", blood_type: "Plomo negativo" };
console.log("ivan", ivan);
console.log("david", david);

const { name: username, blood_type } = david;
console.log("perro", username, blood_type);

const arr = ["david"];

const newArr = arr;
arr[0] = "ivan";
console.log(arr);

const manuel = david;
manuel.name = "sacha";
console.log(ivan);

/* const perro = "juan";
console.log(ivan.key, ivan["juan"]);

ivan.loquesea = "algo";
console.log(ivan);

ivan["perro"] = "valentina elizalde";
console.log(ivan);

ivan.name = "Ivan el terrible";
console.log(ivan);

delete ivan.juan;
console.log(ivan);*/

function Person(name, lastName, age) {
  this.name = name;
  this.lastName = lastName;
  this.age = age;
  this.sayHi = function() {
    console.log(
      `Hola soy ${this.name} y tengo ${this.age}, como la wachas morro`
    );
    return `Hola soy ${this.name} y tengo ${this.age}, como la wachas morro`;
  };
}

const emmanuel = new Person("emmanuel", "sanchez", 27);
emmanuel.sayHi();
console.log(emmanuel);
const angel = new Person("angel", "melendez", 31);
angel.sayHi();

class Animal {
  constructor(name, isInDanger) {
    this.name = name;
    this.isInDanger = isInDanger;
  }

  getIsInDanger() {
    console.log(this.isInDanger);
    return this.isInDanger;
  }
}

const leon = new Animal("leon", false);
console.log(leon);
leon.getIsInDanger();

class Character {
  constructor(health, damage, x, y, level) {
    this.health = health;
    this.damage = damage;
    this.x = x;
    this.y = y;
    this.level = level;
  }

  attack() {
    console.log("jaiiiaaaa! 👊🏻");
  }
}

class Player extends Character {
  constructor(health, damage, x, y, level, name, weapon) {
    super(health, damage, x, y, level);
    this.name = name;
    this.weapon = weapon;
  }
}

const morro = new Player(100, 20, 0, 0, 100, "morro", "MacBook Pro");
console.log(morro.attack());
