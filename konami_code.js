const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  const input = document.body
  var index = 0

  input.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which)

  if (key === code[index]) {
    index ++
    if (index === code.length - 1) {
      window.alert("Congrats!")
      index = 0
    }
  }
    else {
      index = 0
  }}
)
}
init()
