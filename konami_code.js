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

  let index = 0;

function init() {
  // console.log(e);const key = e.key;
function keyStroke(e) {
  const key = e.key;

    if (key === codes[index]) {
      console.log(e);
      index++;
      if (index === codes.length) {
        console.log('congrats');
        alert("Congratulations");
        index = 0;
      }
    }else {
       index = 0;
    }
  }
    document.addEventListener('keydown', keyStroke);
}

// (
//   function win() {
//   let body = document.body;
//   body.addEventListener('keydown', init) ;
// });
