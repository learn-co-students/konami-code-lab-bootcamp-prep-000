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
  document.body.addEventListener('keydown', codeHandler);
  
  function codeHandler(e) {
    const key = e.key;
    if(key === codes[index]) {
      index++;
      
      if (index === codes.length) {
        alert('Congratulations! You have entered the konami code and won 3 wishes!')
        
        index = 0;
      }
    } else {
      index = 0;
    }
  }
}