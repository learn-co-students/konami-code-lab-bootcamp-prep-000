const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  var progress = 0 // track user's progress through code outside loop scope
  document.body.addEventListener('keydown',function(e) {
    //e.stopPropagation()
    const key = parseInt(e.detail || e.which)
    if (key === code[progress]) {
      progress++
      if (progress === code.length - 1) {
      alert("YOU DID IT!")
      progress = 0  //reset counter
    }
  } else {
    progress = 0 // start over if mistake is made
  }
})
}
