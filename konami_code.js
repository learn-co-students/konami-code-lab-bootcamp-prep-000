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
  let index = 0;
  const listen = document.body.addEventListener('keydown', function(e) {
    console.log(e.which)
    const key = e.key;
    if (key === codes[index]) {
      index++;
    if(index === codes.length) {
      alert ("You did it!")
      index = 0;
      }
    } else {
      index = 0;
     }
  })
}
