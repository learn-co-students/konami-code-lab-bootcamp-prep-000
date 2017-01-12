const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var index = 0

  function capture(e) {
    const key = parseInt(e.detail)
    if (key===code[index]){
      index++
      if (index === code.length - 1) {
        alert("YOU DID IT!")
        index = 0
      }
    }else{
      index=0
    }
  }
  // your code here
  const main = document.getElementById('body')
  document.body.addEventListener('keydown', capture)
}
