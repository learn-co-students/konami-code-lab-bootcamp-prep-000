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
 var page = document.body;
  var keysPressed = [];
  page.addEventListener('keydown', function(event) {
    keysPressed.push(event.key);
    (keysPressed[0] === codes[0]) ? compare(keysPressed) : keysPressed.shift();
  });
}

function compare(array) {
  var result;
  if (array.length === codes.length) {
    for (var i = 0; i < codes.length;) {
      array[i] === codes[i] ;
      i++;
    }    
    alert('Congrats!');
  } 
}