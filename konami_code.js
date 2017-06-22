const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0


function alert(string) {
  console.log(string);
}

function init() {
  var body = document.body
  body.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which)

    if (key === code[index]) {
    index++

      if (index === code.length) {
      alert("Hero Mode")
      index = 0
      }
    }
    else {
      index = 0
    }
  })
}
