const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;

function init() {
  // your code here

  document.body.addEventListener('keydown', function(event) {
    const key = parseInt(event.detail || event.which);

    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert("hurray!");

        index = 0;
      }
    } else {
      index = 0;
    }
  })

  // if (enteredKeys.toString() == code.toString()) {
  //   alert("congratulations!")
  // } else if (enteredKeys.length > code.length) {
  //   enteredKeys = [];
  // }
}
