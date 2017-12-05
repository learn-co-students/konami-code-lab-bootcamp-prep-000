const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  // Write your JavaScript code inside the init() function

  // Position in code
  let index = 0;

  document.addEventListener('keydown', function(e) {
    // Get value of key code from code
    var key = parseInt(e.detail || e.which);

    // Get value of required key from code
    var requiredKey = code[index];

    // Compare key with required key
    if (key === requiredKey) {

      // Go to the next key in the code
      index++;

      // If the last key is reached, activate Easter egg
      if (index === code.length) {
        alert("Hurray!");
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}
