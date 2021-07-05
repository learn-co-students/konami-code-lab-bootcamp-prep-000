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
  let body = document.querySelector('body')
  let counter = 0
  body.addEventListener('keydown', function(e){
    if (e.key === codes[counter]){
      counter++
    }else{
      counter = 0
    }
    
    if (counter == codes.length){
      alert("Hurray!")
    }
  });
}
