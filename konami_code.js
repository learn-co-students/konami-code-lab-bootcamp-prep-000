const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let idx = 0;

  function onKeyDownHandler(e){

    let value = parseInt(e.detail || e.which);

    if (value === code[idx]) {
     idx++;

     if (idx === code.length) {
       alert("God Mode Enabled!");
       idx = 0;
     }

   } else {
     idx = 0;
   }
  }

  document.body.addEventListener('keydown', onKeyDownHandler, false);

}
