const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var count = 0;

function init() {
  document.addEventListener("keydown", onKeyDownHandler);
}

function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);
  if (key === code[count]) {
	  count++;
	  if (count === code.length) {
      alert("Hurray!");
      count=0;
	  }
  }  else {
	count = 0;
  }
}
