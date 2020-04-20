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

var index = 0;
function init() {
  // your code here
  console.log('Hello! Get ready for the keys guessing game. Start pressing keys and get them in the right order!!! :)))')
  document.body.addEventListener('keydown', nextTurn)
}

function nextTurn(e) {

  if (e.key == codes[index]) {
    index++;
    let keysLeft = codes.length - index

    // Making sure the last right attemp is not printed
    if (index < codes.length) {
      console.log(`Good job! Try the next one, their are ${keysLeft} more keys to go!`)
    }
  } else {
    index = 0;
    console.error('Ooops you did a mistake. Try starting again!')
  }

  if (index == codes.length) {
    alert('Congrutations you won!!!')
    document.body.removeEventListener('keydown', nextTurn, false)
  }
}
