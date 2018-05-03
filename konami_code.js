const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let index = 0;
  
  const docBody = document.querySelector('body');
  docBody.addEventListener('keydown', capture);
  
  function capture(e) {
    const key = parseInt(e.detail || e.which);
    
    if (key === code[index]) {
      index++;
      
      if (index === code.length) {
        alert("Nice!");
        index = 0;
      }
    }
    else {
      index = 0;
    }
  }
}