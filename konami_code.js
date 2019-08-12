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
   var index = 0
document.body.addEventListener("keydown", (e) => {
  if (codes[index] === e.key) {
    index += 1
  } 
  else {
    idx = 0 
  }
  if (index === 10) {
    alert("Hurray!");
    index = 0 
  }
})
}

