const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
            // up up down down left right left right b a
            
var keycode = [];
const bod = document.body

bod.addEventListener('keydown', function(e) {
  console.log(e.which);
  init(e.which)
})

function init(entry) {
  keycode.push(entry)
  if (keycode.length > code.length) {
    keycode.shift()
  } if (keycode.toString() === code.toString()) {
      window.alert('You Did it!')
  }
}
