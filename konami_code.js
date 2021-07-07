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


chai.config.includeStack = true;

let index = 0;

function init() {
  document.body.addEventListener('keydown', function(e) {
    let key = e.key;
    
    if (key === codes[index]) {
      index++;
      
      if (index === codes.length) {
        alert("You've entered the Konami code!");
        
        index = 0;
      }
    } else {
      index = 0;
    }
  }) 
}
