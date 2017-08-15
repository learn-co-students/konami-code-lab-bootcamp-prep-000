const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  // const keydown = document.createEvent('Event')
  //
  // keydown.initEvent(
  //   'keydown',
  //   true,
  //   true,
  //   window,
  //   which,
  //   which,
  //   0,
  //   null,
  //   null
  // )


  var index = 0;

  document.body.addEventListener('keydown', function(e) {

    const key = parseInt(e.detail || e.which);

    if (key === code[index]) {
      index++;
      alert("Correct!")

      if (index === code.length) {
        alert("Hurray!");
        index = 0;
      } else {
        index = 0;
      }
    }
  });
}
