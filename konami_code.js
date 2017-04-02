const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  document.body.addEventListener('keydown', eventHandler)
  var index = 0

    function eventHandler(e) {
    if (parseInt(e.which || e.detail) === code[index]) {
       index ++

       if (index === code.length - 1) {
         alert('YOU DID IT!')
       }
    } else {

      index = 0
    }
  }
}
