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

function init() {
  // your code here
  var body = document.body;
  
  body.addEventListener('keydown', onKeyDownHandler);
}

var onKeyDownHandler = function(e) {
  const key = e.key;
  
  if (key === codes[index]) {
    index++;
    
    if (index === codes.length) {
      alert("You Win!");
      index = 0;
    }
  } else {
    index = 0;
  }
}