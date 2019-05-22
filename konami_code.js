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
  document.addEventListener('keydown',function(e) {
    console.log(e.key)
    let i = 0
    if (e.key === codes[i]) {
      i++
      if (i === codes.length) {
        alert("Congratulations")
        i = 0
        }
    } else {
      i = 0
    }
  })
}
