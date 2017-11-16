const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0
function init() {
  // Write your JavaScript code inside the init() function
const body = document.querySelector('body')
body.addEventListener('keydown', listenKey);
  }
function listenKey(e) {
 const key = parseInt(e.which||e.detail)
 if (key === code[index]) {
   index++

 if (index === code.length) {
   alert("Hurray!");
 }
}
else {
  index = 0
}
}
