const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let i = 0;
  
  
  document.body.addEventListener('keydown', function(event){
  
    var key = parseInt(event.detail || event.which);
    
    if(key === code[i]){
      i++;
    
    if(i === code.length){
      alert("You got the right code");
      i = 0;
      } 
    } else {
      i = 0;
    }
  });

}