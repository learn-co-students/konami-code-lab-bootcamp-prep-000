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
  var body = document.querySelector('body');
  var index = 0;
  body.addEventListener('keydown', function(e) {
    const key = e.key;
    if (key === codes[index]) {
      index++;
      
      if (index === codes.length) {
        window.alert("Hurray!");
        
        index = 0;
      }
    }
    else {
      index = 0;
    }
  });
}
