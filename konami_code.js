const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]



let codePos = 0;
document.addEventListener('keydown', function (e) {
  var keyEquiv = parseInt(e.which || e.detail);
  var keyCode = code[codePos];
  if (keyCode === keyEquiv) {
    codePos++;
    if (codePos === code.length) {
      init();
      codePos = 0;
    } else {
      code = 0;
    }
  }

});

function init() {
  alert("HEY baby! You got it right!");
}
