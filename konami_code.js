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
  let index = 0;
  
  document.body.addEventListener('keydown', function(e){
    index = e.key === codes[index] ? index + 1 : 0 
    
    if (index === codes.length){
      window.alert('Congrats you entered the Konami code');
      index = 0;
    }
  });
}
