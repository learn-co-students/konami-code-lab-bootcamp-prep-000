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
  function konami(e) {
    var codescopy = codes
    while(e.key == codescopy[0]) {
      codescopy.shift()
      if (codescopy.length === 0) {
      alert('Congrats!')
    }
    else {
      codescopy = codes
    }
    }
  }


    
    document.body.addEventListener('keydown', konami)
}
