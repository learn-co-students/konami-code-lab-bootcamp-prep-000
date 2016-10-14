const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


function init() {
  // your code here
  var index = 0

  document.body.addEventListener('keydown', onKeyDownHandler)


function onKeyDownHandler(e){
  const cow = parseInt(e.detail || e.which)

    if (code[index] === cow){
      index++

      if (index === code.length - 1){
        alert('Congratulations!')
        index = 0
      }
    }
      else {
        index =0
      }
    }
}
