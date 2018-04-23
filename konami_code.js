const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
let index = 0
 var body = document.body

body.addEventListener('keydown', function onKeyDownHandler(event){
const key = parseInt(event.detail || event.which);
 if (key === code[index]) {
   index++;

 if (index === code.length) {
   alert('hurray!')
   index = 0
 }
 } else {
  index = 0
}
})
}
