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
  // your code here
  var body = document.querySelector('body')
  var index = 0
  
  body.addEventListener('keydown', (event) => {
    const keyName = event.key;
    
    if(keyName === codes[index]) {
      index++
      
      if(index === codes.length) {
        window.alert("HURRAY!")
        index = 0
      }
    } else {
      index = 0
    }
  });
}