const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0;

function init() {
  // Write your JavaScript code inside the init() function
  const input = parseInt(e.detail || e.which) 
    if (input === code[index]) {
      index++;
      
      if (index === code.length) {
        alert('Hurray!');
        
        index = 0;
      }
    } else {
      index = 0;
    }
  }