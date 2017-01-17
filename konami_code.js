const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  

  // keep track of index outside of the event handler
  var index = 0

  // unattached event handler
  document.addEventListener('keydown', function(event) {
    const key = parseInt(event.detail || event.which)
    //key2 = String.fromCharCode(key).toLowerCase();
    console.log(key);
    if (key === code[index]) {
      index++
      if (index === code.length ) {
        alert("YOU DID IT!")
        index = 0
      }
    } else {
      index = 0
    }
  })
}
init();
