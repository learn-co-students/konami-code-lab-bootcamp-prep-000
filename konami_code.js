const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0;

function init() {
  document.body.addEventListener('keydown', callback);
}

function callback(e){
  var key = parseInt(e.which || e.detail)
  for(var i = 0; i <= code.length; i++){
    if(key === code[i]){
      index++
        if(index === code.length - 1){
          alert("You cracked the code!!!");
        }
    } else {
      code[index];
    }
  }
}
