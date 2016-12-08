const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

/* let body = document.body */
var index = 0




/* function onKeyDownHandler(e) {
  const key = parseInt(e.which || e.detail);
  if (key === code[index]) {
    index++
    if (index === code.length -1) {
    alert("You did it!!");
    index = 0;
    }
  } else {
  index = 0;
}

function init() {
  document.body.addEventListener("keydown", function(e){onKeyDownHandler})
} */

function init() {
  document.body.addEventListener("keydown", function(e){
    const key = parseInt(e.which || e.detail);
    if (key === code[index]) {
      index++
      if (index === code.length -1) {
      alert("You did it!!");
      index = 0;
      }
    } else {
    index = 0;
   }
  )}
}
