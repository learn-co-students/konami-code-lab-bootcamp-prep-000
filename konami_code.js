const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  const theBody = document.querySelector('body')
  let magicNum = code.length - 1
  var counter = 0

  theBody.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which)

    if (key === code[counter]) {
      counter += 1
    }

    if (counter === magicNum) {
      alert('You are a Konami Master!')
      counter = 0
    }
  })
}
