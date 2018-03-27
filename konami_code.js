const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  // Write your JavaScript code inside the init() function

const body = document.querySelector('body');
    body.addEventListener('keydown',function(e){
      
      var key=[];
  for(let i=0;i<code.length;i++){
  key[i] = parseInt(e.detail||e.which);
  if(key[i]===code[i]){
    alert("Hurry!");
  }
  else{
    e.preventDefault();
  }
  }
    });
}
