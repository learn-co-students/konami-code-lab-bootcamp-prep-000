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

function init(codes) {
  let codePress = []
  let index = 0
  document.body.addEventListener('keydown', (event) => {
     if (event.key === codes[index]) {
       codePress.push(event.key)
       index ++;
       console.log(codePress)
       if (index === codes.length) {
         alert('Hurray!')
       }
     }
     else {
       index = 0
       codePress = []
       console.log('wrong key')
     }
 })
 }



init(codes)
