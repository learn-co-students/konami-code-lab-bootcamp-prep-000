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
  // Keep track of index outside of the event handler
  let index=0;
  // Add event listener to document.body and check for 'keydown' events
  document.body.addEventListener('keydown', function onKeyDownHandler(e){
    // Declare constant equal to key that was pressed
    const key = e.key;
    // If key is equal to codes[index]
    if(key === codes[index]){
      // Increment index
      index++;
      // If index is equal to codes.length
      if(index === codes.length) {
        // alert
        alert("Congratulations!");
        // reset index to 0
        index = 0;
      }
    }
    // otherwise
    else {
      // set index equal to 0
        index = 0;
      }
    })
  }