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
  const body = document.querySelector('body')
  let index = 0

  body.addEventListener('keydown', function(e) {
    let key = (parseInt(e.detail) || parseInt(e.which))

    if (key === code[index]) {
      index++
      if (index === code.length) {
        alert("You did it!!! ")
      }
    } else {
      index = 0
    }
  })
 }