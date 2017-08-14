const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0
function init() {
  // Write your JavaScript code inside the init() function
  const body = document.body
  body.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail || e.location)
    console.log(key)
    if(key === code[index]) {
      index++
      if(index === code.length) {
        alert("Congratulations!");
        index = 0
      }
    } else {
      index = 0
    }
  })
}

init()
