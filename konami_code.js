const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

var index = 0;

function init() {
  // your code here
}
function onKeyDownHandler(e) {
 var key = parseInt(e.detail || e.which);

 if (key === code[index]) {
 	index++;

  if (index === code.length -1) {
  	alert('You\'re a genius!');
  }
 }
 else {
 	index = 0;
 }
}

document.body.addEventListener('keydown', onKeyDownHandler);
