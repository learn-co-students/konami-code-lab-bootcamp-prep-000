const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
/*
function init() {
  var index = 0
  document.body.addEventListener('keydown', combo)// can also write it as below document.body.addEventListener('keydown', function combo e() {
  function combo(e) {
    const key = parseInt(e.detail || e.which)
      if (key === code[index]) {
        index++

        if (index === code.length) {
          alert('Yo Gotti')
          index =0
        }
      }
      else {
          index =0
        }
  }
}
*/
function init() {
  let index = 0
  document.body.addEventListener('keydown', function combo(e){
    var key = parseInt(e.detail|| e.which);
    if (key === code[index]){
      index++

      if (index === code.length) {
        alert('you gotti')
        index =0
      }
    }
    else {
      index = 0
    }
  })
}
