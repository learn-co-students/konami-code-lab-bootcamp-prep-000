
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  document.addEventListener('keydown', function(e) {
    for (var i = 0; i < code.length; i++) {
      const key = parseInt(e.detail || e.which);
      if (key === code[i]) {
        alert('Yes');
      }
    }
  });
}
