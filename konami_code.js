const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

// Write your JavaScript code inside the init() function
function init() {
  let index = 0;
  
  function konamiCodeHandler(e) {
    var keyValue = parseInt(e.which || e.detail);
    
    if (keyValue === code[index]) {
      index++;
      
      if (index === code.length) {
        alert("Konami Code entered!!");
        index = 0;
      } 
    } else {
        index = 0;
    }
  }
  var body = document.querySelector('body');
  body.addEventListener('keydown', konamiCodeHandler);
}