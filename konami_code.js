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

const konami = document.body

function init() {
  
  konami.addEventListener('keydown', function(e) {
  
    var key = code [e.keycode];
  
    var requiredkey = code [index];
    
    if (key === requiredkey) { 
      index++;
    
    if (index === code.length) { 
      alert("Hurray! You get 30 lives!") ;
      index = 0;
      }
    } else { 
      index = 0;
    }
  })
}