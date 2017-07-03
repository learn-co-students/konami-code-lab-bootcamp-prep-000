const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

//var index = 0
  // your code here
// var theFunction = function(e) { //messing with other ways to write the code.
//   const key = parseInt(e.detail || e.which)
//   if(index === code.length - 1) {
//     alert("YOU DID IT!")
//     index = 0
//     return
//   }
//   if(key === code[index]) {
//     index ++
//   } else {
//     index = 0
//   }
// }
//
// function init() {
//   var foo = document.body
//   foo.addEventListener('keydown', theFunction)
// }


function init() {
  var index = 0 //when this was outside the function, it was giving a spy error. It works outside the function if function(e) is defined outside too.
  document.body.addEventListener('keydown', function(e){
    const key = parseInt(e.detail || e.which)
    if(index === code.length -1) { //passing criteria checked first
      alert("YOU DID IT!")
      index = 0 //reset for next run
      return //'break' out of function
    }
    if(key === code[index]) { //check current element, increment if passes
      index ++
    } else { //otherwise, reset
      index = 0
    }
  })
}

init()
