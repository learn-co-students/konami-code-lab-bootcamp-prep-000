const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;
  const main = document.getElementsByTagName("body")[0];
  
  main.addEventListener("keydown", keyHandler); 
  
  function keyHandler(e) {
    const key = parseInt(e.detail || e.which);
    if (key == code[index]) {
      index++;
      if (index === code.length) {
        alert('Praise Kojima!');
        index = 0;
      } 
    } else {
      index = 0;
    }
  }
}