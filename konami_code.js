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

function init(){

var i = 0;

document.body.addEventListener('keydown', function(e) {

  var key = e.key;

  var requiredKey = codes[i];

  if (key == requiredKey) {
    
    i++;

    if (i == codes.length) {
      alert("You did it!!!");
      i = 0;
    }
  } else {
    i = 0;
  }
});
}
