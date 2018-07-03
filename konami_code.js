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
  var index = 0
  document.body.addEventListener('keydown', function(e) {
    if (e.key === codes[index]) {
      index++
      console.log(e.key)
      console.log(index)
      
      if (index === codes.length) {
        alert("Hurray!")
        index = 0
      }
    } else {
      index = 0
    }
  })

}