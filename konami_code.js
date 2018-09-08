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
//  document.body.addEventListener('keydown', handleKeydown)
    document.querySelector("body").addEventListener('keydown', handleKeydown)
}

function handleKeydown(e) {
  let key = e.key

  // DELETE ME
  //console.log(`index: ${index}; key: '${key}'`)

  if(key === codes[index]) {
    index++

    if(codes.length === index) { // we have full house ;-)
        window.alert ("Congratulations! You Easter Egg is in the mail ...")

        index = 0 //reset
    }
  } else {
    index = 0 //no luck; start over
  }
}
