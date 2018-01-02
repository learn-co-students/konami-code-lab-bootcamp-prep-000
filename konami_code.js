const alphabet = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


function init() {
  // Write your JavaScript code inside the init() function
    let index = 0;

  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which);
    console.log(key, index);
    if (alphabet[index] === key) {
      index++;

      if (index === alphabet.length) {
        alert('Hurray!');

        index = 0;
      }
    } else {
      index = 0;
    }
  });

}