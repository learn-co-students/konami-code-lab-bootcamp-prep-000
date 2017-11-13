const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;
  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which);

    if (key === code[index]) {
      index ++;
      /*if key entered matches index in code, increment index
      and wait for keydown; and check if the next character
      entered by user matches the next element in code*/

      //check to see if already reached the end of code & alert
      if (index === code.length) {
        alert ("You entered the Konami Code correctly!");
      }

    }
  });
}
