// const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
//
// function init() {
//   let index = 0;
//   const main = document.body
//
//   main.addEventListener('keydown', function(e) {
//     if (e.which=== code[index]){
//       index++
//       if (index === code.length){
//         alert("CONGRATULATION!!!!");
//         index = 0;
//      }
//     }else{
//       index = 0;
//     }
//   })
//
//
// }
// init()
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0

function init() {
  document.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail|| e.which)
    if (key === code[index] && index === code.length - 1) {
      alert("YOU DID IT!")
      index = 0
    } else if (key === code[index]) {
        index++
      } else {
      index = 0
    }
  })
}
