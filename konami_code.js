const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here



const main = document.body
  
 main.addEventListener('keydown', function (event) {
    onKeyDownHandler(event)
 })
 
// keep track of index outside of the event handler
var index = 0
 
// unattached event handler
  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which)
   
    if (key === code[index]) {
      index++
   
      if (index === code.length - 1) {
        alert("YOU DID IT!")
        index = 0
      }
    } else {
      index = 0
    }
  }
}
