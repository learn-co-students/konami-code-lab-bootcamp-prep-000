// const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
//
// function init() {
//   let index = 0;
//   document.body.addEventListener('keydown', function(e){
//     if (e.which === code[index]) {
//       index++
//     }
//     if (e.which != code[index]) {
//       index = 0
//     }
//     if (index === code.length) {
//       window.alert('Hurray!')
//     }
//   })
// }


const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let index = 0;
  document.body.addEventListener('keydown', function(e){
    const key = parseInt(e.detail || e.which)
    if (key === code[index]) {
      index++
    }
    else if (key != code[index]) {
      index = 0
    }
    if (index === code.length) {
      window.alert('Hurray!')
    }
  })
}
