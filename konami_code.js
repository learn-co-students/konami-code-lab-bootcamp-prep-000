const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0


function init() {
  document.body.addEventListener('keydown', (e) => konamiCheck(e))
}

function konamiCheck(e) {
  var keyDown = parseInt(e.detail || e.which)
  if (code[index] == keyDown) {
    index++
    if (index === code.length) {
      alert('U R A Konami Komando')
      var h1 = document.createElement('h1')

      document.body.style.backgroundColor = '#f06d06';

      h1.innerHTML = 'KONAMI KAT!'
      h1.classList += 'konami';

      document.body.appendChild(h1)

      index = 0
    }
  } else {
    index = 0
  }
}
