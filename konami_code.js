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
  var body = document.querySelector('body')
  var index = 0
  body.addEventListener('keydown', function(e){
    const key = e.which
    if (key === codes[index]){
      index++
      if (index === codes.length){
        alert("yesss")
        index = 0
      }
    } else {
      index = 0
    }
  })
}
init()