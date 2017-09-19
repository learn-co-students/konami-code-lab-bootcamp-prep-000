const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let i = 0
function init() {
  // Write your JavaScript code inside the init() function
  var arr = []
  function check(){
    if (i === code.length){
      window.alert("Konami!")
      i = 0
    }
  }
  if (window.addEventListener){
    window.addEventListener("keydown", function(e) {
      if (e.which == code[i]){
        arr.push(parseInt(e.which))
         i++ ; check()
      }
      else {
         i  = 0
         arr = []
      }
    })
  }
}
