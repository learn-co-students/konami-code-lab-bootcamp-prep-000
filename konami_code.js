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

function init(e) {
  // your code here
}

function onKeyDownHandler(e) {
  const key = e.key
  if (key === codes[index]) {
      index++;
      
      if (index === codes.length) {
        alert("Hurray!");
        index = 0
      }  
  }
  else{
      index = 0
    }
}

var body = document.querySelector('body')
body.addEventListener('keydown', onKeyDownHandler)

