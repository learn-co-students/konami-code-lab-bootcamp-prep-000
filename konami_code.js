const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]



function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;
  const input = document.body
 
  input.addEventListener('keydown', onKeyDownHandler)
  
  function onKeyDownHandler(e) {
    
    const key = parseInt(e.detail || e.which);
    console.log(key)
    if (key === code[index]) {
      console.log(code[index])
      index++;
   
      if (index === code.length) {
        alert("Hurray!");
   
        index = 0;
      }
    } else {
      index = 0;
    }
  }
}
init();