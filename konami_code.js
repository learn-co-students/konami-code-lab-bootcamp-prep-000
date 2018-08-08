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
}

const keys = ['a', 'b', 'ArrowUp','ArrowDown','ArrowLeft','ArrowRight'];

let index = 0;

function onKeyDownHandler(e) {
  const key = e.key;
 
  if (key === keys[index]) {
    index++;
 
    if (index === keys.length) {
      alert("Hurray!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
}