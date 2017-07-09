const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0;

const body = document.querySelector('body');

function init(){
  body.addEventListener('keydown', function(e){
    const key = parseInt(e.which || e.detail);

    if(key === code[index]){
      index++;
      if(index = code.length){
        alert('Hurray!');
        index=0;
      }
    }
    else{
      index=0;}
  });

}
