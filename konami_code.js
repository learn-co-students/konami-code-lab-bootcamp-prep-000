const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
function init() {
    // your code here
const konamiCode = document.querySelector('body')
let magicNum = code.length - 1
var counter = 0
 
 konamiCode.addEventListener('keydown', function(e) {
 const key = parseInt(e.detail || e.which)
 
 if (key === code[counter]) {
       counter += 1
     }

     if (counter === magicNum) {
       alert('Yas Queen!')
       counter = 0
     }
   })
  }