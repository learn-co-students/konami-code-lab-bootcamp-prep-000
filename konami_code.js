const code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

	function init() {
 
   let index = 0;
  
  document.body.addEventListener('keydown', function(e) {
    let keyPressed = e.key;
    if (keyPressed === code[index]) {
      index++;
      
      if (index === code.length) {
        alert('Congratulations!');
        index = 0;
      }
    } else {
      index = 0;
    }
  });
} 	
