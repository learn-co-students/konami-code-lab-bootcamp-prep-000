const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

var index = 0;
function init() {

}
document.body.addEventListener('keydown', function (e) {
 var key = parseInt(e.detail || e.which || e.location);
  if (key === code[index]) {
  index++;
    if (index === code.length) {
      alert ("congrats! you broke the code!");
      index = 0;
    }
  } else {
    index = 0;
  }
})
