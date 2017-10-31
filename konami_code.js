const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var i = 0;
  document.body.addEventListener('keydown', function(e) {
    const keyValue = parseInt(e.which || e.detail);
    if (keyValue === code[i]) {
      i++;
      if (i === code.length) {
        alert("Congratulations!");
        index = 0;
      }
    } else {
      index = 0;
    }
  })
}
