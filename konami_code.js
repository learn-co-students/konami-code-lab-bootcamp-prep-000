const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  var index = 0;

  let body = document.body;
  body.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail)
    if (key === code[index]) {
      index++
      if (index === code.length - 1) {
        alert("You unlocked the code!")
      }
    } else {
      index = 0;
    }
  })
}
