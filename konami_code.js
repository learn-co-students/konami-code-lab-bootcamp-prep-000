const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var value = 0;

    const body = document.querySelector('body')

    body.addEventListener('keydown', function(e) {
      const key = parseInt(e.detail || e.which);

      if (key === code[value]) {
        value++
      if( value === code.length) {
         alert('Congratulations on Typing the Konami Code');

         index = 0;
      }
    } else {
      index = 0;
    }
  });
}
