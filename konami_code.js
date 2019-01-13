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
// set the const input to the whole document body 
const input = document.body;
// listens for any key press, calls the keyInt function with the key pressed... if UpArro is pressed the keyInt Function will be called. you then need to call the properties of key to to that we write key.key which is the actual key pressed so pressing the down arrow will equals "ArrowDown"

input.addEventListener('keydown', check) 

// golbal counter that the function keyInt interates up then resets to 0 upon failure of the correct key punches 

var count = 0;

function check(key) {
  if (key.key === codes[count]) {
    count ++
    console.log(count)
    if (count === codes.length) {
      keyInt()
    }
    return
  } else {
    count = 0
    return
  }
}



function keyInt (key) {
 if (count === codes.length) {
   alert("Congrats")
 }
         }
 






function init() {
}


    
    
  



