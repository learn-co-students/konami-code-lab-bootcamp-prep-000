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

const body = document.querySelector('body');

var i = 0;

function init() {
  // your code here

  body.addEventListener('keydown', function(e){
    const key = parseInt(e.detail || e.which);
    if(key===code[i]){
        i++
      if(i === code.length-1){
        alert('YOU DID IT!');
        i = 0;
      }
    } else{
      i = 0;
      }
  })
}
