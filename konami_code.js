const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


let index = 0;
function downKeyHandler(e){
  const key = parseInt(e.detail || e.location);
  console.log(e.detail);
  if(key === code[index]){
    index++;
    if(index == code.length){
      alert("Congratulations!");
      index = 0;
    }
  }else{
    index = 0;
  }
}

function init() {
  const input = document.querySelector('body');
  input.addEventListener('keydown', downKeyHandler);
}
init();