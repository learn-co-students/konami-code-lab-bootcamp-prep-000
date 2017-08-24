const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0;
function init() {
  // Write your JavaScript code inside the init() function
  document.addEventListener('keydown', onKeyDownHandler);
}


  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);
    console.log(key);
    if (index >= code.length - 1)
    {
      alert('Winner winner chicken dinner');
      index = 0;
    }
    else if(key === code[index])
    {
      index++;
    }
    else {
      index = 0;
    }

  }

  init();
