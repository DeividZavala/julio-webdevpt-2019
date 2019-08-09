$(document).ready(() => console.log("perro"));

// jquery
$("a");
$(".perro");
$("#perro");
// vanillajs
document.getElementsByTagName("a");

const perro = document.getElementById("inpit");
const btn2 = document.getElementById("picale");

btn2.onclick = function() {
  console.log(perro.value);
};

const inputValue = $("#inpit");
const div = $("#test");

div.addClass("test");
div.addClass("test");

const btn = $("#picale").on("click", () => {
  console.log(inputValue.val());
  div.toggleClass("back");
});

console.log(inputValue, btn);
