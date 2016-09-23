const codes = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
//const codes = [68, 72, 73, 82, 65, 74, 83]
function init() {
  // your code here
  var index = 0;
  document.body.addEventListener('keydown', function(e){
    const key = parseInt(e.which || e.detail);
    if (key === codes[index]) {
      alert("Yay");
      //index++;
      if (key == codes[codes.length -1]) {
        alert("Yay");
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}

init();
