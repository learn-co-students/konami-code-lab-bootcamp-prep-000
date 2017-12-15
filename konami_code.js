const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let index = 0;
  document.body.addEventListener('keydown', function(e) {
    let expected = code[index]
    let actual = parseInt(e.which || e.detail);
    if (expected === actual) {
      index++
      if (index === code.length) {
        alert('you won')
        index = 0;
      }
    } else {
      index = 0;
    }
  })
}

init()
