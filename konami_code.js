const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var body = document.querySelector("body");
var index = 0;

function init() {
}

body.addEventListener("keydown", function(e){
  const key = parseInt(e.location || e.detail || e.which);

  if (key === code[index]) {
  index++;

  if (index === code.length) {
    alert("Hurray!");

    index = 0;
  }
} else {
  index = 0;
}
});
