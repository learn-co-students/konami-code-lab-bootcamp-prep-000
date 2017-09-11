const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {

  // Keep track of index outside of the event handler.
  let index = 0;

  window.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.location || e.which);

    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert("Hurray!");

        index = 0
      }
    } else {
      index = 0;
    }
  });


}
