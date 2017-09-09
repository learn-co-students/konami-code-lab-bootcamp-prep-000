const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var index = 0;
  document.body.addEventListener("keydown", function keyDownHandler (e) {
    let key = parseInt(e.which || e.detail);
    console.log('e.which', e.which);
    console.log('e.detail', e.detail);
    console.log('e.location', e.location);
    if (key === code[index]) {
        index++;
    }
	   else {
        index = 0;
    }
    if (index === code.length) {
        alert("Success");

        index = 0;
    }
  });
}
