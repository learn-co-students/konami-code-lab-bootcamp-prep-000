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
  document.body.addEventListener('keydown', function (event) {
    const key = event.key;
    console.log(event.key);
  if (key === codes[index]) {

    index++;
  }
      if (index ===codes.length) {
           alert('Congrats, you clever cheat!')
          index = 0;
   }


}
)}
  //  init()
