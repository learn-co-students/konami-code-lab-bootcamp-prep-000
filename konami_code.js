const codes = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  var index = 0;
  document.body.addEventListener('keydown', function(e){
    var key = parseInt(e.which || e.detail);
    console.log(key);
    if (key == codes[index]) {
      index++;
      if (key == codes[codes.length -1]) {
        alert("Yay");
      }

    } else {
      index = 0;
    }
  });
}

init();
