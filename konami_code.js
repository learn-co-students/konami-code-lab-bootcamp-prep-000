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
  let i=0
  document.body.addEventListener('keydown',function(e) {
    console.log(e.key)
    if (e.key === codes[i]) {
      i++
      if (i === codes.length) {
        window.alert("Congratulations")
        i = 0
        }
    } else {
      i = 0
    }
  })
}
