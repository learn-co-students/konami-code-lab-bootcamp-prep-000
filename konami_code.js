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
]

let index = 0 // iinitialize 'index' variable, it will count the correct presses on the keyboard

function onKeyDownHandler(e) {
  const key = e.key // assign event's key to 'key' variable
  console.log("key: ", key)
  if (key === codes[index]) { // check if the name of the key matches an array element
    index++ // increment the key if it does

    if (index === codes.length) { // check if index is to array's length. This means we pressed all the right keys
      alert("Tada!") // alert the browser, the program works properly

      index = 0 // reset the index
    }
  } else {
    index = 0 // wrong key pressed, reset the index to start over
  }
}

function init() { // initialize the program
  // your code here
  document.body.addEventListener("keydown", onKeyDownHandler) // attach 'keydown' event listener to document.body and pass the callback function
}
