const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let index = 0;
  document.body.addEventListener('keydown', function(e) {
    const key = Number(e.detail || e.which);
    if (key !== code[index]) return index = 0;
    
    index++;
    if (index >= code.length) alert('Hurray!');
  });
}