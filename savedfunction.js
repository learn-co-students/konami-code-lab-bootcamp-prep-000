const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let i = 0
function init() {
  // Write your JavaScript code inside the init() function
  var arr = []
  var arrl = arr.length
  function check(){
    if (i === code.length){
      alert("Konami!")
    }
    else {
      console.log("tough luck!")
    }
  }
  if (window.addEventListener){
    window.addEventListener("keydown", function(e) {
      if (e.which == code[i]){
        arr.push(parseInt(e.which))
         i++ ; console.log(e.which); console.log(arr);check(); console.log(i);
         if (arr == code) {
           alert("Konami!")
         }
      }
      else {
         i  = 0
         arr = []
      }
    })
  }
}
