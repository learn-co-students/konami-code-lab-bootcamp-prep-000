const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var i = 0;
function init() {
  function keyPress(x){
    var key = parseInt(x.which || x.detail);
    if(key === code[i]){
      i++;

      if(i === (code.length - 1)){
        alert('KONAMI CODE!!!111!!!1111111!!!!!!!!!!');
      }
    }
    else {
      i = 0;
      }
  }
document.body.addEventListener('keydown', keyPress);
}
