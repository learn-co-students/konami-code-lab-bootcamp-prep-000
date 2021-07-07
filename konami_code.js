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
  document.body.addEventListener('keydown', onKeyDown)
}

let index = 0

function onKeyDown(e) {
  if ( e.key === codes[index]) {
    console.log("+1")
    index++
    
    if (index === codes.length) {
      alert('Success! Extra lives!')
      index = 0
    }
  } else {
    index = 0
  }
}

