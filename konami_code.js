const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0;
function init() {
 document.body.addEventListener('keydown', function(e)
 {
   const key = parseInt(e.detail || e.which)
   
    if (key === code[index]) 
    {
      index++
   
      if (index === code.length - 1) {
        alert("YOU DID IT!")
        index = 0
      } // reach the end of konami code
    } 
    else {
      index = 0
    }//if key enter is not in konami code reset index
 })
 }


