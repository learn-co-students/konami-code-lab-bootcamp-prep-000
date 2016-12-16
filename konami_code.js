const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]




function init(element) {
  var index = 0;
  document.body.addEventListener('keydown', function(element) {

  const key = parseInt(element.detail)
    if (key === code[index]) {
      index++;

      if (index === code.length-1) {
        alert("HACKERMAN!!")
        index = 0
      }
    } else {
      index = 0;
    }
  })
}
