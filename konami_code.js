const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
function init() {
  var i = 0
  document.body.addEventListener('keydown', function(e) {
    var keyPressed = parseInt(e.detail || e.which)
    if (keyPressed === code[i]){
      i++
      
      if (i === code.length - 1){
        alert('All characters unlocked!');
        i = 0
      }
    }
  else {
    i = 0
  }
} )
}
init();
