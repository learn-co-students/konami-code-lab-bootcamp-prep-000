const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0;
function init() {
  // Write your JavaScript code inside the init() function
var body = document.body;

body.addEventListener('keydown', function(e){
  var keydown1 = parseInt(e.which || e.detail || e.location);
  
  if(keydown1 == code[index]){
    index++;
  } else {
    index = 0;
  }
  
  if(index == code.length){
    alert('You did it!');
    index = 0;
  }
});
  
}