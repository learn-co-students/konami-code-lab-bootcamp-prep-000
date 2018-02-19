const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  var index = 0
  window.addEventListener("keydown", function(event) {
    var key = parseInt(event.detail || event.which)
    if (key === code[index]) {
        index++
          if (index === code.length) {
              alert("Congratulatory")
          }
        }else {
                index = 0
            }
  
  })
  
            
}