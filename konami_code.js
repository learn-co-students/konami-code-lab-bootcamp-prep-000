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

var values = {
  "ArrowUp": 38,
  "ArrowDown": 40,
  "ArrowLeft": 37,
  "ArrowRight": 39,
  "a": 65,
  "b": 66
}

function init() {
  // your code here
  body = document.querySelector('body')
 
 var index = 0;
  body.addEventListener('keydown', function(e) {
    if(values[codes[index]] === e.which){
      index++;
      
      if(index === codes.length){
        alert("You did it!!");
        index = 0;
      }
    }
    else{
      index = 0;
    }
  });
}

init();
