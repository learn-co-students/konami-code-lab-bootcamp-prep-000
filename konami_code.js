const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var keepTracker = 0

function init() {
  document.body.addEventListener("keydown", function onKeyDownHandler(e){
    const key = parseInt(e.detail || e.which)
    if (key === code[keepTracker]) {
      keepTracker++
      if (keepTracker === code.length - 1) {
        alert("Congratulations!")
        keepTracker = 0
      }
    } else {
      keepTracker = 0
    }
  }
)}
