const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0;
function onKeyDownHandler(e) {
  //console.log("here")
  const key = parseInt(e.detail || e.which);
  if (key === code[index]) {
    index++;
    if (index === code.length) {
      window.alert("Hurray!");
      index = 0;
    }
  }
  else {
    index = 0;
  }
}
function init() {
  document.addEventListener('keydown', function(e) {
    onKeyDownHandler(e);
  })
}
//init();
