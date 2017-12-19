const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  const body = document.querySelector('body');
  let index = 0;

  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);
    console.log(key);
    console.log(index);
    console.log(code[index]);
    if(key === code[index]) {
      console.log('match')
      index++;

      if(index === code.length) {
        alert("Hurray");
      }
    } else  {
      console.log('reset')
      index = 0;
    }
  }

  body.addEventListener('keydown', onKeyDownHandler);
}

init();
