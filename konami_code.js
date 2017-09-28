const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var index = 0

document.body.addEventListener('keydown', function(e) {

const key = parseInt(e.which || e.detail)

if (key===code[index]){
  index++

    if(index===code.length){
        alert('Congrats!')
        index=0
      }
    }
    else{
      index=0
    }
  })
}

// function init() {
//   var index = 0
//
// document.body.addEventListener('keydown', function(e) {
//
// const key = parseInt(e.which)
//
// if (key===code[index]){
//   console.log("actual "+e.which)
//   console.log("expected "+code[index])
//   index=index+1
//
//   console.log("index "+index)
//   console.log("code length "+code.length)
//  if(index===code.length){
//  alert('Congrats!')
//     index=0
// }}
// else{
//   index=0
// }
//
// })
// }
