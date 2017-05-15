const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var successIndex = 0

function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which)
  console.log(key)

  if(key === code[successIndex]) {
    if(successIndex === code.length - 1) {
      alert('Congratulations! You entered the Konami Code')

      successIndex = 0
    }
  } else {
    successIndex = 0
  }
}

function init() {
  const body = document.querySelector('body')
  // body.addEventListener('keydown',onKeyDownHandler)
  body.addEventListener('keydown',function(e) {
    const key = parseInt(e.detail || e.which)

    if(key === code[successIndex]) {
      successIndex++
      if(successIndex === code.length - 1) {
        alert('Congratulations! You entered the Konami Code')

        successIndex = 0
      }
    } else {
      successIndex = 0
    }
  })
} // init
