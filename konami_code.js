const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0

function okdh(e) {
  const key = parseInt(e.detail || e.which);
  if (key === code[index]) {
  index++;
  if (index === code.length) {
    alert('Congratulations!');
    index = 0;
  }}
 else {
  index = 0;
}
}


function init() {
  const body = document.body
  body.addEventListener('keydown', function(e) {
      okdh(e) })}
