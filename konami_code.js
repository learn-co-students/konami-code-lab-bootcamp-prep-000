const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  const body = document.querySelectorAll('body')

  body.addEventListener('keydown', function(e) {
    if (e.which === code) {
      alert('CONGRATULATIONS!!!')
    }
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
