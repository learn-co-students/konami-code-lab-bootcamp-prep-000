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

  const main = document.body
  var index = 0

  main.addEventListener('keydown', function(event) {
    console.log(event.which)
    var key = parseInt(event.detail || event.which)

    if (key === code[index]) {
      console.log(index++);
        if (index === code.length) {
          alert('YOU DID IT!')
          index = 0
        }
    }
    else {
      index = 0
    }
  })
}
