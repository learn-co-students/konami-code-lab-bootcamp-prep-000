const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  document.addEventListener('keydown', function(e) {
    var trueCount = 0;
    var position = 0;
    var keydownCount = 0;
    if (e.detail === code[position]) {
      keydownCount++
      trueCount++
      position++
      if (keydownCount === trueCount) {
        alert ('Congratulations' );
      }
    } else {
      trueCount = 0;
      keydownCount = 0;
      position = 0;
    }
  })
}