const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let index=0;

  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);

    if (key === code[index]) {
      index++;
      console.log(key);
      if (index === code.length) {
        alert("Congrats -- you cracked the Konami Code!");
      }
    } else {
      console.log("oops, start again");
      index = 0;
    }
  }


  document.body.addEventListener('keydown', function(e) {
    onKeyDownHandler(e);
  });
}
