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
//  document.body.addEventListener('keydown', handleKeydown)
    document.querySelector("body").addEventListener('keydown', handleKeydown)
}

function handleKeydown(e) {
  let index = 0
  let key = e.key

  if(key === codes[index]) {
    index++
    //console.log(`Pressed key: '${key}'`)

    if(codes.length === index) { // we have full house ;-)
        alert ("Congratulations! You Easter Egg is in the mail ...")
    }
  }
}

// initialise listener
init()
