const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  

  
function init() {
  
  const main = document.getElementById('mocha')
  
  main.addEventListener('keydown', function(e) {
    
    function onKeyDownHandler(e) {
      const key = parseInt(e.detail || e.which);
      var checkCode = [];
      i = 0;
      
      while (checkCode != code) {
        if (key === code[i]) {
          checkCode.push(key);
        } else {
          i = 0;
          checkCode = [];
        }
      }
        
      alert("Hurray!");
      i = 0;
      checkCode = 0;
    
    }
  });  
}