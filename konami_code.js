const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0;

function init() {
  // Write your JavaScript code inside the init() function -test2
  const input = document.querySelector('body')
  input.addEventListener('keydown', onKeyDownHandler)
  //input.addEventListener('keydown', function(e) {
  //console.log(e.which)
//})

}


function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);
  console.log(e.which)
  if (key===code[index]){
    index++;
    if (index === code.length) {
      alert("Hurray!");
      index = 0;
    }
  } else {
    index = 0;
  }
  
  
}

init()