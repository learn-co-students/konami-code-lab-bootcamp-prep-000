const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let body = document.body;
  let index = 0;
  
    body.addEventListener('keydown', function(e) {
      if (parseInt(e.detail || e.which) === code[index]){
        index++;
      if (index === code.length) {
      alert('Congrats, you did it!');
      index = 0;
      } 
      
      }else {
        index = 0;
      }
    });
      
}