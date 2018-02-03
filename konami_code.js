const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;
  document.querySelector('body').addEventListener('keydown', function(e) {
    if (parseInt(e.which || e.detail) === code[index]) {
      if (index === code.length - 1) {
        alert("Konami!");
        index = 0;
      } else index++;
    } else {
      index = 0;
    }
  })
}
