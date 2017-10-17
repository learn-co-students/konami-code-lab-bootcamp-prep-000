const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

let index = 0;

// function init() {
//   document.body.addEventListener('keydown',alert(`Hurray!`)) // Write your JavaScript code inside the init() function
// }

const body = document.querySelector('body')

function keydownHandler() {
  body.addEventListener('keydown',function(e) {

  const key = parseInt(e.detail || e.which);

  if (key === code[index]) {
    index++;

    if (index === code.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
})
}

function init() {
  keydownHandler()
}
