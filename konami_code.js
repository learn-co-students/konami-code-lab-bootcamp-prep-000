const alphabet = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  document.querySelector("body").addEventListener('keydown', function eventHandler(e) {
    const key = parseInt(e.detail || e.which)
    alphabet.forEach(item =>{
      if (key === item) {
        alert("YOU DID IT!")
      }
    })
  })
}
