const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


function init() {
  // Write your JavaScript code inside the init() function
let index = 0
  function onKeyDownHandler(e) {
    const key = parseInt(e.location || e.which)
    console.log(key)
    if (key === code[index]){
      index++
      if (index === code.length){
        alert("Konami!")
      }
    } else {
      index = 0
    }
  }
  document.body.addEventListener('keydown', onKeyDownHandler)
}
/*
const alphabet = [65, 66, 67];
let index = 0;

function onKeyDownHandler(e) {

  const key = parseInt(e.detail || e.which)
  if (key === alphabet[index]) {
    index++
    if (index === alphabet.length) {
      alert("Hurray!")
      index = 0
    }
  } else{
    index = 0
  }
}

onKeyDownHandler()*/
init()
