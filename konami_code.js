const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let index = 0;
  let array = [];
  document.onkeydown = function(e) {
    let expected = code[index]
    let actual = e.keyCode
    if (expected === actual) {
      array.push(actual)
      index++
      console.log(array)
      if (array.length === code.length) {
        alert('you won')
        console.log('you won')
        index = 0;
        array = [];
      }
    } else {
      index = 0;
      array = [];
      console.log(array)
    }
  }
}

init()
