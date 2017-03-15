const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
const body = document.getElementByTagName("body");

var index = 0;

function init() {
  var i = 0;
  document.body.addEventListener("keydown", function(e) {
    var key = parseInt(e.which || e.detail);

    if (key === code[i]) {
      i++;
      console.log(code[i]);
      console.log(i);

      if (i === 9) {
        alert("Easter egg activated!!");
        i = 0;
      }
    } else {
      i = 0;
    }
  });
}

document.onload = init;
