const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let check = document.body;
  let index = 0;
  let sequence = [];

  check.addEventListener('keydown', codeSequence, false);

  function codeSequence(e) {
    const key = parseInt(e.detail || e.which);

    sequence.push(key);

      if (sequence.length === code.length) {
        return checkSequence(sequence);
      }
    }

  function checkSequence(array) {
    for (let i = 0; i < code.length; i++) {
      if (code[i] === array[i]) {
        index++;
          if (index === code.length) {
            alert('Konami Master!!');
            index = 0;
          }
      } else {
        index = 0;
      }
    }
  }
}
