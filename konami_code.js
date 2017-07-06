const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
   // your code here
  const body = document.querySelector('body')
  let index = 0

  body.addEventListener('keydown', function(e) {
    let key = (parseInt(e.detail) || parseInt(e.which))

    if (key === code[index]) {
      index++
      if (index === code.length) {
        alert("You did it!!! ")
      }
    } else {
      index = 0
    }
  })
 }