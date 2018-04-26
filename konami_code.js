const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0;

function Konami(e) {
  const key = parseInt(e.detail || e.which);
  console.log("detail" + e.detail);
  if(key === code[index]){
    index++;
    if(index === code.length) {
      alert('Konami Code!!!@');
      index = 0;
    }
  }
  else
  { index = 0; }
}
 
function init() {
  const bod = document.getElementsByTagName('body')[0];
  bod.addEventListener('keydown', Konami) ;
}

init();


