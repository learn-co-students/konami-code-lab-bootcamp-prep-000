const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


function init() {
var array = []

document.body.addEventListener('keydown', function(e) {
  const key = parseInt(e.detail || e.which);
  array.push(key)

  if (array.length === code.length) {
    for(var i = 0; i < array.length; i ++) {
      if(array[i] !== code[i]) {
      return
       }
      }
    alert('Congratulations!')
   }
 })
}

init()
