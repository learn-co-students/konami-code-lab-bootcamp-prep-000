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
document.body.addEventListener("keydown", function(e) {
  const key = e.key;
 console.log(key);
  if (key === codes[index]) {
    index++;
    console.log(index);
    if (index === codes.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
})
 }


// This is the function that would be invoked by the event listener.
function onKeyDownHandler(e) {
  const key = e.key;
 console.log(key);
  if (key === codes[index]) {
    index++;
    console.log(index);
    if (index === codes.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
}
