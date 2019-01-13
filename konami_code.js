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
  let keys = []
  document.body.addEventListener('keydown', (e) => {
    console.log(keys)
    keys.splice(-codes.length -1, keys.length - codes.length)
    keys.push(e.key);
    if (keys.join('') === codes.join('')) {
      alert('ahhh')
    }
  })
}
