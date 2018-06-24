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
  var index = 0;
  document.body.addEventListener('keydown', function (e) {
    var key = e.key;
    if (codes[index] === key){
      index++;
      if (index === codes.length){
        window.alert("You win!");
        index = 0;
      }
    }
    else {
      index = 0;
    }
  });
}
