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
  var checkCode = [];
  const input = document.querySelector('body')
  input.addEventListener('keydown', (event) => {
    checkCode.push(event.key)
  if (checkCode.length === 10) {
    var counter = 0;
    for (var i = 0; i < 10; i++) {
      if (checkCode[i] === codes[i]) {
      counter++
        }
      }
    if (counter === 10) {
      alert('yes')
      checkCode = []
    } else {
      checkCode = []
    }
  }
})
}
