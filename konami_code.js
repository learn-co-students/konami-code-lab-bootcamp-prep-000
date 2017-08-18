const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let count = 0;
  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail);
    console.log(e.which);
    if (code[count] === key) {
      count++;

      if (count === code.length) {
        alert("There's no stopping you now!");
        count = 0;
      }
    } else {
      count = 0;
    }
  });
}

init();
