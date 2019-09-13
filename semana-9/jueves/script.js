const chalk = require("chalk");

let val1 = 10;
let val2 = 6;
let result = val1 + val2;

console.log(
  chalk.green(`La suma de los valores es igual a `) +
    chalk.white.bgRed(`${result}`)
);
