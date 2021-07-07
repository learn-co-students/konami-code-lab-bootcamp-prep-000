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
  // your code here
const input = document.querySelector('body')
let index = 0;

input.addEventListener('keydown', function onKeyDownHandler(e) {
  const key = e.key;
  console.log(key)
  
  if (key === codes[index]) {
    index++;
    
    if (index === codes.length) {
      alert('SHHHHH! Dont tell anyone!')
      index = 0
    } 
  }})


}
