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
let index = 0

function onKeyDownHandler(e) {
  const key = e.key
  if(key === codes[index]) {
    index++
  }
  else {
    index = 0
  }
  if(index === codes.length) {
    index = 0
    alert("Hurray!")
  }
}

function init() {
  // your code here
  var main = document.querySelector("body")
  main.addEventListener("keydown", onKeyDownHandler, false)
}
