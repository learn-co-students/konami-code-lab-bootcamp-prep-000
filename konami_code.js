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

// Keep track of input outside of the event handler.
const array = [];


document.querySelector('body').addEventListener('keydown', onKeyDownHandler);

// This is the function that would be invoked by the event listener.
function onKeyDownHandler(e) {
  array.push(e.key);
  if (array.length > 10) {
    array.shift()
  }
  if (JSON.stringify(array) === JSON.stringify(codes)) {
    alert("Hurray!");
  }
}
