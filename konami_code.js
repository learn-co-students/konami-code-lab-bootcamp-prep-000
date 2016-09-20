const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here

  function onKeyDownHandler(e) {
    var key = parseInt(e.detail || e.which)
    // the event handler might pass us the string representation of the number, which wouldn't work so well with our comparisons
    // we're looking at both e.detail and e.which. In browsers nowadays, e.which is usually sufficient; however, I'll be honest with you: it's not universally supported, it's technically deprecated, and it doesn't work with our tests. So check e.detail too

    for (let i = 0; i < code.length; i++) {
        if (key === code[i]) {
          alert("YOU DID IT!")
        }
    }
  }

  document.body.addEventListener('keydown', onKeyDownHandler)
}
