const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var index = 0
  document.body.addEventListener('keydown',function(e) {
    const key = parseInt(e.which || e.detail, 10)
    if (key === code[index]) {
      index++
      if (index === code.length - 1) {
        alert('KONAMI!!!!!!')
        index = 0
      }
    }
    else {
      index = 0
    }
  })
}

init()
