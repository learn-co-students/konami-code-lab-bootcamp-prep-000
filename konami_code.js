const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;
function init() {
const target = document.body
   target.addEventListener('keydown', function(key) {
     let keyPressed = parseInt(key.which || key.detail);
     if (keyPressed === code[index]) {
      index++;

       if (index === code.length) {
         alert('Yes!');
         index = 0;
       }
     }
    else {
       index = 0;
     }
   })
 };
