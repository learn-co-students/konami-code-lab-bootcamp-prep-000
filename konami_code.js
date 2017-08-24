const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  const input = document.querySelector('body')
  let index = 0;
  input.addEventListener('keydown', function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);
    console.log(key)
    console.log(index)
    if (key === code[index]) {
      console.log('true')
      index++;

      if (index === code.length) {
        alert("Congratulations, you entered the right code!!");
        index = 0;
      }
    } else {
      index = 0;
    }
  })
}




// const input = document.querySelector('input')
//
// input.addEventListener('keydown', function(e) {
//   if (e.which === 71) {
//     return e.preventDefault()
//   }
// })

// // Keep track of index outside of the event handler.
// let index = 0;
//
// // This is the function that would be invoked by the event listener.
// function onKeyDownHandler(e) {
//   const key = parseInt(e.detail || e.which);
//
//   if (key === alphabet[index]) {
//     index++;
//
//     if (index === alphabet.length) {
//       alert("Hurray!");
//
//       index = 0;
//     }
//   } else {
//     index = 0;
//   }
// }
