const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  const body = document.querySelector('body');
  //keydown function
  let i = 0;
  function onKeyDownHandler(eve){
    const key = parseInt(eve.detail || eve.which);
    if(key === code[i]){
      i++;;
      if(i === code.length){
        alert("Correct!")
      }
    } else {
      i = 0;
    }
  }

  body.addEventListener('keydown', onKeyDownHandler)

}
