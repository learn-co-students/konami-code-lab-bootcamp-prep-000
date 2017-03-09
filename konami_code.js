const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
// up, up, down, down, left, right, left, right, B, A
var count = 0;

function init() {
  document.body.addEventListener("keydown", konamiTester)
}

function konamiTester(e) {
  const key = parseInt(e.detail || e.which)
  if(key == code[count]) {
    count++
    if (count == 10) {
      window.alert("You did  it!")
    }
  } else {
    count = 0
  }
  return true
}
