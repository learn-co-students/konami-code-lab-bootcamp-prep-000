const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

/*function init() {
  var index = 0;
  document.body.addEventListener("keydown", function(event) {
    const key = parseInt(event.which || event.detail)
    if (code[index] === key) {
      index++;
      if (index === code.length - 1) {
        alert("Congratulations!");
        index = 0;
      }
    }
      else {
        index = 0;
      }
  })
}*/

var index = 0;
var codeLength = code.length - 1;

function codeChecker(event) {
  const key = parseInt(event.which || event.detail)
  if (key === code[index]) {
    index++;
    if (index === codeLength) {
      alert("Congratulations!!");
      index = 0;
    }
  }
  else {
    index = 0;
  }
}

function init() {
  document.body.addEventListener("keydown", codeChecker)
}
