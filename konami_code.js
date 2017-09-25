const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  // Write your JavaScript code inside the init() function
  var index = 0;

// This is the function that would be invoked by the event listener.
  document.body.addEventListener('keydown', function (e) {
    const key = parseInt(e.detail || e.location);

    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert('Yay');
      }
    } else {
      index = 0;
    }
  });
}
//document.body.addEventListener('keydown', init);
