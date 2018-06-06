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
  let counter = 0
  const codeLength = codes.length

  document.body.addEventListener('keydown', function (e) {
    const keyName = event.key;
    if (keyName === codes[counter]) {
      counter +=1
      if (counter === codeLength) {
        counter = 0
        alert('yay')
        return
      }
    } else {
      counter = 0
    }
  })
}
