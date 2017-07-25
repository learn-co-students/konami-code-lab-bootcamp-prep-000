const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function

  // Keep track of index outside of the event handler.
  let index = 0;

  document.body.addEventListener('keydown', function(e){

    const key = parseInt(e.which || e.detail)
    if (key == code[index]){
      index++
      if (index == code.length){
        alert('you found the code!')
        index = 0
      }
    }
    else{ index = 0 }

  })
}
init()
