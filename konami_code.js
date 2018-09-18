const codes =  [
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
  let index = -1;
  document.body.addEventListener('keydown', (event) => {
     index++;
     console.log(index, event);
     if (codes[index] === event.key) {
        console.log("sequence OK");
        if (index + 1 === codes.length) {
          alert("Congratulations!");
          console.log("YAY!!!");
          index = -1;
        }
     } else {
        console.log("sequence BAD");
        index = -1;
     }
   });
}
