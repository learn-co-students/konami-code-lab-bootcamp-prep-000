const kCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

// event listener
const e = document.body
e.addEventListener('keydown', init){
  alert('keydown down')
}

// keep track of index outside of the event handler
var index = 0

// unattached event handler
function init() {

}
