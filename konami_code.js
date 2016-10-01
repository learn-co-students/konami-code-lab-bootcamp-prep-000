var code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0;
var init = function() {
document.body.addEventListener('keydown', function(e){




  const key = parseInt(e.detail || e.which)

  if(index === code.length - 1){
      alert('YOU DID IT!');
    }
  if(key === code[index]){
    index++;
  }


  else {
    index = 0;
  }
}, false);
}
