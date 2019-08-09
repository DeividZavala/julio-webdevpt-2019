const btn = $("button");
btn.on("click", function() {
  $("div").fadeToggle(1000);
});

$("div").click(function() {
  $(this).fadeOut(1000, function() {
    console.log("termine");
  });
});

$("input").on("keydown", function(e) {
  if (e.keyCode === 80) console.log($(this).val());
});
// $("input").change()

document.getElementById("perro").addEventListener("click", function() {
  console.log("perro");
});
