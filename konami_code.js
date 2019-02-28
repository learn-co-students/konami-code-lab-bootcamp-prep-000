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

//already did it

function init() {
  let index = 0
  document.body.addEventListener('keydown', (event) => {
    const key = event.key
    console.log(event.key)
    if(key === codes[index]) {
    index ++
      if (index === codes.length)
      {
        window.alert('Hurray!')
        index = 0
      }
    } else {
      index = 0
    }
  })
}
