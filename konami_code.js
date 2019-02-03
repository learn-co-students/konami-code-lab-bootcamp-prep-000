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


function init() {
  const body = document.body
  var index = 0
  body.addEventListener('keydown', function(e) {
    if(e.key === codes[index]){
      index++
      console.log(index)
      console.log(e.key)
      if(index === codes.length){
        console.log(index)
        window.alert("Hurray!");
        index = 0
      }
    } else {
      index = 0
    }
  });
}

// function init() {
//   let idx = 0

//   document.body.addEventListener("keydown", (e) => {
//     const key = e.key
    
//     idx = (codes[idx] === key) ? ++idx : 0
    
//     if (idx === codes.length) {
//       window.alert("Hurray!");
//     }
//   })
// }
