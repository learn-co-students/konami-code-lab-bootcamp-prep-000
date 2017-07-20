const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let index = 0;
let key = null;


function init() {
  document.body.addEventListener('keydown', function(e) {
    key = parseInt(e.detail || e.which);
    if (key === code[index]){
      index++
      if (index === code.length){
        alert("I am done!");
        index = 0;
      }
    } else {
      index = 0;
    }
  })
}
