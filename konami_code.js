const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  enteredCode = []
  correctEntered = 0

  function event(key) {

//I previously just had "let keyEntered = key.which", below
//Also "let keyEntered = parseInt(key.which)" doesn't work
//I stole the final solution of "let keyEntered = parseInt(key.which || key.detail)"
//from flatiron's solution on github. Not sure why it works exactly.
    let keyEntered = parseInt(key.which || key.detail)
    console.log(keyEntered)
    if (keyEntered === code[correctEntered]) {
      enteredCode.push(keyEntered)
      correctEntered++
      console.log(enteredCode)
      if(correctEntered === 10) {
        window.alert("Just because we use cheats doesn't mean we're not smart!")
      }
    } else {
      enteredCode = []
      correctEntered = 0
      console.log('wrong!')
    }
  }

  document.body.addEventListener('keydown', event)
}
//Correctt Solution from Flatiron
//I stole the

//const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

//function init() {
//  var index = 0

//  document.body.addEventListener('keydown', function(e) {
//    const key = parseInt(e.which || e.detail)

//  if (code[index] === key) {
//      index++

//      if (index === code.length - 1) {
//        alert('hurray!')

//        index = 0
//      }
//    } else {
//      index = 0
//    }
//  })

//}
