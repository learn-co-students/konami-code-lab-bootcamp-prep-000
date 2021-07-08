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
  document.querySelector("body").addEventListener("keydown",onKeyDownHandler)
}

let index = 0;
 
// This is the function that would be invoked by the event listener.
function onKeyDownHandler(e) {
  console.log("got here")
  const key = e.key;
 console.log(key)
  if (key === codes[index]) {
    index++;
    console.log(index)
    if (index === codes.length) {
      console.log("yesss")
      alert("Hurray!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
}
