const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0;

function init() {
  // your code here
  const doc=document.body;//getElementsByTagName('body');
  doc.addEventListener('keydown',getkey);
}

function getkey(k){
const key = parseInt(k.detail || k.which)
 if (key === code[index]) {
  index++
  if (index === code.length - 1) {
    alert("Congratulations!")
    index = 0
  }
} else {
  index = 0
}
}
