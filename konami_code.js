const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0;

function init() {
  // your code here
  var body = document.getElementsByTagName('body')[0];
  
  body.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which);

    if(key === code[index])
    {
      index++;

      if(index === code.length-1)
      {
        alert('you got it right');
        index = 0;
      }
    }else{index = 0}
  })
}
