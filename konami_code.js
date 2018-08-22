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

var index = 0

function init() {
   var index = 0
   
  document.body.addEventListener('keydown', function(e){
    var key = e.key
     if (key === codes[index]) {
      index++;
      if (index === codes.length) {
        index = 0;
        alert("Congrats!");
      }
  } else {
    index = 0;
  }
   });
}

