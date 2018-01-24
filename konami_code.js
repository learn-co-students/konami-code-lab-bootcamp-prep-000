const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;
 
function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);
 
  if (key === code[index]) {
    index++;
 
    if (index === code.length) {
      alert("I am the game genie, what is your wish?");
 
      index = 0;
    }
  } else {
    index = 0;
  }
}

function init() {
  var body = document.querySelector('body')
  body.addEventListener("keydown", onKeyDownHandler)
}
init()