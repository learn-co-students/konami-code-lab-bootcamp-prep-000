const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var index = 0;
function init() {
  // your code here
  //  key = parseInt(code[i]);
  document.body.addEventListener('keydown', function(e) {
    var key = parseInt(e.detail || e.which);
    if (key === code[index]) {
      if (index === code.length - 1 ) {
        alert("You did it!");
        index = 0;
      }
      index++
    } else {
      index = 0
    }
  })
}
