const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let index = 0

  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which)
    if(key === code[index]){
      index++
    } else {
      index = 0
    }
    console.log(index)
    if(index === 10){
      alert("Hurray!")
    }
  }

  document.body.addEventListener('keydown', onKeyDownHandler)

  console.log("Init success")
}
