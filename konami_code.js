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


//var init = function() {
function init() {
  // your code here
  var index = 0
  const main = document.querySelector('body')
  main.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail) // || e.which) -- try these both out
    if (key === code[index]) {
      index++
      if (index === code.length - 1) {
        alert("YOU DID IT!")
        index = 0
      }
    } else {
      index = 0
    }
  })
}
