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
  // set an initial value for the index to track against
  let index = 0;
  
  document.body.addEventListener('keydown', function(event) {
    // set the key in the event
    const key = event.key
    
    // if that key is equal to the key at the current index (0 to start), increase the index by 1
    if (key === codes[index]) {
      index++
      
      // if the user gets the index value up to equal the last in the array (codes), show alert and reset the index
      if (index === codes.length) {
        alert('Hurray!')
        index = 0 }
    
    // otherwise, reset the index    
    } else { index = 0 }
  })
}
    
    
   