const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  var index = 0
  document.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which);
    if (code[index] === key) {
      index++;
      if (index === code.length) {
        alert("Yay!")
      }
    } else {
      index = 0
    }
  })
}

// if the right key is pressed, increase the index
// Then, check if the index is the length of the array
  // if yes, alert() and reset index to 0
// Else index to 0
