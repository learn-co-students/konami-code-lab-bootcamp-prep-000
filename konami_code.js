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

var code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0;

function init() {
  // your code here
  var body = document.body
  
  body.addEventListener('keydown', function(e) {
    var key = parseInt(e.detail || e.which)
    
    if(key === code[index]) {
      index++
      
      if(index === code.length -1) {
        index = 0
        
        alert("Contrats!")
      } else {
        index = 0
      }
    }
  })
}

init()
