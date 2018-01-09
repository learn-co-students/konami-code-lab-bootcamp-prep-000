const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
var indx = 0; 
document.body.addEventListener('keydown', function(evnt) {
  const key = parseInt(evnt.which || evnt.detail)
  if(code[indx] === key) {
    indx++
    if(indx === code.length) {
      alert("Hurray MOTHERFUCKER!")
      indx = 0 
    }
  } else {
    indx = 0 
  }

})


}