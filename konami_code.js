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
  document.body.addEventListener('keydown', handleEvent)
}

var index = 0
handleEvent = (event) => {
  const key = event.key
  
  if (key === codes[index]) {
    index++
    if (index == codes.length) {
      alert("Hurray")
      index = 0
    }
  }else {index = 0}
}


init()