const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  document.body.addEventListener("keydown", onKeyDownHandler)
}
let index = 0;
function onKeyDownHandler(e) {
  let ar=[];
  const key = e.key;
  if (key === codes[index]) {
    index++;
   if (index === codes.length) {
    alert();
    index = 0;
  }
  }else {
    index = 0;
  }
}

function alert() {
  alert ("Konami Code");
}
