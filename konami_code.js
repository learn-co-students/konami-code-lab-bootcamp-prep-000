const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here

  // keep track of index outside of the event handler
  var index = 0

  document.body.addEventListener('keydown', function (e) {

    // assign keystroke its number as an integer
    const key = parseInt(e.which || e.detail);

    //
    if (key === code[index]) {

      index++

        if (index === code.length-1) {
          alert("KONAMI CODE!")
          index = 0}

      } else {
        index = 0
      }
    }
)}

init();
