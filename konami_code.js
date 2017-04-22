const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0
console.log(index)
function init() {
  const body = document.querySelector('body')
  body.addEventListener('keydown', function(e){
    const key = parseInt(e.detail || e.which)

    if (key === code[index]){
      index++
      console.log(index)
      if (index === code.length) {
        alert("YOU DID IT!")
        index = 0
      }
    }else {
      index = 0
    }
  })// your code here
}
