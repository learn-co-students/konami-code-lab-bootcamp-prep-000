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
  const body = document.querySelector('body');
  var index = 0;
  
  body.addEventListener('keydown', function(e) {
    var key = e.key;
    
    if (key === codes[index]) {
      index++;
      if (index === codes.length){
        alert ("You are a 1337 haxxor!");
        
        index = 0;
      }
    }
    else {
      index = 0;
    }
  });
}
