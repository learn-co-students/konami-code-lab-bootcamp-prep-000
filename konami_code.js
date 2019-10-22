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
//a variable to get the position the user is at
let index= 0;
// add event listener
document.body.addEventListener('keydown', function init(e) {
      const key = e.key;

      if (key === codes[index]) {
        index++;

      if (index === codes.length){
        alert("Gabriels Cheat Mode Activated");

        index=0;
      }
    } else {
      index=0;
    }
 });
