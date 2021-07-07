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

const body = document.body;

function init() {
  // your code here
  let count = 0;
  body.addEventListener("keydown", (ev) => {
    let key = ev.key;
    if (codes[count] === key){
      count++;
      if (count === codes.length){
        alert("Hurray!");
        count = 0;
      }
    } else {
      count = 0;
    }
  });
}
