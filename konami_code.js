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
  let count = 0;
  document.body.addEventListener('keydown', (event) => {
    if (event.key === codes[count]){
      count++;
    }
    else{
      count = 0;
    }
    if (count === codes.length){
      alert('Konami!');
      count = 0;
    }
  })
}
