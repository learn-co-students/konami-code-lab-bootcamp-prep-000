const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
/*
let index = 0;

function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);

  if (key === code[index]) {
    index++;

    if (index === code.length) {
      alert('Hurray!');

      index = 0;
    }
  } else {
    index = 0;
  }
}

const input = document.querySelector('body')
let yourCode = []
let theCode = []

input.addEventListener('keydown', function(e) {
  yourCode.push(e.which)
  theCode = yourCode
  console.log(theCode)

  if (code === theCode) {
    console.log('Congratulations!')
  }

})
*/


function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;

  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which);

    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert('Congratulations!');

        index = 0;
      }
    } else {
      index = 0;
    }
  });
}
