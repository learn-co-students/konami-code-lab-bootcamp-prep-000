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
  var code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
  var index = 0
  
  function konamiCode(combination) {
    var key = combination.key
    if (key === code[index]) {
      index ++
      if(index === code.length) {
        alert("Code entered successfully!")
        
        index = 0
      }
    }
    else {
      index = 0
    }
  }
  
  document.body.addEventListener('keydown', konamiCode)
}