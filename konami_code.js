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
  var typed = []
  document.body.addEventListener('keydown', (event) => {
    // add key to current sequence
    let key = event.key
    typed.push(key)
    console.log(typed)
    for (var i = 0; i < typed.length; i++) {
      if (typed[i] !== codes[i]) {
        typed = []
      }
      if (typed.length && typed.length === codes.length) {
        alert('Konamiiiiied!')
        return
      }
    }

    // iterate over sequence
    // if any element doesn't match, reset sequence
    // if we get to the end of the sequence (if the sequences are equal in length) then send an alert
  })
}
