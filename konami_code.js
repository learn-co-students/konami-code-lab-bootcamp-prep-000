const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  var i=0;
  document.body.addEventListener('keydown', function(e){
    
      if (parseInt(e.which||e.detail) === code[i]){
        i++;
          if (i === code.length - 1){
            alert('You are a KONAMI CODE Master!!');
            i=0;
          }
      }
      else {
          i = 0;
      }

  })
}
