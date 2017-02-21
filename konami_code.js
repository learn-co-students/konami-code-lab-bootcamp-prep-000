
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var index = 0

  document.body.addEventListener('keydown', function(event) {

    var key = parseInt(event.detail || event.which)
    //if the index of the array[code] is equal to the key pressed
    if (code[index] === key) {
      // go to next index item of array[code]
      index++

      if (index === code.length -1) {
      alert('That combo is correct!')
      index = 0
    }
  }else {
      index = 0
    }
  })
}
