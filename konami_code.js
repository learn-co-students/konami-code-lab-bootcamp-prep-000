const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

init();
function init() {
  // your code here
  var index = 0;
  document.body.addEventListener('keydown', function(event) {
    var charCodeInt = parseInt(event.keyCode);

    if (charCodeInt === code[index]) {
      index++;
    } else {
      index = 0;
    }
    if (index === code.length){
      alert("YOU DID IT!");
      index = 0;
    }
  });
}
