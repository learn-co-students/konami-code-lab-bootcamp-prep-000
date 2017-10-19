const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0

function onKeyDownHandler(e) {
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
}


function init() {
  const body = document.getElementsByTagName('body')[0]
  // Write your JavaScript code inside the init() function
  body.addEventListener('keydown', function(e) {
    onKeyDownHandler(e)
  })
}
