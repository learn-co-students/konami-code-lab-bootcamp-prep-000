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
  document.body.addEventListener('keydown', function(e){
    
    if(e.key === codes[index]){
      index++;
    }
    else{
      index = 0;
    }
    if(index===codes.length){
      alert('You entered the Konami code!');
    }
  });
}
