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
  let body= document.querySelector('body');
  body.addEventListener('keydown', function(e){
    console.log(e.key);
  })
  
}

init();
