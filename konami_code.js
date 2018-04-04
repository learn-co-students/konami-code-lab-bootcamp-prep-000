const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let input = document.body
  
  let index = 0

  input.addEventListener('keydown', function(e) {
  
  
    const key = parseInt(e.detail || e.which)
  
    if (key === code[index]) {
      index++
      if (index === code.length) {
        window.alert("Hurray!")
        index = 0
      }
    } else {
      index = 0
    }  
  })
}