const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
function init() {
  let index = 0;
  const key = document.body;
  key.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which);
    if (key === code[index]) {
      index++;
      if (index === code.length) {
        alert('Congratulations on Typing the Konami Code');
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}
