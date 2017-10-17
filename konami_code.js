const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
// 38 == up-arrow
// 40 == down-arrow
// 37 == left-arrow
// 39 == right-arrow
// 66 == B
// 64 == A

function init() {
  var body = document.querySelector('body')
  var arr = []

  body.addEventListener('keydown', function (e) {
    e.preventDefault()
    var keyCode = e.keyCode || e.location
    arr.push(parseInt(keyCode))
    if (arr.length == 10) {
      for (var i = 0; i < 10; i++) {
        if (arr[i] !== code[i]) {
          break
        }
        else if((arr[i] === code[i]) && i == 9) {
          alert("WE DID IT")
        }
      }
      arr = arr.splice(1)
    }
  })
}
init()
