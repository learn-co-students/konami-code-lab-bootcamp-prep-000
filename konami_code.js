const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {

  const main = document.body
  var index = 0

  main.addEventListener('keydown', function(event) {
    console.log(event.which)
    var key = parseInt(event.detail || event.which)

    if (key === code[index]) {
      console.log(index++);
        if (index === code.length) {
          alert('YOU DID IT!')
          index = 0
        }
    }
    else {
      index = 0
    }
  })
}
