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
  // your code here
  let index = 0;
const bod = document.body;
bod.addEventListener('keydown', function(event){


  const down = event.key;

  if (down == codes[index]) {
    index++
        if (index === codes.length) {
      alert("Youd did it!");
      index = 0;
    }
  } else {
    index = 0;
  }

});
}
