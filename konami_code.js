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
  var index = 0;
  //const elem = document.getElementById('body');

  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which)

    if (key === code[index]) {
      index++

      if (index === code.length - 1) {
        window.alert("You cracked the code!");
        index = 0
      }
    } else {
      index = 0
    }

  })
}
