const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var codeCheck = []
  document.body.addEventListener('keydown', function(event)
  {
    codeCheck.push(parseInt(event.detail || event.which))

    if (codeCheck.toString() === code.toString()) {
      alert('Congratulations!')
    }

  })
}
init()
