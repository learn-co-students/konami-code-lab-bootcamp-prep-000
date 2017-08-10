const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
function init() {
  let index = 0;
  document.body.addEventListener('keydown', function(event) {
  const key = parseInt(event.which || event.detail);


  // Write your JavaScript code inside the init() function
    if (code[index] === key) {
      index++

      if (index === code.length) {
        alert("Hurray!");
        index = 0;
      }
      else {
        index = 0;
      }
    }
  });
}
init();
