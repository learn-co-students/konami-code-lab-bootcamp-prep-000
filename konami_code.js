const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  document.body.addEventListener("keydown", onKeyDownHandler);
  let numCorrect = 0;

  function onKeyDownHandler(event) {
    const key = parseInt(event.which);

    if (key === code[numCorrect]) {
      numCorrect++;

      if (numCorrect === code.length) {
        alert("Congratulations!");

        numCorrect = 0;
      }

    } else numCorrect = 0;
  }
}
