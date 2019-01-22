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

let index = 0;

function onKeyDownHandler(e){
  const key = e.key
  console.log(key)
  if (key === codes[index]) {
    index++
    if (index === codes.length) {
      console.log("Hurray!")
      alert ("Hurray!")
      index = 0
    }
  }
  else {
    index = 0;
  }
}

function init() {
  // your code here
  alert("hello!")
  document.body.addEventListener('keydown', onKeyDownHandler, true)
}
