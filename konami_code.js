const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let body = document.body
var index = 0
const key = parseInt(e.which || e.detail);

function keyEvent(e) {
  if (key === code[index]) {
    index++
    if (index === code.length -1) {
  } alert("You did it!!");
} else {
  index = 0;
}
}

function init(e) {
   body.addEventListener("keydown", keyEvent);
}
