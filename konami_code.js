
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
  let i = 0;
  document.body.addEventListener('keydown', (e) => {
    const key = e.key

    key === codes[i] ? ++i : i = 0

    if(i === codes.length) {
    alert('Hurray!')
    i = 0
    }
  })
}
