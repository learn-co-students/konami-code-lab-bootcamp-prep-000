const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

//let index = 0;

function init() {
  
  let index = 0;
  
  let body = document.querySelector('body');
  body.addEventListener('keyDown', checkCode);
  
  function checkCode(e){
    const key = parseInt(e.detail || e.which);
    
    if (key === code[i]) {
      index++;
      
      if (key === code.length - 1) {
        alert("code compelte");
        index = 0;
      }
    } else {
      index = 0;
    }
  }
}

