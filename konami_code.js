const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  var body = document.querySelector('body')
  var i = 0
  body.addEventListener('keydown', function(e) {
    if (i === code.length - 1 && e.location === code[i]) {
      i = 0
      alert('Congrats, you cracked the code!')
    } else if (e.location === code[i]) {
      i++
    } else {
      i = 0
    }
  })
}
