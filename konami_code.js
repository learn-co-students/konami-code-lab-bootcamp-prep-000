const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

// const main = document.querySelector('body')

function init() {

var index = 0;
function onKeyDownHandler(e) {
  const key = parseInt(e.which || e.detail)
  if (key === code[index]) {
    index++;
    if (index === code.length) {
      window.alert("You have unlimited lives!");
      index = 0;
    }
  }
  else {
    index = 0
  }
}

document.body.addEventListener('keydown', onKeyDownHandler)
}
