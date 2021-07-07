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

let index = 0


function init() {

  function konamiListener(e) {
    const key = e.key
    console.log(key)

    if (key === codes[index]) {
      index++
    } else {
      index = 0
    }

    if (index === codes.length) {
      alert("yes")
    }

    console.log(index)
  }

  document.body.addEventListener('keydown', konamiListener)
}
