const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var ind = 0
  function onKey(e) {
    var key = parseInt(e.detail || e.which)
    if(key === code[ind]) {
      ind++
      if(ind === code.length-1) {
        alert("You're the winner!")
      }
    } else {
    ind = 0
    }
  }
  document.body.addEventListener('keydown', onKey)
}

init()
