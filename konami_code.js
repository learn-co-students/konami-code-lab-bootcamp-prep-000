const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
// init()

function init() {
  // Write your JavaScript code inside the init() function
  var index = 0;
  var getElement = document.querySelector('body');

  getElement.addEventListener('keydown', function(e) {
    var key = parseInt(e.detail || e.which);

    if (key === code[index]) {
      index++;
      if (index === code.length) {
        window.alert('Hooray!');
        index = 0;
      }
    } else {
      index = 0;
    }

  });

}
