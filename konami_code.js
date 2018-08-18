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

const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0;

function init() {
  // your code here
  var body = document.body
  
  body.addEventListener('keydown', function(e) {
    var key = parseInt(e.detail || e.key)
    
    if(key === konamiCode[index]) {
      index++
      
      if(index === konamiCode.length -1) {
        
        alert("Hurray!")
        index = 0
      } else {
        index = 0
      }
    }
  })
}
