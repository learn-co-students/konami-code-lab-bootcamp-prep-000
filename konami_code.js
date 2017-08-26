const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]



let i = 0;

function onKeyDown(event) {
  const key = parseInt(event.detail || event.which);
  if (key === code[i]) {
    i++;
    if (i === code.length) {
       alert ("Hurray!");
       i = 0;
    }
  } else {
    i = 0;
  }
}

function init() {
  const body = document.querySelector("body")
  body.addEventListener("keydown", onKeyDown);
}
