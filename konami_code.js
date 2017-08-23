const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);
  return console.log(e.which());
  for(let i = 0; i < code.length; i++){

    if (key === code[i]) {
      i++;

      if (i === code.length) {

          alert("Congratulatory Message");
          i = 0;
      }
    }
    else {
      i = 0;
    }
  }
}
function init() {
  // document.body.addEventListener('keydown', function(event){
  // onKeyDownHandler(event);
  // })

  document.body.addEventListener('keydown',onKeyDownHandler);
  )
}
