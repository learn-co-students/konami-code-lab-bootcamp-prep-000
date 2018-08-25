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

var index = 0;

function init() {
  document.body.addEventListener('keydown', kbdHandler);
}
 
function kbdHandler(e) {
  var key = e.key;
  if (key === codes[index]) {
    index ++;
    
    if (index === codes.length) {
      alert("Hurray!");
      
      index = 0;
    } 
    return true
  } else {
    index = 0;
    return false
  }
}
