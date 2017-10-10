// Konami key codes
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
// Keep track of index outside of the event handler
let index = 0;

function init() {
  // Write your JavaScript code inside the init() function
    document.body.addEventListener('keydown', function(e) {
      // const to hold key code on keydown event
      const key = parseInt(e.detail || e.which);
      // if the key is the same as the code[index] value, go to the next code index
      if(key === code[index]) {
        index++;
        // if index is equal to the code.length value, alert "Success" and reset index to 0
        if(index === code.length) {
          alert("Konami Code Success!");
          index = 0;
        }
        // if a key out of sequence or a key that isn't part of the Konami code is pressed set index to 0
      } else {
        index = 0;
      }
    })
}
