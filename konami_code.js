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
  let index = 0

  document.body.addEventListener('keydown', function(e) {
    // for (let i = 0; i < codes.length; i++) {
    // }

    const key = e.key;

    if (key === codes[index]) {
      console.log(key)
      index++;
    } else if (key !== codes[index]) {
       index = 0;
     }
    if (index === codes.length) {
      alert("Congratulation, You just trigger konami code");
      index = 0;
    }
  })
}
