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
  let index = 0;
  
  document.addEventListener('keydown', (e) => {
    var keyPressed = e.key;
    if (keyPressed === codes[index]){
      index += 1;
      if (index === codes.length){
        window.alert('Hurray!');
        index = 0;
      }
    }else{
        index = 0;
      }
  })
}

init();
