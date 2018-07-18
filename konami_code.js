const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

// function init() {
//   // `keySequence` will keep track of the last n keystrokes, where n === `codes.length`. `keySequence` will be compared to `codes` for each keydown event.
//   var keySequence = []
  
//   var body = document.querySelector('body')
  
//   body.addEventListener('keydown', function(e) {
//     if (keySequence.length >= codes.length) {
//       keySequence.shift(e.key)
//     }
//     keySequence.push(e.key)
    
//     // console.log(keySequence)
    
//     if (JSON.stringify(keySequence) === JSON.stringify(codes)) {
//       alert("Konami code activated!")
//     }
//   })
// }



function init() {
  let body = document.querySelector('body')
  let index = 0
  body.addEventListener('keydown', function(e) {
    
    const key = e.key
    
    if(key === codes[index]) {
      index++
      
      if(index === codes.length) {
        alert('Konami code activated!')
        index = 0
      }
      
    } else {
      index = 0
    }
    
  })
}
