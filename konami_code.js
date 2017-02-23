const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0;

function init() {
  document.body.addEventListener('keydown', key);
}

function key(e) {
  if(parseInt(e.detail || e.which) == code[index]) index++;
  else index = 0;
  if(index==code.length) success();
}

function success() {
  alert("yaay");
}
