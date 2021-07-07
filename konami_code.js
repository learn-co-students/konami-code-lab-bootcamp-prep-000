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
  const theBody = document.querySelector('body')
  let magicNum = code.length - 1
  var counter = 0

  theBody.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which)

    if (key === code[counter]) {
      counter += 1
    }

    if (counter === magicNum) {
      alert('You are a Konami Master!')
      counter = 0
    }
  })
}
