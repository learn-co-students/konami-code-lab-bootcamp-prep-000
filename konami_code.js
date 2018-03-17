const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
 
function init() {
  let i = 0;

  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);
      if (key === code[i]) {
      i++;
        if (i === code.length) {
          alert("Congratulations!");
          i = 0;
          }
        } else {
          i = 0;
        }
      }
      
  for (let i=0;i<code.length;i++){
    document.body.addEventListener('keydown', onKeyDownHandler);
  }
}