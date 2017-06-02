const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0
function init() {
  // your code here


  document.addEventListener('keydown', onKeyDownHandler, true);

}



function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which)

  if (key === parseInt(code[index])) {
    index++

    if (index === code.length - 1) {
      alert("Finally!")
      index = 0
    }
  } else {
    index = 0
  }
}
