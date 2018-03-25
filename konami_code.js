const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;
  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail);
    if(key === code[index]) {
      index++;
    }
    if(index === code.length) {
      alert(`Because I'm Happy`);
      index = 0;
    }
  })

}