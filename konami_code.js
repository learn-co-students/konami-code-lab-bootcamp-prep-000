const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
const page = document.body;
let index = 0;

  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);
    // console.log(e.which);
    if (key === code[index]) {
      index++;
      if (index === code.length) {
        alert('Horray!!!');
        index = 0;
      }
    } else {
      index = 0;
    }
  }

  page.addEventListener('keydown', function(e) {
    onKeyDownHandler(e)
  })
}
