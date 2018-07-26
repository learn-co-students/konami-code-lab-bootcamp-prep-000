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
  document.body.addEventListener('keydown', function onKeyDownHandler(e) {
    const key = e.key;
    
    if (key === codes[index]) {
      console.log(e.key)
      index++;
      console.log(index);
      if (index === codes.length) {
        window.alert("Hurray!");
        
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}
init();