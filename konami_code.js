const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  const body = document.querySelector('body')
  var index = 0
  var cheats = []
  body.addEventListener('keydown', function(e) {
    var key = parseInt(e.detail || e.which)
    console.log(key)

    if (key === code[index]) {
      index++
      cheats.push(parseInt(e.detail || e.which))
      console.log(cheats)

      if (index === code.length) {
        console.log('Nailed it!')
        ///debugger;
        alert('1337 HAXXOR!!')
        index = 0
        cheats = []
      }
    } else {
      ///debugger;
      index = 0
      cheats = []
      console.log('Nah bro.')
    }
  })
}
