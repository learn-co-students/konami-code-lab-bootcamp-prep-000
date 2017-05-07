const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  let body = document.querySelector('body')
  let cnt = 0

  body.addEventListener('keydown', function(e) {
    let key = parseInt(e.which || e.detail)

    //console.log(e.key)
    if (key === code[cnt]) {
      cnt++
      if (cnt === code.length) {
        alert('YOU DID IT')
      }
    } else {
      cnt = 0
    }
  })
}
