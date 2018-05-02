const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  var index = 0
  document.body.addEventListener('keydown', onKeyDownHandler);

  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which || e.location);
    console.log(key) 
    if(key === code[index]) {
        index++;
        if (index === code.length-1) {
          alert('Congrats!');
          index = 0;
        }
      } else { 
        index = 0;
      }
    }
  }

init()
