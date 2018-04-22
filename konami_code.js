const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let id = 0;
function init() {
const konamiCode = document.querySelector('body')
konamiCode.addEventListener('keydown', function(k){
 const key = parseInt(k.detail || k.which);
   for(let i = 0; i < code.length; i++){
    if (key === code[i]) {
    id ++;
 
    if (i === code.length - 1) {
      alert("wow coder!");
 
      id = 0;
    }
  } else {
    id = 0;
  }
} 
})
}
