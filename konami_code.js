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
  var index = 0;

  var ele = document.querySelector('body')
  ele.addEventListener('keydown', function(e) {
    var key = parseInt(e.detail || e.which)
    if (key === code[index]) {
      index++
      if (index === code.length) {
        alert('You have pressed the key!')
        index = 0
      }
    } else {
      index = 0
    }


  })


}
