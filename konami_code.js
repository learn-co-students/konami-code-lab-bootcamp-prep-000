const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

// Keep track of index outside of the event handler.
let index = 0

//When you're testing the code out in the browser, be sure to call init() to attach the event listener and set everything up
function init() {
  const body = document.body

  body.addEventListener('keydown', onKeyDownHandler(e))
}

// This is the function that would be invoked by the event listener.
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

/*
const main = document.getElementById('main')

main.addEventListener('click', function(event) {
  alert('I was clicked!')
})

const input = document.querySelector('input')

input.addEventListener('keydown', function(e) {
  console.log(e.which)
})
*/
